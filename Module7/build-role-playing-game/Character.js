import {getDiceRollArray, getPlaceholderDiceHtml} from './utils.js'

export function Character(data) {
    Object.assign(this, data)
    this.diceArray = getPlaceholderDiceHtml(this.diceCount);

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.takeDamage = function (attackScoreArray) {
        console.log(`${this.name} is damaged`);
        console.log(attackScoreArray);
    }

    this.getCharacterHtml = function () {
        const {name, avatar, health, diceCount, diceArray} = this;

        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" alt="avatar"/>
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceArray}
            </div>
        </div>
        `;
    }

}
