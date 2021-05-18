import React from 'react'
import {NavLink} from 'react-router-dom';
function Groups() {
    return (
        <>
            <div className="container  margin-top">
                <div className="row">
                    <NavLink to="/" className="btn col-1"><img className="icon" src="https://image.flaticon.com/icons/png/128/25/25694.png" alt="" /></NavLink>
                </div>
                <div className="row mt-3">
                    <div className="col-md-3 border">
                        <div className="row bg-dark text-white text-center">
                            <h3>Group Name</h3>
                        </div>
                        <div className="row p-1 border-bottom">
                            <a href="/" className="btn btn-outline-dark">Group name</a>
                        </div>
                        <div className="row p-1 border-bottom">
                            <a href="/" className="btn btn-outline-dark">Group name</a>
                        </div>
                        <div className="row p-1 border-bottom">
                            <a href="/" className="btn btn-outline-dark">Group name</a>
                        </div>
                    </div>
                    <div className="col-md-9 border">
                        <div className="row text-center border-bottom">
                            <h3 className="tag text-dark">OG<small className = "heading">study</small></h3>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-9 col-md-3 text-center card m-4 p-2">
                                <div className="col-md-12 bg-dark text-white p-2"><h5>Group Name</h5></div>
                                <div className="col-md-12"> <p> Course</p></div>
                                <div className="col-md-12"> <p> Members</p></div>
                                <a href="/" className="btn btn-dark text-white w-50 m-auto">Join now</a>
                            </div>
                            <div className="col-9 col-md-3 text-center card m-4 p-2">
                                <div className="col-md-12 bg-dark text-white p-2"><h5>Group Name</h5></div>
                                <div className="col-md-12"> <p> Course</p></div>
                                <div className="col-md-12"> <p> Members</p></div>
                                <a href="/" className="btn btn-dark text-white w-50 m-auto">Join now</a>
                            </div>
                            <div className="col-9 col-md-3 text-center card m-4 p-2">
                                <div className="col-md-12 bg-dark text-white p-2"><h5>Group Name</h5></div>
                                <div className="col-md-12"> <p> Course</p></div>
                                <div className="col-md-12"> <p> Members</p></div>
                                <a href="/" className="btn btn-dark text-white w-50 m-auto">Join now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Groups
