import React, { useRef, useState, useEffect } from 'react';
import style from './RentSaleCard.module.css'
import { Link } from 'react-router-dom';
import RentSaleDb from '../RentSaleDb';

const RentSaleCard = (props)=>{
    const TempRentDb = RentSaleDb

    const imgRef = useRef();
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    return(
        <div className={style.RentSaleCardContainer}>
            {/* <Link to="/Temporario"> */}
            <div className={style.tempRentCard}>
                <h1 className={style.leftTextCard}>Alquiler Temporal</h1>
            </div>
            {/* </Link> */}
            <div className={style.saleCard}>
                <h1 className={style.centerTextCard}>Venta</h1>
            </div>       
            <div className={style.rentCard}>
                <h1 className={style.rightTextCard}>Alquiler</h1>
            </div>     
        </div>
)}

export default RentSaleCard;