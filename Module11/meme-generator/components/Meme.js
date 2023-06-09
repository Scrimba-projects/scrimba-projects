import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }, memesData)

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memes = allMemeImages.data.memes;
        const index = Math.floor(Math.random() * memes.length);
        const url = memes[index].url;

        setMeme(prevMeme => ({
            topText: prevMeme.topText,
            bottomText: prevMeme.bottomText,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="meme">
                <div className="meme-input">
                    <input id="top-text" placeholder="Top text"/>
                    <input id="bottom-text" placeholder="Bottom text"/>
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>

            <img src={meme.randomImage} alt="meme image" className="meme-image"/>
        </main>
    )
}