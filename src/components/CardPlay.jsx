/* eslint-disable no-unused-vars */
import React from "react";
import appFirebase from "../credentials";
import { getAuth } from "firebase/auth";
const auth = getAuth(appFirebase)



const CardPlay = (info) => {
    return (

        <div className="card card-club me-3 ms-3 mb-3">
            <img src="https://dummyimage.com/300x200/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
            <div className="card-body text-center">

                <h4 className="">{info.info.titulo}</h4>
                <h5 className="">{info.info.genero}</h5>
                <p className="">{info.info.descripcion}</p>
                <a href="#" className="btn col-md-12"><i className="fa-regular fa-heart"></i> Favorito</a>
            </div>
        </div>

    )
}

export default CardPlay