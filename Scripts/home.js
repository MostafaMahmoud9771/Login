"use strict";
var logOutBtn = document.querySelector("#logOutBtn");
logOutBtn.addEventListener("click", logOut);

function logOut() {
  window.location.replace("./index.html");
}

document.querySelector("#userName").innerHTML = JSON.parse(
  localStorage.getItem("userName")
);
