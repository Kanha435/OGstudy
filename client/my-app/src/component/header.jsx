import React from 'react'

function Header() {
    return (
        <>
                    <div class="container-fluid fixed-top header navbar pt-3 pb-3">
                        <h1 className="tag">OG<small className = "heading">study</small></h1>
                            <ul class="d-flex">
                                <a className="nav-link text-white" href="/">Sign In</a>
                                <a className="nav-link text-white" href="/">Sign Up</a>
                            </ul>                           
                    </div>
        </>
    )
}

export default Header;
