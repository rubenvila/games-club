/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import appFirebase from "../credentials";
import { getAuth, signOut } from "firebase/auth";

import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import "firebase/firestore"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 


const auth = getAuth(appFirebase)
 

import Navbar from './Navbar'
import CardClub from './CardClub'

const Home = ({correoUsuario}) => {
    const db = getFirestore(appFirebase); 
 
    const [clublist, setClublist] = useState([]); 
 
    const cargarClubes = async () => { 
        let list = [] 
   
        const response = collection(db,"Clubes"); 
        const date = await getDocs(response) 
        const prueba = date.docs.map((doc) => list.push(doc.data())) 
        setClublist(list) 
    } 
 
    useEffect(() => { 
        cargarClubes() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 



    return (
        <div>
            <Navbar/>
            <h2>Bienvenido: {correoUsuario}</h2>
            <div className="row">
                {clublist.map(objeto =>
                    // eslint-disable-next-line react/jsx-key
                    <CardClub info = {objeto}/>
                )}
            </div>

        </div>
    )
}


export default Home