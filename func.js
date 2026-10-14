// getters
const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const success = document.getElementById("success");

// show error msg
function showError(input, message) {
  document.getElementById(input.id + "-error").textContent = message;
  input.classList.add("invalid");
}

// clear error msg
function clearError(input) {
  document.getElementById(input.id + "-error").textContent = "";
  input.classList.remove("invalid");
}

// submit btn
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // user
  if (username.value.trim() === "") {
    showError(username, "Enter a username.");
    isValid = false;
  } else {
    clearError(username);
  }

  // fullname
  if (fullname.value.trim() === "") {
    showError(fullname, "Enter your full name.");
    isValid = false;
  } else {
    clearError(fullname);
  }

  // email
  if (email.value.trim() === "") {
    showError(email, "Enter your email.");
    isValid = false;
  } else if (!email.value.includes("@") || !email.value.includes(".")) { // @, .
    showError(email, "Enter a valid email address.");
    isValid = false;
  } else {
    clearError(email);
  }

  // pass
  if (password.value === "") {
    showError(password, "Enter a password.");
    isValid = false;
  } else if (password.value.length < 8) {
    showError(password, "Use at least 8 characters.");
    isValid = false;
  } else {
    clearError(password);
  }

  // confirm pass
  if (confirm.value === "") {
    showError(confirm, "Confirm your password.");
    isValid = false;
  } else if (confirm.value !== password.value) {
    showError(confirm, "Passwords do not match.");
    isValid = false;
  } else {
    clearError(confirm);
  }

  // pag goods na maga create na acc
  if (isValid) {
    console.log("Username:", username.value);
    console.log("Full name:", fullname.value);
    console.log("Email:", email.value);

    form.reset();
    success.hidden = false;
  } else {
    success.hidden = true;
  }
});
