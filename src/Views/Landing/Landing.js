import React, {useState}from 'react'
import style from './Landing.module.css'
import { Link } from "react-router-dom";
import rizzoSvg from '../../Assets/Federico-Rizzo-Logo.svg'
import landingVideo from '../../Assets/rizzo-landing.mp4'

const Landing = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
  
    return (
      <Link to="/Home">
        <div className={style.landingSvg}>
          <img className={style.LandingBg} src={rizzoSvg} alt="landing SVG Federico Rizzo inversiones" />
        </div>
        <div className={`${style.loading} ${videoLoaded ? style.videoLoaded : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" stroke="#03e9f4" />
          </svg>
        </div>
        <video autoPlay loop className={`${style.landingVideo} ${videoLoaded ? style.videoLoaded : ""}`} id="bgVideo" onCanPlay={() => setVideoLoaded(true)}>
          <source src={landingVideo} type="video/mp4" />
        </video>
      </Link>
    );
  };

export default Landing;






