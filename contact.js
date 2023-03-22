import { contactedUser } from "./search.js";

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Message sent");
});

console.log(contactedUser);
const title = document.querySelector("h2");
console.log(title);
title.innerText = `${contactedUser.name.first} ${contactedUser.name.last}`;
