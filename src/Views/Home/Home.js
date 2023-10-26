import React from "react";
import style from './Home.module.css'
import Header from '../../components/Header/Header.jsx';
import Carrousel from "../../components/Carrousel/Carrousel";

const Home = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                <Carrousel />
            </div>
        </div>
    )
}

export default Home;