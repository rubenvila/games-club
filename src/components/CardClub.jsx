import React from "react";
import appFirebase from "../credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase)



const CardClub = (info) => {
    return (

        <div className="card card-club me-3 ms-3 mb-3">
            <img src="https://dummyimage.com/300x200/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h4 className="">{info.info.nombre}</h4>
                <a href="#" className="btn col-md-12"><i class="fa-solid fa-eye"></i>  Leer más</a>
                <a href="#" className="btn col-md-12"><i class="fa-solid fa-plus"></i> Subscribirse</a>
            </div>
        </div>

    )
}

export default CardClub