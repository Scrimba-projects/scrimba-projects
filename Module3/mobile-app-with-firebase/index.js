import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-a412d-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")


addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value

    push(shoppingListInDB, inputValue)

    clearInputField();
})

onValue(shoppingListInDB, function (snapshot) {
    let itemsArray = Object.entries(snapshot.val())
    console.log(itemsArray)
    clearShoppingList()
    for (let item of itemsArray) {
        addItemToShoppingList(item[1]);
    }
})

function addItemToShoppingList(itemValue) {
    shoppingList.innerHTML += `<li>${itemValue}</li>`;
}

function clearShoppingList() {
    shoppingList.innerHTML = ""
}

function clearInputField() {
    inputFieldEl.value = ""
}