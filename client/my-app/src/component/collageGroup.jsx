import React from 'react'
import collagedata from "../data/collagedata";
import {NavLink} from "react-router-dom";
function CollageGroup() {
    return (
        <>
            <div className="container margin-top">
                <div className="row">
                    <NavLink to="/" className="btn btn-dark col-2">Home</NavLink>
                </div>
                <div className="row text-center p-2">
                    <h4>Collage/University Student Groups</h4>
                </div>
                <div className="row p-3 justify-content-around">
                    {
                        collagedata.map((item)=>
                            <div className="card col-md-2 collagecard text-center p-3 mt-3 ml-5">
                              <h6>{item.cName}</h6>
                             <p>Group</p>
                             <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                             </div>
                        )
                    }
                    
                </div>
            </div>
        </>
    )
}

export default CollageGroup
