/* eslint-disable no-unused-vars */
//import {__collections__} from '../../backup.json'
import React from "react"
import appFirebase from "../credentials";
import { getAuth } from "firebase/auth";
import Navbar from './Navbar'



const auth = getAuth(appFirebase)



const Profile = () => {
    return (
        <div>
            <Navbar/>
            <h2>PEEEEEERFILLLLLLLL</h2>
        </div>
    )
}

export default Profile



