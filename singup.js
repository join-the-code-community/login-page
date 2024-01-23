const inputName = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const passWordInput = document.querySelector("#passWordInput");
const submitButton = document.querySelector("#submitButton");

let nameValue = "";
let emailValue = "";
let passWordValue = "";

inputName.addEventListener("input", (event) => {
  nameValue = event.target.value;
});

emailInput.addEventListener("input", (event) => {
  emailValue = event.target.value;
});

passWordInput.addEventListener("input", (event) => {
  passWordValue = event.target.value;
});

const handleStorageValue = () => {
  const userInfo = {
    name: nameValue,
    email: emailValue,
    passWordValue: passWordValue,
  };

  localStorage.setItem("userResgisterd", JSON.stringify(userInfo));
  alert("Usúario registrado com sucesso!");

  inputName.value = "";
  emailInput.value = "";
  passWordInput.value = "";
};

submitButton.addEventListener("click", handleStorageValue);

