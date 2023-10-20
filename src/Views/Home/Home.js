import React from "react";
import style from './Home.module.css'
import Header from '../../components/Header/Header.jsx';

const Home = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                Aqui debe ir el modulo Home
            </div>
        </div>
    )
}

export default Home;