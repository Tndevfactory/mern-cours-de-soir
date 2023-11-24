const form = document.querySelector("#form");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  if (password.length < 6) {
    passwordError.innerHTML =
      "longueur de mot de passe doit etre superieur a 6 ";
  }
});
