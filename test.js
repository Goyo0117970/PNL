
/******************************
 * SISTEMA DE TEST PNL
 ******************************/

// =============================
//       PREGUNTAS POR NIVEL
// =============================
const questionsByLevel = {
  1: [
    {
      q: "Cuando aplicas patrones de la Programación Neurolingüística, ¿qué sentido predomina?",
      options: [
        "Visualización",
        "Auditivo",
        "Kinestésico"
      ],
      correct: 0
    },
    {
      q: "Cuando recuerdas un momento feliz, ¿qué aparece primero?",
      options: [
        "Una imagen",
        "Un sonido",
        "Una sensación"
      ],
      correct: 0
    },
    {
      q: "Cuando alguien te explica algo, ¿qué te ayuda más?",
      options: [
        "Ver un esquema",
        "Escuchar la explicación",
        "Practicarlo"
      ],
      correct: 1
    }
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
  score = 0;
  currentIndex = 0;

  currentQuestions = questionsByLevel[currentLevel];

  if (!currentQuestions) {
    alert("No hay más niveles disponibles");
    return;
  }

  loadTestUI();
};

// =============================
//       CREAR CONTENEDOR
// =============================
function loadTestUI() {
  document.body.style.overflow = "auto";

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
      background:#fff;
      padding:30px;
      border-radius:15px;
      width:90%;
      max-width:500px;
      margin:auto;
      text-align:center;
    ">
      <h2>Nivel ${currentLevel}</h2>
      <p style="margin:20px 0;font-size:18px;">${q.q}</p>

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


/******************************
 * SISTEMA DE TEST PNL - VERSION MEJORADA
 ******************************/
/*
// Preguntas ofuscadas
const encodedQuestions = [
  atob("W3E9IlF1aWFuZG8gYXBsaWNhcyBnZW5lcmFsIGxvcyBwYXRyb25lcyBkZSBsYSBOTCIsIG9wdGlvbnM6WyJBcGxpY2FuIGxhIHZpc2l1YWxpemFjaW9uIiwiQXBsaWNhbiBsYSBhY3VzdGljYSIsIkFwbGljYW4gZWwgYXVkaXRpdm8iXSwgY29ycmVjdDoxXSw="),
  atob("W3E9IkN1YW5kbyBlc3RhcyBiYWpvIGVuIHRyZXMgZW5yZXNzIGRlIGVzdHJlc3MiLCBvcHRpb25zOlsiVmlzdWFsIiwiQXVkaXRpdm8iLCBLbGluZXN0ZXNpY28iXSwgY29ycmVjdDowXSw="),
  atob("W3E9IlF1ZSBlbGVtZW50byBkZSBsYSBOQyBoYWNlIHF1ZSB0ZSBtb3RpdmVzPyIsIG9wdGlvbnM6WyJBbG8iLCJVbiByZWN1ZXJkbyAiLCJVbiBzb25pZG8gZmxhbW1hbnRlIl0sIGNvcnJlY3Q6Ml1d")
].map(item => JSON.parse(item)); 

let currentLevel = 1;
let score = 0;
let currentQuestions = JSON.parse(JSON.stringify(encodedQuestions));
let currentIndex = 0;

function loadTestUI() {
    document.body.style.overflow = "auto";

    const container = document.createElement("div");
    container.id = "testContainer";
    container.style.position = "fixed"; // ✅ CLAVE
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.minHeight = "100vh";
    container.style.background = "rgba(0,0,0,0.7)";
    container.style.backdropFilter = "blur(3px)";
    container.style.padding = "40px 0";
    container.style.zIndex = "99999";

    document.body.appendChild(container);

    loadQuestion();
}


// =============================
//       MOSTRAR PREGUNTA
// =============================
function loadQuestion() {
    const container = document.getElementById("testContainer");
    container.innerHTML = "";

    if (currentIndex >= currentQuestions.length) {
        showLevelResult();
        return;
    }

    const q = currentQuestions[currentIndex];

    container.innerHTML = `
        <div style="background:white; padding:30px; border-radius:15px; width:90%; max-width:500px; margin:auto; text-align:center;">
            <h2>Nivel ${currentLevel}</h2>
            <p style="margin-top:20px; font-size:20px;">${q.q}</p>

            ${q.options.map((o,i)=>`
                <button style="
                    width:100%;
                    padding:12px;
                    margin-top:10px;
                    border:none;
                    background:#4a74f5;
                    color:white;
                    font-size:16px;
                    border-radius:10px;
                    cursor:pointer;
                " onclick="answer(${i})">${o}</button>
            `).join("")}
        </div>
    `;
    
    window.scrollTo(0, 0); // evitar quedar atrapado abajo
}

// =============================
//       EVALUAR RESPUESTA
// =============================
function answer(optionIndex) {
    const q = currentQuestions[currentIndex];
    if (optionIndex === q.correct) score++;

    currentIndex++;
    loadQuestion();
}

// =============================
//      MOSTRAR RESULTADO
// =============================
function showLevelResult() {
    const container = document.getElementById("testContainer");

    const passed = score >= Math.ceil(currentQuestions.length * 0.85);

    container.innerHTML = `
        <div style="background:white; padding:30px; border-radius:15px; width:90%; max-width:500px; margin:auto; text-align:center;">
            <h2>Resultado del Nivel ${currentLevel}</h2>

            <div style="
                width:130px;
                height:130px;
                border-radius:50%;
                background:${passed ? "green" : "red"};
                margin:25px auto;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:35px;
                color:white;
                font-weight:bold;
            ">
                ${score}
            </div>

            ${
                passed
                ? `<button onclick="continueTest()" style="
                        background:#28a745;
                        padding:12px;
                        color:white;
                        width:100%;
                        border:none;
                        border-radius:10px;
                        font-size:18px;
                        margin-top:10px;
                    ">Continuar</button>`
                : `<button onclick="repeatTest()" style="
                        background:#ff9800;
                        padding:12px;
                        color:white;
                        width:100%;
                        border:none;
                        border-radius:10px;
                        font-size:18px;
                        margin-top:10px;
                    ">Repetir prueba</button>`
            }

            <button onclick="stopTest()" style="
                background:#b71c1c;
                padding:12px;
                color:white;
                width:100%;
                border:none;
                border-radius:10px;
                font-size:18px;
                margin-top:10px;
            ">Detener Test</button>
        </div>
    `;

    localStorage.setItem("pnl_level", currentLevel);
}

// =============================
//     REPETIR MISMO NIVEL
// =============================
function repeatTest() {
    score = 0;
    currentIndex = 0;
    loadQuestion();
}

// =============================
//   CONTINUAR SIGUIENTE NIVEL
// =============================
function continueTest() {
    score = 0;
    currentIndex = 0;
    currentLevel++;
    
    // aquí agregarás tus preguntas reales por nivel
    // por ahora repite las mismas
    loadQuestion();
}

// =============================
//        DETENER TEST
// =============================
function stopTest() {
    document.getElementById("testContainer").remove();
    document.body.style.overflow = "auto";
}

// =============================
//     FUNCIÓN PÚBLICA PARA USAR DESDE LOGIN
// =============================
window.startPNLTest = function () {
    loadTestUI();
};
*/