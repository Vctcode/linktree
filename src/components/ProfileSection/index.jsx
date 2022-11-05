import React from 'react'
// Style
import './ProfileSection.css'
// Images
import ShareIcon from '../../assets/Avatar-btn.png'
import ShareIconMobile from '../../assets/Avatar-btn-mobile.png'
import Vic1 from '../../assets/vic1.jpg'
import Vic2 from '../../assets/vic2.jpg'
import Camera from '../../assets/camera.svg'

export default function ProfileSection(props) {
    return (
        <div className='profile-section'>
            <div className="share-icon">
                <a href="#">
                    <img className='icon-desktop' src={ShareIcon} alt="" />
                    <img className='icon-mobile' src={ShareIconMobile} alt="" />


                </a>

            </div>

            <div className="profile-img">
                <img id='profile_img' src={Vic2} alt="" />
                <div className='camera-box'>
                    <img className='camera' src={Camera} alt="" />
                    </div>
            </div>



            <h1 id='twitter' className='profile-name'>Vic_Oderinde</h1>

            <h2 id='slack' className='profile-name slack-name'>{props.slackUsername}</h2>

        </div>
    )
}