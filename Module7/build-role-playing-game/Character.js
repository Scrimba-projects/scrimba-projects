import { getDiceRoleArray } from './utils.js'

export function Character(data) {
    Object.assign(this, data)

    this.getDiceHtml = function (diceCount) {
        return getDiceRoleArray(diceCount).map(diceRoll => {
            return `<div class="dice">${diceRoll}</div>`
        }).join('');
    }

    this.getCharacterHtml = function () {
        const {name, avatar, health, diceCount} = this;
        let diceHtml = this.getDiceHtml(diceCount);

        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" alt="avatar"/>
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceHtml}
            </div>
        </div>
        `;
    }
}
