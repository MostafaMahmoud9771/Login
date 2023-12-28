"use strict";
var signUpBtn = document.querySelector("#signUpBtn");
signUpBtn.addEventListener("click", function () {
  addNewUser();
});

var signUpName = document.querySelector("#signUpName");
var signUpEmail = document.querySelector("#signUpEmail");
var signUpPassword = document.querySelector("#signUpPassword");

var nameRegex = /^[A-Z][a-zA-Z ]{4,19}$/;
var invalidSignUpName = "#invalidSignUpName";
var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var invalidSignUpEmail = "#invalidSignUpEmail";
var passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var invalidSignUpPassword = "#invalidSignUpPassword";

var users = [];

if (localStorage.getItem("usersList") !== null) {
  users = JSON.parse(localStorage.getItem("usersList"));
}

function addNewUser() {
  if (
    Validation(nameRegex, signUpName, invalidSignUpName) == true &&
    Validation(emailRegex, signUpEmail, invalidSignUpEmail) == true &&
    Validation(passwordRegex, signUpPassword, invalidSignUpPassword) == true &&
    emailRepetition() == true
  ) {
    var user = {
      name: signUpName.value,
      email: signUpEmail.value,
      password: signUpPassword.value,
    };
    users.push(user);
    localStorage.setItem("usersList", JSON.stringify(users));
    signUp();
  }
}

function signUp() {
  window.location.replace("./index.html");
}

function Validation(regex, signUpInputField, invalidationStatement) {
  if (regex.test(signUpInputField.value) == true) {
    signUpInputField.classList.remove("is-invalid");
    document.querySelector(invalidationStatement).classList.add("d-none");
    return true;
  } else {
    signUpInputField.classList.add("is-invalid");
    document.querySelector(invalidationStatement).classList.remove("d-none");
  }
}

function emailRepetition() {
  var usersEmails = [];
  for (var i = 0; i < users.length; i++) {
    usersEmails.push(users[i].email);
  }
  if (usersEmails.includes(signUpEmail.value)) {
    document.querySelector("#repeatedSignUpEmail").classList.remove("d-none");
    return false;
  } else {
    document.querySelector("#repeatedSignUpEmail").classList.add("d-none");
    return true;
  }
}

signUpName.addEventListener("input", function () {
  Validation(nameRegex, signUpName, invalidSignUpName);
});

signUpEmail.addEventListener("input", function () {
  Validation(emailRegex, signUpEmail, invalidSignUpEmail);
});
signUpEmail.addEventListener("input", function () {
  emailRepetition();
});

signUpPassword.addEventListener("input", function () {
  Validation(passwordRegex, signUpPassword, invalidSignUpPassword);
});
