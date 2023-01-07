const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const userEmail = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const form = document.querySelector("#odinForm");
const button = document.querySelector("#submit");

form.addEventListener("input", (e) => {
  switch (e.target.id) {
    case "fName":
      checkUsername(fName);
      break;
    case "lName":
      checkUsername(lName);
      break;
    case "email":
      checkUserEmail();
      break;
    case "password":
      checkUserPassword();
      break;
    case "password2":
      confirmPassword();
      break;
  }
});

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  const parent = input.parentElement;
  const span = parent.querySelector(".validation");
  parent.className = "form-div error";
  span.textContent = message;
};

const showSuccess = (input) => {
  const parent = input.parentElement;
  const span = parent.querySelector(".validation");
  parent.className = "form-div";
  span.textContent = "";
};

const checkUsername = (input) => {
  let valid = false;
  let username = input.value.trim();
  const min = 3;
  const max = 25;

  if (!isRequired(username)) {
    showError(input, "This field is required.");
  } else if (!isBetween(username.length, min, max)) {
    showError(input, `Name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(input);
    valid = true;
  }
  return valid;
};

const checkUserEmail = () => {
  let valid = false;
  let useremail = userEmail.value.trim();

  if (!isRequired(useremail)) {
    showError(userEmail, "This field is required");
  } else if (!isEmailValid(useremail)) {
    showError(userEmail, "Wrong format");
  } else {
    showSuccess(userEmail);
    valid = true;
  }
  return valid;
};

const checkUserPassword = () => {
  let valid = false;
  let userpassword = password.value.trim();
  const min = 8;
  const max = 17;

  if (!isRequired(userpassword)) {
    showError(password, "This field is required.");
  } else if (!isBetween(userpassword.length, min, max)) {
    showError(
      password,
      `Password needs to be between ${min} and ${max} characters`
    );
  } else {
    showSuccess(password);
    valid = true;
  }
  return valid;
};

const confirmPassword = () => {
  let valid = false;
  let userpassword = password.value.trim();
  let confirmpassword = password2.value.trim();

  if (userpassword !== confirmpassword) {
    showError(password2, "Passwords must match.");
  } else {
    showSuccess(password2);
    valid = true;
  }
  return valid;
};

button.addEventListener("click", (e) => {
  let uName = checkUsername(fName),
    uLName = checkUsername(lName),
    email = checkUserEmail(),
    pswd = checkUserPassword(),
    pswd2 = confirmPassword();

  if (!uName || !uLName || !email || !pswd || !pswd2) {
    e.preventDefault();
  } else {
  }
});
