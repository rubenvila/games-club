/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import appFirebase from '../credentials'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        } catch (error) {
            alert("Asegúrese que la contraseña tenga más de 8 caracteres")
        }
        } else {
            try {
            await signInWithEmailAndPassword(auth, correo, contraseña)
        } catch(error) {
            alert("Correo o contraseña erróneas")
        }


        }

    }

    return (
        <div className="container">
            <div className="row">
                {/*Columna pequeña form*/}
                <div>
                    <div className="padre">
                        <div className="card card-body shadow">
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder="Correo electrónico" className="cajatexto" id="email"/>
                                <input type="password" placeholder="Contraseña" className="cajatexto" id="password"/>
                                <button className="btnform">{registrando ? "Registrarse" : "Inicia sesión"}</button>
                            </form>
                            <h4 className="texto">{registrando ? "Si ya tienes cuenta " : "¿No tienes cuenta? "}<button className="btnswitch" onClick={()=> setRegistrando(!registrando)}>{registrando ? "Inicia sesión" : "Regístrate"}</button></h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login