import React, {useState, useEffect}from 'react'
import style from './Landing.module.css'
import { Link } from "react-router-dom";
import rizzoSvg from '../../Assets/Federico-Rizzo-Logo.svg'
import landingVideo from '../../Assets/rizzo-landing.mp4'
import DotLoader from "react-spinners/DotLoader";

const Landing = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
  
    return (
      <Link to="/Home">
        <div className={style.landingSvg}>
          <img className={style.LandingBg} src={rizzoSvg} alt="landing SVG Federico Rizzo inversiones" />
        </div>
        <div className={style.loading}>
            <DotLoader color="#e5007f" size={100}  />      
        </div>

        
        <video autoPlay loop className={`${style.landingVideo} ${videoLoaded ? style.videoLoaded : ""}`} id="bgVideo" onCanPlay={() => setVideoLoaded(true)}>
          <source src={landingVideo} type="video/mp4" />
        </video>
      </Link>
    );
  };

export default Landing;






