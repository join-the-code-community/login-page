const containerValue = document.querySelector("#content");
const logOutButton = document.querySelector("#logOut");

const userInfo = JSON.parse(localStorage.getItem("userResgisterd"));

if (!userInfo.name) {
  window.location.href = "/index.html";
}

const contentValue = `Olá, ${userInfo.name}, seja bem-vindo ao primeiro projeto da Dev Community.
Nosso objetivo neste projeto foi proporcionar uma excelente introdução
aos recursos do Tailwind, além de aprender a resolver conflitos de
branches, pull requests, criar e organizar novas branches e
estabelecer um bom Git-Flow.`;

containerValue.textContent = contentValue;

logOutButton.addEventListener("click", () => {
  window.location.href = "/index.html";
});

