const submitButtonLogin = document.querySelector("#submitButtonValue");
const emailInput = document.querySelector("#emailValue").value;
const passwordInput = document.querySelector("#passwordValue").value;

const userInfo = JSON.parse(localStorage.getItem("userResgisterd"));

submitButtonLogin.addEventListener("click", () => {
  const { email, passWordValue } = userInfo;
  const verifyHasValue = emailInput.length > 1 && passwordInput.length > 1;
  const verifyIfIsCorrect =
    emailInput.value === email && passwordInput.value === passWordValue;

  if (verifyHasValue) {
    verifyIfIsCorrect
      ? (window.location.href = "http://127.0.0.1:5500/Creditos.html")
      : alert("Senha ou email inválidos");
  }
  return alert("Digite algo");
});
