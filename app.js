/* app.js
   Conecta registro/login (HTML proporcionado) con localStorage
   y genera el test de PNL con 5 niveles (demo: 4 preguntas por nivel).
   Autor: ChatGPT (adaptado a tu HTML/CSS)
*/
  const btnLogin = document.getElementById("btnLogin");
  const loginModal = document.getElementById("loginModal");
  const closeLogin = document.getElementById("closeLogin");

  btnLogin.addEventListener("click", e => {
    e.preventDefault();
    loginModal.style.display = "flex";
  });

  closeLogin.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

/* ---------- Config ---------- */
const PERCENT_THRESHOLD = 85; // % necesario para aprobar
const TOTAL_POR_TEST = 20;    // intención: 20 preguntas por test (en demo usa min(disponibles,20))

/* ---------- Util: localStorage users ---------- */
const USERS_KEY = 'pnl_users';

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
  } catch (e) {
    return {};
  }
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/* ---------- Datos de ejemplo (4 preguntas por nivel) ---------- */
const nivelesPreguntas = [
  // Nivel 1
  [
    { q: "¿Qué significa PNL?", choices: ["Programación Neurolingüística","Proceso Neuronal Lógico","Potencial Neuro Lingual"], answerIndex: 0 },
    { q: "¿Cuál es un objetivo de la PNL?", choices: ["Modificar conductas","Invertir dinero","Aprender idiomas automáticamente"], answerIndex: 0 },
    { q: "En PNL, ¿qué es anclaje?", choices: ["Asociar un estímulo a una respuesta","Un software","Una técnica de memoria"], answerIndex: 0 },
    { q: "¿Qué representa el modelado en PNL?", choices: ["Imitar estrategias exitosas","Hacer maquetas 3D","Crear modelos matemáticos"], answerIndex: 0 }
  ],
  // Nivel 2
  [
    { q: "¿Qué es calibrar en PNL?", choices: ["Observar cambios sutiles","Calibrar equipos","Medir la presión"], answerIndex: 0 },
    { q: "¿Qué son submodalidades?", choices: ["Características sensoriales de la experiencia","Técnicas de respiración","Puntuaciones en un test"], answerIndex: 0 },
    { q: "¿Qué es reencuadre?", choices: ["Cambiar el significado de una experiencia","Reintentar una acción","Volver a encuadrar fotos"], answerIndex: 0 },
    { q: "¿Qué busca el rapport?", choices: ["Conexión y sintonía","Romper confianza","Realizar experimentos"], answerIndex: 0 }
  ],
  // Nivel 3
  [
    { q: "¿Qué técnica usa PNL para fobias?", choices: ["Desensibilización por anclaje","Hipnosis profunda","Electroshock"], answerIndex: 0 },
    { q: "¿Qué es una estrategia en PNL?", choices: ["Secuencia interna de procesos mentales","Una contraseña","Un plan de negocio"], answerIndex: 0 },
    { q: "¿Para qué sirven las metáforas en PNL?", choices: ["Para comunicar y cambiar creencias","Para decorar un texto","Para hacer poesía"], answerIndex: 0 },
    { q: "¿Qué es disociación en PNL?", choices: ["Ver una experiencia desde fuera","Unirse intensamente a la experiencia","Trabajar en equipo"], answerIndex: 0 }
  ],
  // Nivel 4
  [
    { q: "¿Qué es congruencia en comunicación?", choices: ["Coherencia entre verbal y no verbal","Uso de congruencias matemáticas","Repetir palabras"], answerIndex: 0 },
    { q: "¿Qué estudia la representación interna?", choices: ["Cómo cada uno codifica experiencias","El sistema inmunológico","Estructuras de la lengua"], answerIndex: 0 },
    { q: "¿Qué estrategia favorece la motivación?", choices: ["Visualización de resultados","Ignorar objetivos","Evitar feedback"], answerIndex: 0 },
    { q: "¿Qué facilita el aprendizaje acelerado?", choices: ["Modelado y práctica deliberada","Dormir menos","Repetir sin sentido"], answerIndex: 0 }
  ],
  // Nivel 5
  [
    { q: "¿Qué aporta la anécdota clínica en PNL?", choices: ["Ejemplos para modelar y confirmar","Datos científicos exclusivamente","Información irrelevante"], answerIndex: 0 },
    { q: "¿Qué significa 'estado' en PNL?", choices: ["Condición emocional/física de la persona","Estado civil","Estado geográfico"], answerIndex: 0 },
    { q: "¿Qué es una estrategia de cambio sostenible?", choices: ["Integrar hábitos y feedback","Tener un deseo fuerte sin plan","Cambios instantáneos sin práctica"], answerIndex: 0 },
    { q: "¿Por qué es importante la ecología en PNL?", choices: ["Garantizar que el cambio no perjudique al contexto","Para medir el medio ambiente","Para ecología real"], answerIndex: 0 }
  ]
];

/* ---------- UI hooks (HTML que enviaste) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Switch botones (register <-> login)
  const signInBtn = document.getElementById('sign-in');   // en la pantalla register (botón Iniciar Sesión)
  const signUpBtn = document.getElementById('sign-up');   // en la pantalla login (botón Registrarse)
  const registerContainer = document.querySelector('.container-form.register');
  const loginContainer = document.querySelector('.container-form.login');

  if (signInBtn) signInBtn.addEventListener('click', () => {
    // mostrar login, ocultar register
    registerContainer.classList.add('hide');
    loginContainer.classList.remove('hide');
  });
  if (signUpBtn) signUpBtn.addEventListener('click', () => {
    loginContainer.classList.add('hide');
    registerContainer.classList.remove('hide');
  });

  // Forms
  const formRegister = document.querySelector('.form-register');
  const formLogin = document.querySelector('.form-login');

  if (formRegister) formRegister.addEventListener('submit', handleRegister);
  if (formLogin) formLogin.addEventListener('submit', handleLogin);
});

/* ---------- Helpers para mostrar mensajes ya definidos en HTML ---------- */
function showFormMessage(formEl, type, message) {
  // formEl: elemento form, type: 'error'|'success'
  // en tu HTML los divs son .alerta-error y .alerta-exito
  const alertError = formEl.querySelector('.alerta-error');
  const alertSuccess = formEl.querySelector('.alerta-exito');

  if (type === 'error') {
    if (alertSuccess) alertSuccess.style.display = 'none';
    if (alertError) { alertError.textContent = message; alertError.style.display = 'block'; }
  } else {
    if (alertError) alertError.style.display = 'none';
    if (alertSuccess) { alertSuccess.textContent = message; alertSuccess.style.display = 'block'; }
  }

  // ocultar mensaje después de 2.5s
  setTimeout(() => {
    if (alertError) alertError.style.display = 'none';
    if (alertSuccess) alertSuccess.style.display = 'none';
  }, 2500);
}

/* ---------- Registro ---------- */
function handleRegister(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const name = (form.userName && form.userName.value || '').trim();
  const email = (form.userEmail && form.userEmail.value || '').trim().toLowerCase();
  const pass = (form.userPassword && form.userPassword.value || '').trim();

  // validaciones básicas
  if (!name || !email || !pass) {
    showFormMessage(form, 'error', 'Todos los campos son obligatorios');
    return;
  }
  // email simple validar
  if (!validateEmail(email)) {
    showFormMessage(form, 'error', 'Correo inválido');
    return;
  }
  // contraseña minima 4
  if (pass.length < 4) {
    showFormMessage(form, 'error', 'La contraseña debe tener al menos 4 caracteres');
    return;
  }

  const users = loadUsers();
  if (users[email]) {
    showFormMessage(form, 'error', 'Usuario ya está registrado');
    return;
  }

  // crear usuario
  users[email] = {
    name,
    email,
    pass,
    nivel: 1,
    historial: []
  };
  saveUsers(users);

  showFormMessage(form, 'success', 'Registrado con éxito');

  // acceder automáticamente al test después de 700ms
  setTimeout(() => {
    // iniciar sesión automático
    loginSuccess(email);
  }, 700);
}

/* ---------- Login ---------- */
function handleLogin(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = (form.userEmail && form.userEmail.value || '').trim().toLowerCase();
  const pass = (form.userPassword && form.userPassword.value || '').trim();

  if (!email || !pass) {
    showFormMessage(form, 'error', 'Todos los campos son obligatorios');
    return;
  }
  const users = loadUsers();
  const user = users[email];
  if (!user || user.pass !== pass) {
    showFormMessage(form, 'error', 'Credenciales inválidas');
    return;
  }

  showFormMessage(form, 'success', 'Iniciaste sesión correctamente');
  setTimeout(()=> loginSuccess(email), 600);
}

/* ---------- Email simple ---------- */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ---------- Al iniciar sesión o registro exitoso ---------- */
let CURRENT_USER_EMAIL = null;

function loginSuccess(email) {
  CURRENT_USER_EMAIL = email;
  // ocultar ambos contenedores de formulario
  document.querySelectorAll('.container-form').forEach(c => c.classList.add('hide'));

  // crear UI del test (inserta en body)
  renderTestApp();
}

/* ---------- Renderiza toda la UI del test/dash al entrar ---------- */
function renderTestApp() {
  // limpiar un posible contenedor previo
  const existing = document.getElementById('pnl-app-root');
  if (existing) existing.remove();

  const users = loadUsers();
  const user = users[CURRENT_USER_EMAIL];

  const root = document.createElement('div');
  root.id = 'pnl-app-root';
  root.style.padding = '28px';
  root.style.maxWidth = '980px';
  root.style.margin = '24px auto';
  root.style.background = 'rgba(255,255,255,0.95)';
  root.style.borderRadius = '12px';
  root.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';

  // Header
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.marginBottom = '12px';

  const h = document.createElement('div');
  h.innerHTML = `<h2 style="margin:0">Bienvenido, ${user.name}</h2><div style="color:#555">Nivel actual: <strong id="displayNivel">${user.nivel}</strong></div>`;
  header.appendChild(h);

  const rightBtns = document.createElement('div');
  const btnPresent = createButton('Presentar test', '#2e7d32');
  const btnHist = createButton('Ver historial', '#1976d2');
  const btnLogout = createButton('Cerrar sesión', '#c62828');
  btnPresent.style.marginRight = '8px';
  rightBtns.appendChild(btnPresent);
  rightBtns.appendChild(btnHist);
  rightBtns.appendChild(btnLogout);
  header.appendChild(rightBtns);

  root.appendChild(header);

  // Contenedor del test
  const testArea = document.createElement('div');
  testArea.id = 'testArea';
  testArea.innerHTML = `<div id="testInfo" style="margin-bottom:10px;color:#444">Presiona <strong>Presentar test</strong> para comenzar. Cada test tiene <strong>${TOTAL_POR_TEST}</strong> preguntas (si hay menos, se usarán las disponibles).</div>`;
  root.appendChild(testArea);

  // Contenedor resultado
  const resultArea = document.createElement('div');
  resultArea.id = 'resultArea';
  resultArea.style.marginTop = '18px';
  root.appendChild(resultArea);

  // historial container hidden
  const histContainer = document.createElement('div');
  histContainer.id = 'histContainer';
  histContainer.style.display = 'none';
  histContainer.style.marginTop = '12px';
  root.appendChild(histContainer);

  document.body.appendChild(root);

  // eventos
  btnPresent.addEventListener('click', ()=> startTestForUser(user.nivel));
  btnHist.addEventListener('click', ()=> toggleHist(user));
  btnLogout.addEventListener('click', ()=> {
    CURRENT_USER_EMAIL = null;
    // eliminar root y mostrar formularios otra vez
    root.remove();
    document.querySelectorAll('.container-form').forEach(c => c.classList.remove('hide'));
  });

  // función para actualizar nivel en UI
  function updateNivelUI() {
    const users2 = loadUsers();
    const u2 = users2[CURRENT_USER_EMAIL];
    const disp = document.getElementById('displayNivel');
    if (disp) disp.textContent = u2.nivel;
  }

  // Exponer actualización externa
  window.__updateNivelUI = updateNivelUI;
}

/* ---------- Crear botón helper ---------- */
function createButton(text, bg='#2e7d32') {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.style.background = bg;
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.padding = '8px 12px';
  btn.style.borderRadius = '8px';
  btn.style.cursor = 'pointer';
  btn.style.fontWeight = '600';
  return btn;
}

/* ---------- START TEST: seleccionar preguntas y renderizar ---------- */
let intentoActual = null; // { nivel, preguntas, respuestas, fecha }

function pickRandomQuestionsForLevel(nivel) {
  const pool = nivelesPreguntas[nivel-1] || [];
  const copy = pool.slice();
  // shuffle
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  const chosen = copy.slice(0, Math.min(TOTAL_POR_TEST, copy.length));
  // mezclar opciones en cada pregunta y recalcular índice correcto
  return chosen.map(q => {
    const choices = q.choices.map((c, i) => ({ c, i }));
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    const newIndex = choices.findIndex(x => x.i === q.answerIndex);
    return { q: q.q, choices: choices.map(x => x.c), answerIndex: newIndex };
  });
}

function startTestForUser(nivel) {
  // preparar intento
  const preguntas = pickRandomQuestionsForLevel(nivel);
  if (preguntas.length === 0) {
    alert('No hay preguntas configuradas para este nivel (demo).');
    return;
  }
  intentoActual = { nivel, preguntas, respuestas: Array(preguntas.length).fill(null), fecha: new Date().toISOString() };

  renderQuiz(intentoActual);
}

/* ---------- Render quiz ---------- */
function renderQuiz(intento) {
  const testArea = document.getElementById('testArea');
  const resultArea = document.getElementById('resultArea');
  const histContainer = document.getElementById('histContainer');
  if (!testArea) return;
  testArea.innerHTML = ''; resultArea.innerHTML = ''; histContainer.style.display='none';

  const header = document.createElement('div');
  header.style.marginBottom = '12px';
  header.innerHTML = `<strong>Test - Nivel ${intento.nivel}</strong> (<span>${intento.preguntas.length}</span> preguntas)`;
  testArea.appendChild(header);

  const form = document.createElement('form');
  form.id = 'quizForm';

  intento.preguntas.forEach((p, idx) => {
    const qDiv = document.createElement('div');
    qDiv.style.marginBottom = '12px';
    qDiv.style.padding = '10px';
    qDiv.style.borderRadius = '8px';
    qDiv.style.background = 'rgba(0,0,0,0.03)';

    const qTitle = document.createElement('div');
    qTitle.innerHTML = `<strong>${idx+1}. ${p.q}</strong>`;
    qDiv.appendChild(qTitle);

    const opts = document.createElement('div');
    opts.style.marginTop = '8px';

    p.choices.forEach((ch, k) => {
      const id = `q${idx}_opt${k}`;
      const label = document.createElement('label');
      label.style.display = 'block';
      label.style.marginBottom = '6px';
      label.style.cursor = 'pointer';
      label.innerHTML = `<input type="radio" name="q${idx}" value="${k}" id="${id}"> ${ch}`;
      opts.appendChild(label);
    });

    qDiv.appendChild(opts);
    form.appendChild(qDiv);
  });

  const controls = document.createElement('div');
  controls.style.display = 'flex';
  controls.style.gap = '10px';
  controls.style.marginTop = '8px';

  const btnEval = createButton('Evaluar test', '#2e7d32');
  const btnCancel = createButton('Cancelar', '#9e9e9e');
  controls.appendChild(btnEval);
  controls.appendChild(btnCancel);
  form.appendChild(controls);

  testArea.appendChild(form);

  // Eventos
  btnEval.addEventListener('click', (ev) => {
    ev.preventDefault();
    evaluateCurrentAttempt();
  });
  btnCancel.addEventListener('click', (ev) => {
    ev.preventDefault();
    // limpiar y volver al header
    testArea.innerHTML = `<div id="testInfo" style="margin-bottom:10px;color:#444">Presiona <strong>Presentar test</strong> para comenzar. Cada test tiene <strong>${TOTAL_POR_TEST}</strong> preguntas (si hay menos, se usarán las disponibles).</div>`;
    document.getElementById('resultArea').innerHTML = '';
  });

  // scroll to top
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ---------- Evaluar intento ---------- */
function evaluateCurrentAttempt() {
  if (!intentoActual) return;
  const total = intentoActual.preguntas.length;
  let answeredCount = 0;
  for (let i = 0; i < total; i++) {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (val) { intentoActual.respuestas[i] = parseInt(val.value); answeredCount++; } else intentoActual.respuestas[i] = null;
  }
  if (answeredCount < total) {
    alert('Quedan preguntas sin responder');
    return;
  }

  // calcular correctas
  let correct = 0;
  const details = [];
  intentoActual.preguntas.forEach((p, i) => {
    const resp = intentoActual.respuestas[i];
    const ok = resp === p.answerIndex;
    if (ok) correct++;
    details.push({ ok });
  });

  const incorrect = total - correct;
  const porcentaje = (correct / total) * 100;

  // mostrar resultado: círculos y mensaje (no mostrar respuestas)
  const resultArea = document.getElementById('resultArea');
  resultArea.innerHTML = '';

  const circles = document.createElement('div');
  circles.style.display = 'flex';
  circles.style.alignItems = 'center';
  circles.style.gap = '16px';
  circles.style.marginBottom = '12px';

  const green = document.createElement('div');
  green.style.width = '120px';
  green.style.height = '120px';
  green.style.borderRadius = '50%';
  green.style.background = 'linear-gradient(135deg,#4caf50,#2e7d32)';
  green.style.display = 'flex';
  green.style.alignItems = 'center';
  green.style.justifyContent = 'center';
  green.style.color = '#fff';
  green.style.fontSize = '22px';
  green.style.fontWeight = '700';
  green.textContent = `${correct} Aciertos`;

  const red = document.createElement('div');
  red.style.width = '120px';
  red.style.height = '120px';
  red.style.borderRadius = '50%';
  red.style.background = 'linear-gradient(135deg,#ef5350,#c62828)';
  red.style.display = 'flex';
  red.style.alignItems = 'center';
  red.style.justifyContent = 'center';
  red.style.color = '#fff';
  red.style.fontSize = '22px';
  red.style.fontWeight = '700';
  red.textContent = `${incorrect} Errores`;

  circles.appendChild(green);
  circles.appendChild(red);
  resultArea.appendChild(circles);

  // Mensaje
  const msg = document.createElement('div');
  msg.style.marginBottom = '12px';
  msg.style.fontWeight = '700';
  if (porcentaje >= PERCENT_THRESHOLD) {
    // aprobar
    const users = loadUsers();
    const u = users[CURRENT_USER_EMAIL];
    if (u.nivel < 5) {
      u.nivel = u.nivel + 1;
      msg.innerHTML = `🎉 ¡Felicidades! Has aprobado el test (${porcentaje.toFixed(1)}%) y pasado al nivel ${u.nivel}.`;
    } else {
      msg.innerHTML = `🏆 Has cumplido con todos los niveles exigidos (${porcentaje.toFixed(1)}%). Gracias por participar.`;
    }
    users[CURRENT_USER_EMAIL] = u;
    saveUsers(users);

    // actualizar nivel en UI
    if (window.__updateNivelUI) window.__updateNivelUI();
  } else {
    msg.innerHTML = `❌ No alcanzaste el ${PERCENT_THRESHOLD}%. Aciertos: ${correct}/${total} (${porcentaje.toFixed(1)}%). Puedes intentarlo de nuevo.`;
  }
  resultArea.appendChild(msg);

  // Guardar intento en historial
  saveAttemptLocal(CURRENT_USER_EMAIL, intentoActual, correct, total, porcentaje);

  // detalle por pregunta (solo marca verde/rojo, sin mostrar respuestas correctas)
  const detList = document.createElement('ul');
  detList.style.marginTop = '10px';
  intentoActual.preguntas.forEach((p, i) => {
    const li = document.createElement('li');
    li.style.marginBottom = '6px';
    li.textContent = `Pregunta ${i+1}`;
    const dot = document.createElement('span');
    dot.style.display = 'inline-block';
    dot.style.width = '12px';
    dot.style.height = '12px';
    dot.style.borderRadius = '50%';
    dot.style.marginLeft = '8px';
    dot.style.verticalAlign = 'middle';
    dot.style.background = details[i].ok ? '#2e7d32' : '#c62828';
    li.appendChild(dot);
    detList.appendChild(li);
  });
  resultArea.appendChild(detList);

  // limpiar intentoActual para que el usuario deba pedir otro test si quiere
  intentoActual = null;
}

/* ---------- Guardado demo de intentos ---------- */
function saveAttemptLocal(email, intento, correct, total, porcentaje) {
  const users = loadUsers();
  users[email] = users[email] || { pass: 'demo', nivel: 1, historial: [] };
  users[email].historial = users[email].historial || [];
  users[email].historial.push({ fecha: intento.fecha, nivel: intento.nivel, correct, total, porcentaje });
  saveUsers(users);
}

/* ---------- Historial ---------- */
function toggleHist(user) {
  const histContainer = document.getElementById('histContainer');
  if (!histContainer) return;
  const users = loadUsers();
  const u = users[CURRENT_USER_EMAIL];
  if (!u || !u.historial || u.historial.length === 0) {
    alert('No hay historial todavía');
    return;
  }
  // mostrar u.historial
  histContainer.innerHTML = '<h3>Historial</h3>';
  const ul = document.createElement('ul');
  u.historial.slice().reverse().forEach(h => {
    const li = document.createElement('li');
    li.style.marginBottom = '6px';
    li.textContent = `${new Date(h.fecha).toLocaleString()} - Nivel ${h.nivel} - Aciertos: ${h.correct}/${h.total} (${h.porcentaje.toFixed(1)}%)`;
    ul.appendChild(li);
  });
  histContainer.appendChild(ul);
  histContainer.style.display = 'block';
  // scroll
  histContainer.scrollIntoView({behavior:'smooth'});
}
