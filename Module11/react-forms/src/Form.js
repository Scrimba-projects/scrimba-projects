// import React from "react";
// import "./style.css";

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: ""
    })


    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form>
            <input name="firstName"
                   type="text"
                   placeholder="First Name"
                   onChange={handleChange}
            />
            <input name="lastName"
                   type="text"
                   placeholder="Last Name"
                   onChange={handleChange}
            />
        </form>
    )
}
