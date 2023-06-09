import React from "react"

export default function Meme() {
    return (
        <form className="meme">
            <div className="meme-input">
                <input id="top-text"/>
                <input id="bottom-text"/>
            </div>
            <button>Get a new meme image  🖼</button>
        </form>
    )
}