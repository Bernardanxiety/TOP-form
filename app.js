const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const form = document.querySelector("#odinForm");
const button = document.querySelector("#submit");

const showError = (input, message) => {
  const parent = input.parentElement;
  const span = parent.querySelector(".validation");

  parent.classList.add("error");
  span.textContent = message;
};

const showSuccess = (input, message) => {
  const parent = input.parentElement;
  const span = parent.querySelector(".validation");

  parent.classList.remove("error");
  span.textContent = "";
};

const doPasswordsMatch = () => {
  let pswd1 = password.value.trim();
  let pswd2 = password2.value.trim();

  if (pswd1 === pswd2) {
    showSuccess(password2);
    return true;
  } else {
    showError(password2, "Passwords do not match.");
    return false;
  }
};

button.addEventListener("click", (e) => {
  if (!doPasswordsMatch()) {
    e.preventDefault();
  }
});
