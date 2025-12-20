/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* HEADER */
.main-header {
  background: #286bcf;
  padding: 15px;
}

.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-header {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.main-menu {
  display: flex;
  list-style: none;
}

.main-menu a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

.login-btn {
  background: orange;
  padding: 6px 14px;
  border-radius: 5px;
}

/* HERO */
.hero {
  height: 100vh;
  background: url("img/neuro.jpg") center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

/* ===== LOGIN MODAL ===== */
.login-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: none;
  align-items: center;
  justify-content: center;
}

.login-box {
  background: white;
  padding: 30px;
  width: 320px;
  border-radius: 12px;
  text-align: center;
  position: relative;
}

.login-box h2 {
  margin-bottom: 15px;
}

.login-box input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.login-box button {
  width: 100%;
  padding: 10px;
  background: #286bcf;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.close-login {
  position: absolute;
  right: 12px;
  top: 10px;
  font-size: 20px;
  cursor: pointer;
}

.login-msg {
  margin-top: 10px;
  font-size: 14px;
  color: red;
}
