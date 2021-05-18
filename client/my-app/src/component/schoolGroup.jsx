import React from 'react'
import {NavLink} from 'react-router-dom';
import schooldata from "../data/schooldata";
function SchoolGroup() {
    return (
        <>
            <div className="container margin-top">
            <div className="row">
                    <NavLink to="/" className="btn  col-1"><img className="icon" src="https://image.flaticon.com/icons/png/128/25/25694.png" alt="" /></NavLink>
                </div>
                <div className="row text-center p-2">
                    <h4>Schooling Student Groups</h4>
                </div>
                <div className="row p-3 justify-content-around">
                    {
                        schooldata.map((item)=>
                        <div className="card col-md-2 schoolcard text-center p-3 mt-3">
                            <h6>{item.cName}</h6>
                            <p>Class Group</p>
                            <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                        </div>
                        )
                    }
                </div>
            </div>   
        </>
    )
}

export default SchoolGroup;
