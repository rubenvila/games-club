/* eslint-disable no-unused-vars */
import swal from 'sweetalert';
import React, { useState } from "react";
import appFirebase from '../credentials'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const provider = new GoogleAuthProvider()

const auth = getAuth(appFirebase)
const db = getFirestore(appFirebase);


const Login = () => {

    const [registrando, setRegistrando] = useState(false)
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        username: '',
        email: '',
        password: '',
      });

      const handleInputChange = (event) => {
        setUserData({ ...userData, [event.target.id]: event.target.value });
      };

    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(
                    auth,
                    userData.email,
                    userData.password
                  );

                  const userRef = doc(db, `users/${auth.currentUser.uid}`);
                  await setDoc(userRef, {
                    nombre: userData.nombre,
                    apellido: userData.apellido,
                    username: userData.username,
                    email: userData.email,
                    uid: auth.currentUser.uid,
                  });

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

    const call_login_google = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
    
          // Handle successful Google login
    
          // Create user document in Firestore if it doesn't exist
          const userRef = doc(db, `users/${result.user.uid}`);
          const docSnap = await setDoc(userRef);
          if (!docSnap.exists()) {
            await setDoc(userRef, {
              nombre: result.user.displayName,
              apellido: '',
              username: result.user.displayName,
              email: result.user.email,
              uid: result.user.uid,
            });
          }
        } catch (error) {
          // Handle errors during Google login
        }
      };

    return (
        <div className="container">
          <div className="padre">
            <div className="card card-body shadow">
              <form onSubmit={functAutenticacion}>
                {registrando && (
                  <>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="cajatexto"
                      id="nombre"
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Apellido"
                      className="cajatexto"
                      id="apellido"
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Nombre de usuario"
                      className="cajatexto"
                      id="username"
                      onChange={handleInputChange}
                    />
                  </>
                )}
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  className="cajatexto"
                  id="email"
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="cajatexto"
                  id="password"
                  onChange={handleInputChange}
                />
                <button className="btnform">
                  {registrando ? "Registrarse" : "Inicia sesión"}
                </button>
              </form>
              <h4 className="texto">
                {registrando
                  ? "Si ya tienes cuenta "
                  : "¿No tienes cuenta? "}
                <button className="btnswitch" onClick={() => setRegistrando(!registrando)}>
                  {registrando ? "Inicia sesión" : "Regístrate"}
                </button>
              </h4>
              <h4 className="texto" onClick={call_login_google}>
                Inicia sesión con{" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                  alt="Iniciar sesión con Google"
                  className="img_google"
                  onClick={call_login_google}
                />
              </h4>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;
