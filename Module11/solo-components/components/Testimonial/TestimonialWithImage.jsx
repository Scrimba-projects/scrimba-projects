import React from "react"
import TestimonialFooter from "./TestimonialFooter";

export default function TestimonialWithImage({image="", name="", role="", children}) {
    
    return (
        <div className="testimonial">
            <img className="testimonial-image" src="../../images/testimonial.png" alt="testimonial" />
            <div className="testimonial-text">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 6.108 41.136 11.436 41.136C16.476 41.136 20.22 37.104 20.22 32.352C20.22 27.6 16.908 24.144 12.588 24.144C11.724 24.144 10.572 24.288 10.284 24.432C11.004 19.536 15.612 13.776 20.22 10.896L14.028 6ZM38.796 6C31.596 11.184 26.412 19.68 26.412 29.04C26.412 36.672 31.02 41.136 36.348 41.136C41.244 41.136 45.132 37.104 45.132 32.352C45.132 27.6 41.676 24.144 37.356 24.144C36.492 24.144 35.484 24.288 35.196 24.432C35.916 19.536 40.38 13.776 44.988 10.896L38.796 6Z"
                        fill="white" fillOpacity="0.25"/>
                </svg>
                {children}
                <TestimonialFooter name={name} role={role}></TestimonialFooter>
            </div>
        </div>
    )
}