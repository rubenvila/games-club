import React from "react";
import appFirebase from "../credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase)



const Navbar = () => {
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
                            Nombre usuario
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-user"></i> Mi perfil</a></li>
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