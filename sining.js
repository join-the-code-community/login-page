const submitButtonLogin = document.querySelector("#submitButtonValue");
const emailInput = document.querySelector("#emailValue");
const passwordInput = document.querySelector("#passwordValue");

const userInfo = JSON.parse(localStorage.getItem("userResgisterd"));

submitButtonLogin.addEventListener("click", () => {
  const { email, passWordValue } = userInfo;

  if (emailInput.value.length > 1 && passwordInput.value.length > 1) {
    if (emailInput.value === email) {
      if (passwordInput.value === passWordValue) {
        window.location.href = "http://127.0.0.1:5500/Creditos.html";

        return;
      }
    } else {
      alert("senha errada");
    }
  } else {
    alert("Digite algo");
  }
});

