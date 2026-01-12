/******************************
 * SISTEMA DE TEST PNL
 ******************************/

// =============================
//       PREGUNTAS POR NIVEL
// =============================
const questionsByLevel = {
  1: [
    {
      q: "Niño está corriendo dentro de la casa.",
      options: [
        "No corras dentro de la casa",
        "Te he dicho que no corras",
        "Camina"
      ],
      correct: 2
    },
    {
      q: "Niña comiendo Espaguetti",
      options: [
        "No te manches el vestido",
        "Acércate el plato",
        "Come con cuidado para que no te manches"
      ],
      correct: 1
    },
    {
      q: "Niña comiendo Espaguetti",
      options: [
        "No te maches el vestido",
        "Acércate el plato",
        "Come con cuidado para que no te manches"
      ],
      correct: 1
    },
    {
      q: "Dejan la cocina sucia.",
      options: [
        "No dejes la cocina así sucia",
        "Al terminar de comer ordena y limpia la mesa.",
        "Nadie limpia nunca aquí."
      ],
      correct: 1
    },
    {
      q: "Un niño dibuja en las paredes.",
      options: [
        "¡No dibujes en las paredes!",
        "Te he dicho mil veces que no pintes ahí.",
        "Por favor, dibuja en el papel o en tu cuaderno."
      ],
      correct: 2
    },
    {
      q: "Alguien usa el celular en una cena familiar.",
      options: [
        "¡No uses el celular en la mesa!",
        "Guarda el celular mientras comemos.",
        "Siempre estás con el teléfono"
      ],
      correct: 1
    },
    {
      q: "Tu pareja deja la ropa tirada en el suelo.",
      options: [
        "Al desvestirte deja la ropa en el almacén de la ropa sucia",
        "Nunca recoges nada.",
        "No tires la ropa al suelo."
      ],
      correct: 0
    },
    {
      q: "Tu pareja deja los platos sin lavar en el fregadero.",
      options: [
        "Nunca lavas nada.",
        "Después de comer lava los platos.",
        "¡No dejes los platos sucios!"
      ],
      correct: 1
    },
    {
      q: "Tu hijo deja los zapatos tirados en la entrada.",
      options: [
        "Por favor, guarda tus zapatos en el zapatero de tu cuarto.",
        "¡No dejes los zapatos ahí!",
        "Siempre dejas todo tirado."
      ],
      correct: 0
    },
    {
      q: "Alguien sube el volumen de la televisión muy alto por la noche.",
      options: [
        "Nunca piensas en los demás.",
        "¡No subas tanto la televisión!",
        "Baja el volumen."
      ],
       correct: 2
    },
    {
      q: "Tu adolescente entra y cierra la puerta de un portazo.",
      options: [
        "Cierra la puerta despacio.",
        "Siempre haces lo mismo.",
        "No azotes la puerta"
      ],
      correct: 0
    },
    {
      q: "Alguien deja las luces encendidas al salir de una habitación.",
      options: [
        "Nadie apaga nada en esta casa.",
        "Por favor, apaga la luz cuando salgas de la habitación.",
        "¡No dejes las luces prendidas!"
      ],
      correct: 1
    },
    {
      q: "Tu hijo pequeño grita dentro de la casa.",
      options: [
        "¡No grites!",
        "Baja la voz, por favor.",
        "Te he dicho que no grites."
      ],
      correct: 1
    },
    {
      q: "Tu pareja usa tu toalla sin pedirla.",
      options: [
        "Luego de ducharte usa tu toalla.",
        "¡No uses mi toalla!",
        "Nunca respetas mis cosas."
      ],
      correct: 0
    },
    {
      q: "Alguien deja la tapa del inodoro levantada.",
      options: [
        "Siempre olvidas bajarla.",
        "¡No dejes la tapa arriba!",
        "Después de usar el inodoro deja la tapa abajo."
      ],
      correct: 2
    },
    {
      q: "Tu hijo come en el sofá y deja migas.",
      options: [
        "Para comer usa la mesa.",
        "Nunca comas en el sofá.",
        "¡No comas en el sofá!"
      ],
      correct: 0
    },
    {
      q: "Alguien entra con zapatos sucios y ensucia el piso.",
      options: [
        "Antes de entrar quítate los zapatos.",
        "Siempre ensucias todo.",
        "¡No entres con zapatos sucios!"
      ],
      correct: 0
    },
    {
      q: "Alguien deja la ropa húmeda en la lavadora mucho tiempo.",
      options: [
        "Por favor, saca tu ropa cuando termine el ciclo.",
        "¡No dejes la ropa húmeda tanto tiempo!",
        "Nadie saca la ropa nunca."
      ],
      correct: 0
    },
      ],

  2: [
    {
      q: "¿Qué sistema representacional usas al imaginar tu futuro?",
      options: [
        "Visual",
        "Auditivo",
        "Kinestésico"
      ],
      correct: 0
    },
    {
      q: "Niña comiendo Espagueti",
      options: [
        "No te manches el vestido",
        "Acércate el plato",
        "Come con cuidado para que no te manches"
      ],
      correct: 1
    }
  ]
};

// =============================
//       VARIABLES GLOBALES
// =============================
let currentLevel = parseInt(localStorage.getItem("pnl_level")) || 1;
let score = 0;
let currentIndex = 0;
let currentQuestions = [];

// =============================
//     INICIAR TEST (PÚBLICO)
// =============================
window.startPNLTest = function () {

  // Validar nivel existente
  if (!questionsByLevel[currentLevel]) {
    alert("Ya completaste todos los niveles disponibles 🎉");
    localStorage.setItem("pnl_level", 1);
    currentLevel = 1;
  }

  score = 0;
  currentIndex = 0;
  currentQuestions = questionsByLevel[currentLevel];

  loadTestUI();
};

// =============================
//       CREAR CONTENEDOR
// =============================
function loadTestUI() {
  document.body.style.overflow = "hidden";

  let container = document.getElementById("testContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "testContainer";
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.background = "rgba(0,0,0,0.7)";
    container.style.zIndex = "99999";
    container.style.padding = "40px 0";
    container.style.overflowY = "auto";

    document.body.appendChild(container);
  }

  loadQuestion();
}

// =============================
//       MOSTRAR PREGUNTA
// =============================
function loadQuestion() {
  const container = document.getElementById("testContainer");
  container.innerHTML = "";

  if (currentIndex >= currentQuestions.length) {
    showResult();
    return;
  }

  const q = currentQuestions[currentIndex];

  container.innerHTML = `
    <div style="
     /* background:#fff;*/
      background: #A2D9CE;
      padding:30px;
      border-radius:15px;
      width:90%;
      max-width:500px;
      margin:auto;
      text-align:center;
    ">
      <h2>Nivel ${currentLevel}</h2>

      <img 
        src="pregunta.svg"
        alt="Ilustración test"
        style="width:100%;max-width:220px;margin:15px auto;display:block;"
      >

      <p style="margin-top:15px;font-size:20px;">
        ${q.q}
      </p>

      ${q.options.map((opt, i) => `
        <button
          onclick="answer(${i})"
          style="
            width:100%;
            padding:12px;
            margin-top:10px;
            border:none;
            border-radius:10px;
            background:#286bcf;
            color:#fff;
            font-size:16px;
            cursor:pointer;
          ">
          ${opt}
        </button>
      `).join("")}
    </div>
  `;

  window.scrollTo(0, 0);
}

// =============================
//       RESPONDER
// =============================
function answer(optionIndex) {
  if (optionIndex === currentQuestions[currentIndex].correct) {
    score++;
  }

  currentIndex++;
  loadQuestion();
}

// =============================
//       RESULTADO
// =============================
function showResult() {
  const container = document.getElementById("testContainer");

  const passScore = Math.ceil(currentQuestions.length * 0.7);
  const passed = score >= passScore;

  container.innerHTML = `
    <div style="
      background:#fff;
      padding:30px;
      border-radius:15px;
      width:90%;
      max-width:500px;
      margin:auto;
      text-align:center;
    ">
      <h2>Resultado Nivel ${currentLevel}</h2>

      <div style="
        width:120px;
        height:120px;
        margin:20px auto;
        border-radius:50%;
        background:${passed ? "green" : "red"};
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:32px;
        color:#fff;
        font-weight:bold;
      ">
        ${score}
      </div>

      ${
        passed
          ? `<button onclick="nextLevel()" style="width:100%;padding:12px;background:#28a745;color:white;border:none;border-radius:10px;font-size:18px;">Continuar</button>`
          : `<button onclick="repeatLevel()" style="width:100%;padding:12px;background:#ff9800;color:white;border:none;border-radius:10px;font-size:18px;">Repetir prueba</button>`
      }

      <button onclick="stopTest()" style="width:100%;padding:12px;margin-top:10px;background:#b71c1c;color:white;border:none;border-radius:10px;font-size:18px;">
        Detener Test
      </button>
    </div>
  `;

  if (passed) {
    localStorage.setItem("pnl_level", currentLevel + 1);
  }
}

// =============================
//       CONTROLES
// =============================
function repeatLevel() {
  score = 0;
  currentIndex = 0;
  loadQuestion();
}

function nextLevel() {
  currentLevel++;

  if (!questionsByLevel[currentLevel]) {
    alert("Has completado todos los niveles 🎉");
    stopTest();
    return;
  }

  localStorage.setItem("pnl_level", currentLevel);
  score = 0;
  currentIndex = 0;
  currentQuestions = questionsByLevel[currentLevel];
  loadQuestion();
}

function stopTest() {
  const container = document.getElementById("testContainer");
  if (container) container.remove();
  document.body.style.overflow = "auto";
}
