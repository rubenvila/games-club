/* eslint-disable no-unused-vars */
import swal from 'sweetalert';
import React, { useState } from "react";
import appFirebase from '../credentials'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider()

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
            swal("Asegúrese que la contraseña tenga más de 8 caracteres")
        }
        } else {
            try {
            await signInWithEmailAndPassword(auth, correo, contraseña)
        } catch(error) {
            swal("Correo o contraseña erróneas")
        }


        }

    }

    function call_login_google() {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
        
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
                            <h4 className="texto" onClick={call_login_google}>Inicia sesión con <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Iniciar sesión con Google" className="img_google" onClick={call_login_google}/>
                            </h4></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login