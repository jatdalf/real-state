import React from "react";
import style from './Home.module.css'
import Header from '../../components/Header/Header.jsx';
import Carrousel from "../../components/Carrousel/Carrousel";
import celphone from '../../Assets/celphone.png';
import Contacto from '../../Assets/Contacto.png';
import HomeBoceto from '../../Assets/HomeBoceto.png';
import Mapa from '../../Assets/Mapa.png';
import MisionVisonValor from '../../Assets/MisionVisonValor.png';
import oportunidades from '../../Assets/oportunidades.png';

const Home = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                {/* <Carrousel /> */}
               
                    <div className={style.home}>
                        <img src={HomeBoceto} className={style.homeImg} />
                    </div>
                    <div className={style.home}>
                        <img src={MisionVisonValor} className={style.homeImg} />
                    </div>
                    <div className={style.home}>
                        <img src={Contacto} className={style.homeImg} />
                    </div>
                    <div className={style.home}>
                        <img src={oportunidades} className={style.homeImg} />
                    </div>
                    <div className={style.home}>
                        <img src={Mapa} className={style.homeImg} />
                    </div>
              
            </div>
        </div>
    )
}

export default Home;