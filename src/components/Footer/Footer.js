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
                <SocialIcon url="https://www.instagram.com/federicorizzo.ok/" />
                <SocialIcon url="https://www.facebook.com/federicorizzo.ok" />
                &nbsp;&nbsp;mail@mail.com&nbsp;&nbsp;
                <PhoneFilled />  351 3 415987
            </p>
        </div>
    );
};

export default Footer;
