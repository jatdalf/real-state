import React from "react";
import appFirebase from "../credenciales";
import {getFirestore, collection, addDoc} from 'firestore/firestore';
import {getStorage} from 'firebase/storage'
import { async } from "@firebase/util";

const Form = () => {
    let urlImgDesc;
    const saveInfo = async(e)=>{
        e.preventDefault();
        const imgName = e.target.imgName.value;
        const imgDescription = e.target.imgDescroption.value;

        const newImage = {
            imgName,
            imgDescription,
            urlImgDesc,
        }
    }
    
    return (
        <div>
            <h3>Agregar Imagen Nueva</h3>

        </div>
    )
}

export default Form;