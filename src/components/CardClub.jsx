/* eslint-disable no-unused-vars */
import React from "react";
import appFirebase from "../credentials";
import { getAuth } from "firebase/auth";
const auth = getAuth(appFirebase)
import swal from "sweetalert";


const CardClub = (info) => {

    const mostrarDescrip = () => {
        swal(info.info.descripcion)
    }

    return (

        <div className="card card-club me-3 ms-3 mb-3">
            <img src="https://dummyimage.com/300x200/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
            <div className="card-body text-center">

                <h4 className="">{info.info.nombre}</h4>
                <button className="btn-descrip" onClick={mostrarDescrip}>Leer más</button>
                <a href="#" className="btn col-md-12"><i className="fa-solid fa-plus"></i> Subscribirse</a>
            </div>
        </div>

    )
}

export default CardClub