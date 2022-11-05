import React from "react";
// Style
import "./ContactForm.css"


export default function ContactForm() {
    const [formData, setFormData] = React.useState(
        {
            first_name: "",
            last_name: "",
            email: "",
            provide_data: false,
            message: "",
        }
    )

    let name = "Victor";

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(formData)
        alert("Your message is sent successfully")

    }
    return (
        <div className="contact-form">

            <form onSubmit={handleSubmit}>
                <div className="title">
                    <h2> Contact Me</h2>
                    <p>Hi there, contact me to ask me about anything you have  in mind.</p>
                </div>

                <div className="full-name">
                    <label>
                        First name
                        <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            placeholder="Enter your first name"
                            onChange={handleChange}
                            value={formData.firstName}
                            required
                        />
                    </label>

                    <label>
                        Last name
                        <input
                            id="last_name"
                            name="last_name"
                            type="text"
                            placeholder="Enter your last name"
                            onChange={handleChange}
                            value={formData.lastName}
                            required
                        />
                    </label>
                </div>

                <label>
                    Email
                    <input
                        id="email"
                        type="email"
                        placeholder="yourname@email.com"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        required
                    />
                </label>

                <label>
                    Message
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        onChange={handleChange}
                        required
                    />
                </label>


                <label htmlFor="provide_data" className="checkbox" >
                    <input
                        name="provide_data"
                        id="provide_data"
                        type="checkbox"
                        checked={formData.provideData}
                        onChange={handleChange}
                    /> You agree to providing your data to {name} who may contact you.
                </label>

                <button
                    id="btn__submit"
                    type="submit"
                >Send Message</button>
            </form>
        </div>
    )
}
