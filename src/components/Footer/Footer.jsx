import React from "react";
import style from './Footer.module.css';
import { SocialIcon } from 'react-social-icons/component';
import { PhoneFilled } from '@ant-design/icons';
import 'react-social-icons/facebook';
import 'react-social-icons/instagram';

const Footer = () => {
    return (
        <div className={style.footer}>
            <p className={`${style.footerp} ${style.centeredContent}`}>
                <SocialIcon url="https://www.instagram.com/federicorizzo.ok/" className={style.icon1}/>
                <SocialIcon url="https://www.facebook.com/federicorizzo.ok" className={style.icon2}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                mail@mail.com
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className={style.phoneNumber}><PhoneFilled />  351 3 415987</div>
            </p>
        </div>
    );
};

export default Footer;
