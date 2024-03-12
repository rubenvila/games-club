
import React from "react";
import appFirebase from "../credentials";
import { getAuth, signOut } from "firebase/auth";

import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import "firebase/firestore"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 


const auth = getAuth(appFirebase)
 

import Navbar from './Navbar'
import CardPlay from './CardPlay'

const Plays = () => {
    const db = getFirestore(appFirebase); 
 
    const [playlist, setPlaylist] = useState([]); 
    const [busqueda, setBusqueda]= useState("");

 
    const cargar = async () => { 
        let list_Play = [] 
   
        const response_Play = collection(db,"Videojuegos"); 
        const date_Play = await getDocs(response_Play) 
        const prueba_Play = date_Play.docs.map((doc) => list_Play.push(doc.data())) 
        setPlaylist(list_Play) 
    } 

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    
    const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=playlist.filter((elemento)=>{
        if(elemento.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
        return elemento;
        }
    });
    setPlaylist(resultadosBusqueda);
    }
 
    useEffect(() => { 
        cargar() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

  


    


  


    return (
        <div>
            <Navbar/>
            <p><br /></p>
            <div className="d-flex justify-content-center buscador">
                <form className="nav-item d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar Juego" aria-label="Search"
                    value={busqueda}
                    onChange={handleChange}
                    />
                    <button className="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

            <div className="container home-general">
                <div className="row justify-content-center">
                {playlist && playlist.map(objetop =>
                    <CardPlay info = {objetop} key={objetop.titulo}/>
                )}

                </div>
            </div>

        </div>
    )
}


export default Plays