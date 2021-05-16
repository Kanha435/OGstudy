import React from 'react'
import {NavLink} from 'react-router-dom';
function Content() {
    return (
        <>
        <div className="container-fluid content-1">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center card-1">
                    <img src="\img\favicon.ico.png" alt="" />
                    <h5>Study with Group</h5>
                    <p>A students with our after-school homework groups.</p>
                    <a href="/#" className="btn btn-dark mt-5">Free Sign Up</a>
                </div>
                <hr className="mt-5"/>
            </div>
        </div> 
        <div className="container bg-light mt-5 mb-5 pt-5 pb-5">
            <div className="row justify-content-center mt-4 mb-4">
                <div className="col-md-8 text-center">
                    <h1>OG<small className = "heading">study</small></h1>
                    <h3 className="mt-5">OGstudy is easiest way to work in Groups</h3>
                    <p>To create a group, you are required to enter a group name, password and the purpose of the group.</p>
                    <a href="/#" className="btn btn-dark mt-5">Create Own Group</a>
                </div>
            </div>
        </div> 

        <div className="container bg-light mt-5 mb-5 p-5">
            <div className="row mt-4 mb-4">
            <div className="card col-md-6 p-md-5 p-2 ask-form">
                    <div className="row mt-3">
                        <h1>ASK A QUESTION ? </h1>
                    </div>
                    <div className="row mt-3">
                        <p>Please contact us for specific reasons</p>
                    </div>
                </div>
                <div className="card col-md-6 p-md-5 p-2 ask-form">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div className="col-md-12">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div className="col-md-12">
                             <textarea class="form-control" placeholder="Comments Or Questions ..." rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div className="col-md-12">
                            <button className="btn btn-dark">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <div className="container p-3 mt-5 mb-5">
            <div className="row justify-content-around m-4">
                <div className="col-md-4 text-center">
                    <div className="col-md-12 card p-2">
                        <h4>School Students</h4>
                        <img src="https://images.unsplash.com/photo-1534643960519-11ad79bc19df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2Nob29sJTIwc3R1ZGVudHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                        <NavLink to="/schoolGroup" className="nav-link btn btn-dark text-white mt-3"> Join Group</NavLink>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="col-md-12 card p-2">
                        <h4>Collage/University Students</h4>
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGFnZSUyMHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                        <a href="/" className="nav-link btn btn-dark text-white mt-3"> Join Group</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container bg-light p-5 mb-5 mt-5">
            <div className="row justify-content-around mt-4 mb-4">
                <div className="col-md-4 text-center">
                    <img src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0dWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                </div>
                <div className="col-md-4 text-center">
                    <h5>Study in Group</h5>
                    <p>OGstudy Groups allow you to share ideas and study resources as well as work on projects with classmates or colleagues around the world.
</p>
                    <a href="/#" className="btn btn-dark mt-3">Join Group</a>
                   
                </div>
            </div>
        </div>    
        </>
    )
}

export default Content;
