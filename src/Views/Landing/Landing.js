import React from 'react'
import style from './Landing.module.css'
import { Link } from "react-router-dom";
import rizzoSvg from '../../Assets/Federico-Rizzo-Logo.svg'
import landingVideo from '../../Assets/rizzo-landing.mp4'

const Landing = () => {
    return (
        <Link to="/Home">
            <div className={style.landingSvg}>
                <img className={style.LandingBg} src={rizzoSvg} alt="landing SVG Federico Rizzo inversiones" />
            </div>
            <video autoPlay loop className={style.landingVideo} id="background-video">
                <source src={landingVideo} type="video/mp4" />
            </video>
        </Link>
    )
}

export default Landing;






