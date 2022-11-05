import React from 'react'
// Style
import './Footer.css'
// Images
import I4GImage from '../../assets/I4G.png'
import ZuriLogo from '../../assets/Zuri.Internship_Logo.png'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-hug'>
                <img src={ZuriLogo} alt="zuri-logo" />

                <h3>HNG Internship 9 Frontend Task</h3>

                <img src={I4GImage} alt="" />
            </div>
        </div>
    )
}