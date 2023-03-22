let contactedUser = {};

// FETCH JSON DATA

async function enAttente() {
  const reponseJSON = await fetch("users.json");
  const data = await reponseJSON.json();
  console.log(data);

  const usersLS = localStorage.setItem("contactedUser", JSON.stringify(data));
  console.log(data);

  // SELECT CONTAINER TO INJECT DATA
  const userList = document.querySelector(".user-card-list");

  // FUNCTION THAT CREATE CARD TEMPLATE FOR EACH USER
  function injectData() {
    for (let i = 0; i < data.users.length; i++) {
      userList.innerHTML += `
      <div class="user-card-container">
        <div class="user-card-image-crop">
          <img src="${data.users[i].picture.large}" alt="Profile picture">
        </div>
      <div class="user-card-info">
      <p class="user-card-name">
      ${data.users[i].name.first} ${data.users[i].name.last}
      </p>
      <p class="user-card-job">${data.users[i].job}</p>
      <p class="user-card-details">
      <span class="user-card-details-city">${data.users[i].location.city} - </span><span class="user-card-details-country">${data.users[i].nat}</span>
      <p class="user-card-details-description">${data.users[i].description}</p>
      </div>
      <a class="user-card-cta-link" href="contact.html"><div class="user-card-cta"><span class="material-symbols-rounded">
      send
      </span></a></div>
      </div>`;
    }
    // GET USER ID FOR CONTACT FORM
    console.log(data.users.lenght);

    // LISTEN TO CLICK
    const cta = document.querySelectorAll(
      ".user-card-container .material-symbols-rounded"
    );
    console.log(cta.length);
    for (let i = 0; i < cta.length; i++) {
      cta[i].addEventListener("click", () => {
        // MAKE SURE LOCAL STORAGE DATA IS EMPTY FOR CONTACTEDUSER
        localStorage.removeItem("contactedUser");
        console.log(data.users[i]);
        // MAKE ASSIGN THE VALUE OF THE CONST CONTACTED USER
        contactedUser = data.users[i];
        console.log(contactedUser);
        // WE MAKE THIS CONST A STRING
        let contactedUser_serialized = JSON.stringify(contactedUser);
        console.log(contactedUser_serialized);
        // WE SET THE DATA IN LOCAL STORAGE
        localStorage.setItem("contactedUser", contactedUser_serialized);
        console.log(localStorage);
      });
    }
  }

  injectData();
}

enAttente();

// FILTER FEATURE

// GET SEARCH BAR
let filterInput = document.querySelector(".search-bar");
console.log("BARRE DE RECHERCHE");
console.log(filterInput);
//  LISTEN WHEN WE TYPE IN INPUT
filterInput.addEventListener("keyup", filterUsers);
// GET THE VALUE WE TYPE
function filterUsers() {
  let filterValue = filterInput.value.toUpperCase();
  console.log("VALEUR INPUT");
  console.log(filterValue);
  // GET ALL THE CARDS
  let userCards = document.querySelectorAll(".user-card-container");
  console.log("USERS CARDS");
  console.log(userCards);
  console.log("USERCARD LENGTH");
  console.log(userCards.length);
  // GET ALL THE USERNAMES
  let userName = document.querySelectorAll(".user-card-name");
  console.log("USERNAME");
  console.log(userName[0].innerHTML);
  for (let i = 0; i < userCards.length; i++) {
    console.log("USERNAME de I");
    console.log(userName[i].innerHTML);

    // FOR EACH CARD, CHECK IF THE USER NAME INCLUDE THE VALUE TYPED
    if (userName[i].innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      // IF THE VALUE MATCH, WE DO NOTHING
      userCards[i].style.display = "";
      // IF THE VALUE DOES NOT MATCH, WE HIDE THE CARD
    } else {
      userCards[i].style.display = "none";
    }
  }
}
