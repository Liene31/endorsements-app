import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://endorsements-app-1c3fd-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsRef = ref(database, "endorsements");

const inputElField = document.querySelector("#input-el");
const publishBtn = document.querySelector("#publish-btn");
const messageUl = document.querySelector("#message-ul");

function appendToList(item) {
  const newLi = document.createElement("li");
  const messageValue = item;

  newLi.textContent = messageValue;
  messageUl.append(newLi);
}

onValue(endorsementsRef, function (snapshot) {
  const messageFromDB = Object.values(snapshot.val());
  messageUl.innerHTML = "";

  for (let i = 0; i < messageFromDB.length; i++) {
    appendToList(messageFromDB[i]);
  }
});

publishBtn.addEventListener("click", function () {
  const message = inputElField.value;

  push(endorsementsRef, message);
  inputElField.value = "";
});
