import { Link } from "react-router-dom";

// Styles
import "./ContactButton.css"

export default function ContactButton() {
    return (
        <div className="btn-contact">
            <Link to="contact" id="contact">Contact me</Link>
        </div>
    )
}