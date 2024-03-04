import React from "react"

export default function Card({title = "", children}) {

    return (
        <div className="card">
            <div className="card-icon">
                <img className="card-image" src="../../images/cloud-icon.png" alt="cloud icon"/>
            </div>
            <p className="card-title">{title}</p>
            <div className="card-content">{children}</div>
        </div>
    )
}