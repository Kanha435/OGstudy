import React from 'react'
import collagedata from "../data/collagedata";
import {NavLink} from "react-router-dom";
function CollageGroup() {
    return (
        <>
            <div className="container margin-top">
                <div className="row">
                    <NavLink to="/" className="btn  col-1"><img className="icon" src="https://image.flaticon.com/icons/png/128/25/25694.png" alt="" /></NavLink>
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
                             <div className="row">
                             <img src="https://image.flaticon.com/icons/png/128/2754/2754372.png" alt="" className="icon iw-40 col-2" />
                             <div className="col-2"> <p>240928</p> </div>
                             </div>
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
