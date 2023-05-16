function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0)
        .map(() => {
            return Math.floor(Math.random() * 6) + 1
        });
}

function getPlaceholderDiceHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return `<div class="placeholder-dice"></div>`
    }).join('');
}

export { getDiceRollArray, getPlaceholderDiceHtml }
