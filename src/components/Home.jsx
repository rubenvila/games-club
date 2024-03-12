/* eslint-disable react/jsx-key */
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
import DescriptionClub from './DescriptionClub'
import CardPlay from './CardPlay'

const Home = ({correoUsuario}) => {
    const db = getFirestore(appFirebase); 
 
    const [clublist, setClublist] = useState([]); 
    const [playlist, setPlaylist] = useState([]); 

 
    const cargar = async () => { 
        let list = [] 
   
        const response = collection(db,"Clubes"); 
        const date = await getDocs(response) 
        const prueba = date.docs.map((doc) => list.push(doc.data())) 
        setClublist(list) 


        let list_Play = [] 
   
        const response_Play = collection(db,"Videojuegos"); 
        const date_Play = await getDocs(response_Play) 
        const prueba_Play = date_Play.docs.map((doc) => list_Play.push(doc.data())) 
        setPlaylist(list_Play) 
    } 
 
    useEffect(() => { 
        cargar() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 



    return (
        <div>
            <Navbar/>
            <p><br /></p>
            {playlist.map(objetop =>
                <CardPlay info = {objetop}/>
            )}
            <div className="container home-general">
                <div className="row justify-content-center">
                    {clublist.map(objeto =>
                        <CardClub info = {objeto}/>
                    )}
                </div>
                {clublist.map(objeto =>
                        <DescriptionClub info = {objeto}/>

                )}
            </div>

        </div>
    )
}


export default Home