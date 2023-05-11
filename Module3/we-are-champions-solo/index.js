import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-a412d-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const wearechampionsInDB = ref(database, "wearechampions")

const endorsementTextEl = document.getElementById("endorsement-text")
const endorsementFromEl = document.getElementById("endorsement-from")
const endorsementToEl = document.getElementById("endorsement-to")
const endorsementsList = document.getElementById("endorsements-list")
const publishBtn = document.getElementById('publishBtn')

publishBtn.addEventListener("click", function () {
    let text = endorsementTextEl.value
    let from = endorsementFromEl.value
    let to = endorsementToEl.value;

    if (text && from && to) {
        push(wearechampionsInDB,
            {"endorsement-text": text, "endorsement-from": from, "endorsement-to": to})
        clearInputField();
    }
})

onValue(wearechampionsInDB, (snapshot) => {
    clearEndorsementList()
    if (!snapshot.exists()) {
        endorsementsList.innerHTML = 'No items here yet!'
    } else {
        let endorsementsArray = Object.entries(snapshot.val()).reverse()
        for (let endorsement of endorsementsArray) {
            addEndorsementToList(endorsement)
        }
    }
})

function clearEndorsementList() {
    endorsementsList.innerHTML = "";
}

function addEndorsementToList(endorsement) {
    let endorsementObj = endorsement[1];

    let endorsementFrom = endorsementObj["endorsement-from"];
    let endorsementText = endorsementObj["endorsement-text"];
    let endorsementTo = endorsementObj["endorsement-to"];

    endorsementsList.innerHTML += `
            <li>
                <div class="post-to-from">
                    To ${endorsementTo}
                </div>
                <div class="post-body">
                    ${endorsementText}
                </div>
                <div class="post-summary">
                    <div class="post-to-from">From ${endorsementFrom}</div>
                    <div class="post-to-from">
                         <span class="tweet-detail">
                             <i class="fa-solid fa-heart liked"></i>
                             4
                         </span>
                    </div>
                </div>
            </li>
    `
}


// function addItemToShoppingList(item) {
//     let newEl = document.createElement("li");
//     let itemId = item[0];
//     let itemValue = item[1];
//     newEl.id = itemId;
//     newEl.textContent = itemValue;
//
//     newEl.addEventListener("click", () => {
//         let exactLocationFromDB = ref(database, `shoppingList/${itemId}`);
//         remove(exactLocationFromDB);
//     });
//
//     shoppingList.append(newEl);
// }
//
function clearInputField() {
    endorsementTextEl.value = ""
    endorsementToEl.value = ""
    endorsementFromEl.value = ""
}