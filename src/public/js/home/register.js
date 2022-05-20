"use strict";

const id = document.querySelector("#id"),
  userName = document.querySelector("#name"),
  psword = document.querySelector("#pwd"),
  confirmPsword = document.querySelector("#confirm-pwd"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: userName.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("Error ocured for creating an account!"));
    });
}
