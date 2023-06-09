import React from "react"

export default function Card(props) {
    console.log(props.item)
    let item = props.item;

    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="card-img">
                <img src={`images/${item.coverImg}`} />
            </div>
            <div className="card-rating">
                <img src="images/star.png" alt="star"/>
                <span>{item.stats.rating}</span>
                <div>({item.stats.reviewCount}) • {item.location}</div>
            </div>
            <div className="card-summary">{item.title}</div>
            <div className="card-price"><b>From ${item.price}</b> / person</div>
        </div>
    )
}