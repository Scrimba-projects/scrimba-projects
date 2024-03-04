import React, {useContext} from "react"
import {StyleContext} from "./Banner";

export default function BannerTitle({children}) {
    const style = useContext(StyleContext);
    return (
        <div className="banner-title">
            <img className="banner-icon" src={`../../images/${style}.png`} alt="icon"/>
            <div className={`bold banner-title-${style}`}>{children}</div>
        </div>
    )
}