const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(
    `${contactedUser_deserialized.name.first} ${contactedUser_deserialized.name.last} a bien reçu votre message !`
  );
});
// WE CHECK IF LOCAL STORAGE IS AVAILABLE IN CONTACT PAGE. LOCAL STORAGE DATA IS GENERATED FROM SEARCH.JS FILE
console.log(localStorage);
console.log(localStorage.getItem("contactedUser")?.toString());

// THE DATA IN LOCAL STORAGE IS A STRING. WE MUST PARSE IT TO MAKE IT AN OBJECT
let contactedUser_deserialized = JSON.parse(
  localStorage.getItem("contactedUser")
);
// WE CHECK IF LOCAL PARSE IS EFFECTIVE
console.log(contactedUser_deserialized);
console.log(contactedUser_deserialized.name.first);

// WE INJECT FIRSTNAME ET LASTNAME FROM THE OBJECT IN THE H2
const h2 = document.querySelector("h2");
h2.innerText = `Contactez ${contactedUser_deserialized.name.first} ${contactedUser_deserialized.name.last}`;


const contactImage = document.querySelector("img");
console.log(contactImage);
contactImage.src = `${contactedUser_deserialized.picture.large}`;