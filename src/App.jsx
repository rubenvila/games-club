/* eslint-disable no-unused-vars */
import './App.css'
import { useState } from 'react'

//Import módulos de Firebase
import appFirebase from '../src/credentials'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

//Import components
import Login from '../src/components/Login'
import Home from '../src/components/Home'


function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
<div>
    {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
</div>
  )
}

export default App
