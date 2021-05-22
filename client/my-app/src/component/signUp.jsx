import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'

function SignUp(props) {
    let state;
    if(props.name === "signin"){
        state = true;
    }else{
        state = false;
    }
    const [cstate, setstate] = useState(state)
    let change = (e)=>{
        let event = e.target.name;
        console.log(event);
        event === "signin" ? setstate(true) : setstate(false);
    }
    return (
        <>
            <div className="container margin-top">
                <div className="row">
                <NavLink to="/" className="btn col-1"><img className="icon" src="https://image.flaticon.com/icons/png/128/25/25694.png" alt="" /></NavLink>
                </div>
                <div className="row p-2 justify-content-around">
                    <div className="col-md-5 card p-5 b-shadow">
                        <h1>{ cstate ?"Sign In":"Sign Up"}</h1>
                        <input type="email" className="form-control mt-3 col-11"  placeholder="name@example.com" />
                        <input type="password" className="form-control mt-3"  placeholder="password" />
                        {cstate ? null :
                        <input type="password" className="form-control mt-3"  placeholder="confirm password" />
                        }
                        <button className="submit btn btn-dark mt-3">{cstate ?"Sign In":"Sign Up"}</button>
                    </div>
                    <div className="col-md-5 card text-center bg-dark text-white p-5 b-shadow">
                        <h4>WELCOME BACK</h4>
                        <h3 className="mt-3">In</h3>
                        <h1 className="mt-3">OG<small className = "heading">study</small></h1>
                        <div className="row justify-content-around mt-5">
                        <button className="col-5 col-sm-3 btn btn-light  text-dark" name="signup" onClick={change}>Sign Up</button>
                        <button className="col-5 col-sm-3 btn btn-light  text-dark" name="signin" onClick={change}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
