import React from "react"

export default function TestimonialFooter({name="", role=""}) {
    return (
        <div className="testimonial-footer">
            <p className="testimonial-footer-name">{name}</p>
            <p className="testimonial-footer-role">{role}</p>
        </div>
    )
}