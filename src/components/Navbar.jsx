/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import appFirebase from "../credentials";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore,doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { getDoc } from "firebase/firestore";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null); // Add state for user data
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
        if (authenticatedUser) {
          // Fetch user data from Firestore
          const userRef = doc(db, `users/${authenticatedUser.uid}`);
          getDoc(userRef)
            .then((docSnap) => {
              const userData = docSnap.exists() ? docSnap.data() : null;
              setUserData(userData); // Update user data state
            })
            .catch((error) => {
              console.error("Error fetching user data:", error);
            });
  
          const fullName = authenticatedUser.nombre
            ? `${authenticatedUser.nombre} ${authenticatedUser.apellido}`
            : authenticatedUser.email;
          setUser(fullName);
        } else {
          setUser(null);
          setUserData(null); // Clear user data when logged out
        }
      });
  
      return unsubscribe;
    }, [auth, db]);

    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    
                    <div className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </div>
                    <div className="d-flex justify-content-center buscador">
                        <form className="nav-item d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar Juego" aria-label="Search"/>
                            <button className="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className="nav-item dropdown ms-auto">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {userData ? `${userData.nombre} ${userData.apellido}` : user || "Nombre usuario"}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">

                            <li><Link to="/Profile" ><a className="dropdown-item" href="#"><i className="fa-solid fa-user"></i> Mi perfil</a></Link></li>

                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#" onClick={()=> signOut(auth)} ><i className="fa-solid fa-right-from-bracket"></i> Cerrar Sesión</a></li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </nav>

    )
}

export default Navbar