"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#pwd"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert("failed to login");
      }
    })
    .catch((err) => {
      console.error(new Error("Error ocured!"));
    });
}
