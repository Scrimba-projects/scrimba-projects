import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-a412d-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")

inputFieldEl.addEventListener("keydown", function (key) {
   if (key["code"] === "Enter") {
       addItemInDB();
   }
})

addButtonEl.addEventListener("click", function () {
    addItemInDB();
})



onValue(shoppingListInDB, function (snapshot) {
    clearShoppingList()
    if (!snapshot.exists()) {
        shoppingList.innerHTML = 'No items here .. yet!'
        return;
    }

    let itemsArray = Object.entries(snapshot.val())
    itemsArray.sort( (a, b) => a[1].order - b[1].order)

  // itemsArray.forEach((e) => {
  //     console.log(`${e[1].order} ${e[1].value}`);
  // })

    for (let item of itemsArray) {
        addItemToShoppingList(item);
    }
})

function addItemInDB() {
    if (inputFieldEl.value === "") return;

    let itemsCount = document.getElementsByTagName("li");

    let inputValue = {
        "value": inputFieldEl.value,
        "order": itemsCount.length + 1
    }
    if (inputValue) {
        push(shoppingListInDB, inputValue)
        clearInputField();
    }
}

function addItemToShoppingList(item) {
    let newEl = document.createElement("li");
    let itemId = item[0];
    let itemValue = item[1];
    newEl.id = itemId;
    newEl.textContent = itemValue["value"];

    newEl.addEventListener("click", () => {
       let exactLocationFromDB = ref(database, `shoppingList/${itemId}`);
       remove(exactLocationFromDB);
    });

    shoppingList.append(newEl);
}

function clearShoppingList() {
    shoppingList.innerHTML = ""
}

function clearInputField() {
    inputFieldEl.value = ""
}