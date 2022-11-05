import React from "react";
// Style
import './Socials.css'
// Images
import SlackIcon from '../../assets/slack.png'
import GithubIcon from '../../assets/github.png'


export default function Socials() {
    return (
        <div className="socials">
            <a href=""><img src={SlackIcon} alt="" /></a>

            <a href=""><img src={GithubIcon} alt="" /></a>
        </div>
    )
}