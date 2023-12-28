"use strict";
var logInBtn = document.querySelector("#logInBtn");
logInBtn.addEventListener("click", logIn);

var logInEmail = document.querySelector("#logInEmail");
var logInPassword = document.querySelector("#logInPassword");
var savedUsers = [];
var userName;

if (localStorage.getItem("usersList") !== null) {
  savedUsers = JSON.parse(localStorage.getItem("usersList"));
}

function logIn() {
  if (logInValidation() == true) {
    window.location.replace("./welcomePage.html");
  } else {
    document
      .querySelector("#wrongLogIn")
      .classList.replace("d-none", "d-block");
  }
}

function logInValidation() {
  var status;

  for (var i = 0; i < savedUsers.length; i++) {
    if (
      savedUsers[i].email === logInEmail.value &&
      savedUsers[i].password === logInPassword.value
    ) {
      status = true;
      userName = savedUsers[i].name;
      localStorage.setItem("userName", JSON.stringify(userName));
      break;
    } else {
      status = false;
    }
  }

  return status;
}
