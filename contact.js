import { contactedUser } from "./search.js";
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Message sent");
});

// const title = document.querySelector("title");
// title.innerText = `${contactedUser.name.first} ${contactedUser.name.last}`;
