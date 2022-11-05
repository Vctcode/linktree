import React from "react"
import { Link } from "react-router-dom"
// Style
import './Links.css'

export default function Links(props) {

    return (
        <div className="links">
                <a className="link-text" id={props.id} href={props.link}>{props.text}</a>
                {props.subtext !== "" ? <div className="subtext">{props.subtext}</div> : <div className="no-subtext"></div>}

        </div>
    )
}