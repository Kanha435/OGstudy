import React from 'react'
import {NavLink} from 'react-router-dom';

function SchoolGroup() {
    return (
        <>
            <div className="container margin-top">
                <div className="row">
                    <NavLink to="/" className="btn btn-dark col-2">Home</NavLink>
                </div>
                <div className="row text-center p-2">
                    <h4>Schooling Student Groups</h4>
                </div>
                <div className="row p-3 justify-content-around">
                    <div className="card col-md-2 schoolcard text-center p-3 mt-2">
                        <h6>5th</h6>
                        <p>Class Group</p>
                        <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                    </div>
                    <div className="card col-md-2 schoolcard text-center p-3 mt-2">
                        <h6>6th</h6>
                        <p>Class Group</p>
                        <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                    </div>
                    <div className="card col-md-2 schoolcard text-center p-3 mt-2">
                        <h6>7th</h6>
                        <p>Class Group</p>
                        <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                    </div>
                    <div className="card col-md-2 schoolcard text-center p-3 mt-2">
                        <h6>8th</h6>
                        <p>Class Group</p>
                        <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                    </div>
                </div>
                <div className="row p-3 justify-content-around">
                    <div className="card col-md-2 schoolcard text-center p-3 mt-2">
                        <h6>9th</h6>
                        <p>Class Group</p>
                        <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                    </div>
                    <div className="card col-md-2 schoolcard text-center p-3 mt-2">
                        <h6>10th</h6>
                        <p>Class Group</p>
                        <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                    </div>
                    <div className="card col-md-2 schoolcard text-center p-3 mt-2">
                        <h6>11th</h6>
                        <p>Class Group</p>
                        <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                    </div>
                    <div className="card col-md-2 schoolcard text-center p-3 mt-2">
                        <h6>12th</h6>
                        <p>Class Group</p>
                        <NavLink to="/" className="nav-link btn btn-dark text-white w-50 m-auto">Join</NavLink>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default SchoolGroup;
