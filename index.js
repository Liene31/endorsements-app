import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://endorsements-app-1c3fd-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsRef = ref(database, "endorsements");

console.log(endorsementsRef);

const inputElField = document.querySelector("#input-el");
const publishBtn = document.querySelector("#publish-btn");
const messageUl = document.querySelector("#message-ul");

publishBtn.addEventListener("click", function () {
  const newLi = document.createElement("li");
  const message = inputElField.value;

  newLi.textContent = message;
  messageUl.append(newLi);
});
