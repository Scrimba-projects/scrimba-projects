import {catsData} from './data.js'

const emotionsRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModel = document.getElementById('meme-modal')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

emotionsRadios.addEventListener('change', highlightCheckedOption)
memeModalCloseBtn.addEventListener('click', closeModal)
getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e) {
    let radioClassElements = document.getElementsByClassName('radio')
    for (let radioElement of radioClassElements) {
        radioElement.classList.remove('highlight')
    }
    let selectedElement = document.getElementById(e.target.id)
    selectedElement.parentElement.classList.add('highlight')
}

function closeModal() {
    memeModel.style.display = 'none'
}

function renderCat(matchingCat) {
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML = `
        <img    
            class="cat-img" 
            src="./images/${catObject.image}"
            alt="${catObject.alt}"
            >
    `
    memeModel.style.display = 'flex'
}

function getSingleCatObject() {
    const catsArray = getMatchingCatsArray()
    if (catsArray.length === 1)
        return catsArray[0]
    else {
        let index = Math.floor(Math.random() * catsArray.length)
        return catsArray[index]
    }
}

function getMatchingCatsArray() {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked

        const matchingCatsArray = catsData.filter(function (cat) {

            if (isGif) {
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            } else {
                return cat.emotionTags.includes(selectedEmotion)
            }
        });
        return matchingCatsArray
    }
}

function getEmotionsArray(cats) {
    const emotionsArray = []

    for (let cat of cats) {
        for (let emotionTag of cat.emotionTags) {
            if (!emotionsArray.includes(emotionTag)) {
                emotionsArray.push(emotionTag)
            }
        }
    }

    return emotionsArray;
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    let radioItems = ''

    for (let emotion of emotions) {
        radioItems += `
            <div class="radio">
                <label for=${emotion}>${emotion}</label>
                <input type="radio" 
                        id="${emotion}"
                        value="${emotion}"
                        name="emotions" />
            </div>
            `
    }
    emotionsRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)