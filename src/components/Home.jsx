/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import appFirebase from "../credentials";
import { getAuth } from "firebase/auth";

import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import "firebase/firestore"; 
import { useState, useEffect } from "react";


const auth = getAuth(appFirebase)
 

import Navbar from './Navbar'
import CardClub from './CardClub'
import DescriptionClub from './DescriptionClub'

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
            <p><br /></p>
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