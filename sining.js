const submitButtonLogin = document.querySelector("#submitButtonValue");
const emailInput = document.querySelector("#emailValue");
const passwordInput = document.querySelector("#passwordValue");

const userInfo = JSON.parse(localStorage.getItem("userResgisterd"));

submitButtonLogin.addEventListener("click", () => {
  const { email, passWordValue } = userInfo;
  const verifyHasValue =
    emailInput.value.length > 1 && passwordInput.value.length > 1;
  const verifyIfIsCorrect =
    emailInput.value === email && passwordInput.value === passWordValue;

  console.log(verifyHasValue);
  if (verifyHasValue) {
    return verifyIfIsCorrect
      ? (window.location.href = "/Creditos.html")
      : alert("Senha ou email inválidos");
  }
  return alert("Digite algo");
});

