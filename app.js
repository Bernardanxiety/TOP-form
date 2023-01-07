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

const isEmpty = (value) => (value === "" ? true : false);

const checkPassword = () => {
  let userpassword = password.value.trim();

  if (isEmpty(userpassword)) {
    showError(password, "Cannot be blank");
    return false;
  } else {
    showSuccess(password);
    return true;
  }
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
  let pwd1 = checkPassword();
  let pwd2 = doPasswordsMatch();

  if (!pwd1 || !doPasswordsMatch()) {
    e.preventDefault();
  }
});
