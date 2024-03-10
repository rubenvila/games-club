/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import appFirebase from "../credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
    return (
        <div>
            <h2>Bienvenido: {correoUsuario} <button className="btn-primary" onClick={()=> signOut(auth)}>Logout</button></h2>
        </div>
    )
}

export default Home