import dogs from './data.js';

const mainElement = document.getElementById('main');
const btnDislike = document.getElementById('btn-dislike');
const btnLike = document.getElementById('btn-like');

mainElement.addEventListener("touchstart", startTouch, false);
mainElement.addEventListener("touchmove", moveTouch, false);

let initialX = null;
let initialY = null;
let currentIndex = 0;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}
function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;

    let diffX = initialX - currentX;
    let diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            updateIndex(-1);
        } else {
            // swiped right
            updateIndex(1);
        }
    } else {
        // sliding vertically
        if (diffY > 0) {
            // swiped up
            console.log("swiped up");
        } else {
            // swiped down
            console.log("swiped down");
        }
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
}

function updateIndex(incDec) {
    currentIndex += incDec;
    if (currentIndex < 0) {
        currentIndex = dogs.length - 1;
    } else if (currentIndex > dogs.length - 1) {
        currentIndex = 0;
    }
    displayDog(dogs[currentIndex]);
}

function displayDog(dog) {
    mainElement.style.backgroundImage = `url('${dog.avatar}')`;
    mainElement.innerHTML = `   
    <div class="main-top">
<!--        <div id="txt-like" className="green">LIKE</div>-->
<!--        <div id="txt-dislike" className="red">NOPE</div>-->
    </div>
    <div class="main-bottom">
        <h1>${dog.name}, ${dog.age}</h1>
        <p>${dog.bio}</p>
    </div>
    `;
}

displayDog(dogs[currentIndex]);