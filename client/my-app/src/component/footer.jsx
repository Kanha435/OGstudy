import React from 'react'

function Footer() {
    return (
        <>
            <div className="container-fluid footer pt-5 pb-5">
                <div className="row">
                    <div className="col-md-4"> 
                        <div className="col-md-6 p-2 m-auto footer-div ">
                            <h5 className="ml-5 text-center">Contact Us</h5>
                            <a className="nav-link text-white" href="/"> <img className="icon" src="https://image.flaticon.com/icons/png/128/1409/1409937.png" alt="" /> Twitter</a>
                            <a className="nav-link text-white" href="/"><img className="icon" src="https://image.flaticon.com/icons/png/128/2111/2111463.png" alt="" />  Instagram</a>
                            <a className="nav-link text-white" href="/"><img className="icon" src="https://image.flaticon.com/icons/png/128/732/732200.png" alt="" />  Gamil</a>
                        </div>        
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-6 p-2  m-auto footer-div">
                            <a className="nav-link" href="/">About Us</a>
                            <a className="nav-link" href="/">Help</a>
                            <a className="nav-link" href="/">Privacy Policy</a>
                        </div>    
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-6 p-2  m-auto footer-div">
                            <a className="nav-link" href="/">Sign Up</a>
                            <a className="nav-link" href="/">Terms & rules</a>
                            <a className="nav-link" href="/">Gamil</a>
                        </div>    
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 m-auto text-center text-white">
                        <h1>OG<small className = "heading">study</small></h1>
                        <p className = "text-justify"><b>OG</b>study is a free community of groups created by students  from all around the globe 
                        . OGstudy allows members to get live helps for homework assignments or class tests from other members who are studing the same things  </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 m-auto text-center">
                        <p>&#169; 2021 Created by Kanhaiya Lal Verma</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
