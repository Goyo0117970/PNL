document.addEventListener("DOMContentLoaded", () => {

  console.log("login.js cargado correctamente");

  // ===== ELEMENTOS =====
  const btnLogin = document.getElementById("btnLogin");
  const overlay = document.getElementById("loginModal");
  const closeBtn = document.getElementById("closeLogin");

  const loginSubmit = document.getElementById("loginSubmit");
  const loginMsg = document.getElementById("loginMsg");

  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");

  // ===== ABRIR LOGIN =====
  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.remove("hide");
    document.body.style.overflow = "hidden";
    emailInput.focus();
  });

  // ===== CERRAR LOGIN =====
  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hide");
    document.body.style.overflow = "auto";
    loginMsg.textContent = "";
  });

  // ===== VALIDAR EMAIL =====
  function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ===== LOGIN / REGISTRO =====
  loginSubmit.addEventListener("click", () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    loginMsg.textContent = "";
    loginMsg.style.color = "red";

    if (!email || !password) {
      loginMsg.textContent = "Todos los campos son obligatorios";
      return;
    }

    if (!emailValido(email)) {
      loginMsg.textContent = "Correo incompleto";
      return;
    }

    let users = JSON.parse(localStorage.getItem("pnl_users"));

    if (!Array.isArray(users)) {
      users = [];
    }

    // 🔎 Buscar usuario
    const index = users.findIndex(u => u.email === email);

    // 🆕 REGISTRO AUTOMÁTICO
    if (index === -1) {
      /*const newUser = { email, password };*/
      const newUser = { email, password, level: 1 };
      users.push(newUser);
      localStorage.setItem("pnl_users", JSON.stringify(users));

      localStorage.setItem("pnl_logged", JSON.stringify(newUser));
      

      loginMsg.textContent = "Usuario registrado satisfactoriamente";
      loginMsg.style.color = "green";

      localStorage.setItem("pnl_level", 1);

      iniciarTest();
      return;
    }

    // 🔐 VALIDAR PASSWORD
    if (users[index].password !== password) {
      loginMsg.textContent = "Contraseña incorrecta";
      return;
    }

    // ✅ LOGIN CORRECTO
    localStorage.setItem("pnl_logged", JSON.stringify(users[index]));
    localStorage.setItem("pnl_level", users[index].level || 1);

    
    loginMsg.textContent = "Ingreso correcto";
    loginMsg.style.color = "green";

    iniciarTest();
  });
  

  // ===== INICIAR TEST =====
  function iniciarTest() {
    setTimeout(() => {
      overlay.classList.add("hide");
      document.body.style.overflow = "auto";
      loginMsg.textContent = "";

     /* if (window.startPNLTest) {
        window.startPNLTest();
      } else {
        console.error("startPNLTest no existe");
      } */
      if (window.startPNLTest) {
      console.log("✅ startPNLTest EXISTE, ejecutando test");
      window.startPNLTest();
      } else {
      console.log("❌ startPNLTest NO existe");
      }


    }, 800);
  }

});
