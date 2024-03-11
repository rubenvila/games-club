import React from "react";
import appFirebase from "../credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase)



const DescriptionClub = (info) => {
    return (

        <div className="modal fade" id="exampleModalScrollable6" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle6" aria-hidden="true" data-backdrop="static" >
            <div className="modal-dialog modal-dialog-scrollable" role="document">
              <div className="modal-content container">
                   
                <div className="modal-body">
                    <div className="close-button-x">
                        <a href="#" type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></a>
                    </div>
                    
                    <h2 className="title">{info.info.nombre}</h2>
                    <p className="paragraph">
                        {info.info.descripcion}
                    </p>
                    <div className="galery-game row">
                        
                    </div>
                </div>
                
              </div>
            </div>
        </div>

    )
}

export default DescriptionClub