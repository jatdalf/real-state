import React from "react";
import style from './Contacto.module.css'
import Header from '../../components/Header/Header.jsx';

const Contacto = () => {
    return (
        <div>
            <Header />
            <div className={style.container}>
                Aqui va el formulario de contacto
            </div>
        </div>
    )
}

export default Contacto;