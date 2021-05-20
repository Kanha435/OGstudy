import React from 'react'

function Newgroup() {
    return (
        <>
            <div className="container-fluid back-img">
                <div className="row justify-content-center mt-3">
                    <div className="col-11 col-md-4 margin-top p-5">
                        <input type="email" className="form-control mt-3 bg-transparent text-center text-white border-bottom"  placeholder="Your email" />
                        <input type="text" className="form-control mt-3 bg-transparent text-center text-white"  placeholder="Your Group name..." />
                        <input type="text" className="form-control mt-3 bg-transparent text-center text-white"  placeholder="Enter Course name..." />
                        <a href="//" className="nav-link btn btn-dark text-white mt-3">Create</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newgroup;
