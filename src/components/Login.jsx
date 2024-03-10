/* eslint-disable no-unused-vars */
import React from "react";

const Login = () => {
    return (
        <div className="container">
            <div className="row">
                {/*Columna pequeña form*/}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body">
                            <form>
                                <input type="text" placeholder="Correo electrónico" className="cajatexto"/>
                                <input type="password" placeholder="Contraseña" className="cajatexto"/>
                                <button>Registrarse</button>
                            </form>
                        </div>
                    </div>

                </div>
                {/*Columna grande img*/}
                <div className="col-md-8">
                    
                </div>
            </div>
        </div>
    )
}

export default Login