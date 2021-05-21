import React from 'react'
import {NavLink} from 'react-router-dom';
function Header() {
    return (
        <>
                    <div class="container-fluid fixed-top header navbar pt-3 pb-3 w-auto">
                        <h1 className="tag">OG<small className = "heading">study</small></h1>
                            <ul class="d-flex">
                                <NavLink className="nav-link text-white" to="/signin"> Sign In</NavLink>
                                <NavLink className="nav-link text-white" to="/signUp"> Sign Up</NavLink>
                            </ul>                           
                    </div>
        </>
    )
}

export default Header;
