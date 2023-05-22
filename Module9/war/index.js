let deckId
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById('remaining');

const computerScoreText = document.getElementById('computer-score');
myScoreText = document.getElementById('my-score');
let computerScore = 0, myScore = 0;

async function handleNewDeckClick() {
    const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/");
    const data = await res.json();
    remainingText.textContent = `Remaining cards: ${data.remaining}`;
    deckId = data.deck_id;
}

newDeckBtn.addEventListener("click", handleNewDeckClick)

async function handleDrawClick() {
    const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`);
    const data = await res.json();

    remainingText.textContent = `Remaining cards: ${data.remaining}`;
    cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" alt="first card"/>
            `;
    cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" alt="second card"/>
            `;
    header.textContent = determineCardWinner(data.cards[0], data.cards[1]);

    if (data.remaining === 0) {
        drawCardBtn.disabled = true;
        if (computerScore > myScore) {
            header.textContent = "The computer won the game!"
        } else if (myScore > computerScore) {
            header.textContent = "You won the game!"
        } else {
            header.textContent = "It's a tie game!"
        }
    }
}

drawCardBtn.addEventListener("click", handleDrawClick)

function determineCardWinner(card1, card2) {
    const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9",
        "10", "JACK", "QUEEN", "KING", "ACE"];
    const card1ValueIndex = cardValues.indexOf(card1.value);
    const card2ValueIndex = cardValues.indexOf(card2.value);

    if (card1ValueIndex > card2ValueIndex) {
        computerScore++;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        return "Computer wins!";
    } else if (card1ValueIndex < card2ValueIndex) {
        myScore++;
        myScoreText.textContent = `My score: ${myScore}`;
        return "You win!";
    } else {
        return "War!";
    }
}