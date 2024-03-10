/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import appFirebase from "../credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase)

import Navbar from './Navbar'
import CardClub from './CardClub'

const Home = ({correoUsuario}) => {
    return (
        <div>
            <Navbar/>
            <h2>Bienvenido: {correoUsuario}</h2>
            <div className="row">

                <CardClub/>
            </div>

        </div>
    )
}

export default Home