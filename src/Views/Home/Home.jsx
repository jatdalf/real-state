import React from "react";
import style from './Home.module.css'
import Header from '../../components/Header/Header.jsx';
import Carrousel from "../../components/Carrousel/Carrousel";
import celphone from '../../Assets/celphone.png';
import HomeBoceto from '../../Assets/HomeBoceto.png';
import Mapa from '../../Assets/Mapa.png';
import MisionVisionValor from "../../components/MisionVisionValor/MisionVisionValor";
import oportunidades from '../../Assets/oportunidades.png';
import WhatsApp from "../../components/Whatsapp/Whatsapp";
import Footer from "../../components/Footer/Footer";
import Contacto from "../Contacto/Contacto";
import Opportunities from "../../components/Opportunities/opportunities";

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
                        <MisionVisionValor />    
                        <Contacto />      
                        <Opportunities />              
                    </div>
                   
                    <div className={style.home}>
                        <img src={oportunidades} className={style.homeImg} />
                    </div>
                    <div className={style.home}>
                        <img src={Mapa} className={style.homeImg} />
                    </div>
              <Footer />
              <WhatsApp />
            </div>
        </div>
    )
}

export default Home;