import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return (
       <div className="info">
           <img src="images/profile-picture.png" alt="profile picture" className="info-profile-picture"/>
           <h1>Simina Filimon</h1>
           <p>Frontend Developer</p>
           <small>https://www.linkedin.com/in/filimon-simina/</small>
           <div className="info-cta">
               <button className="btnEmail"><FontAwesomeIcon className="f-icon" icon={faEnvelope} />Email</button>
               <button className="btnLinkedin"><FontAwesomeIcon className="f-icon" icon={faLinkedinIn} style={{backgroundColor: "#fff", color: "#5093e2"}}  />Linkedin</button>
           </div>
       </div>
    )
}