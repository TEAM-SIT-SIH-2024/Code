
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './index.css';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/SignUp");
    }
  return (
    <div>
        <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header text-center">
                  Welcome To MediQueue
                </div>
                <div class="card-body">
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="Hospital Name" required/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter password" required/>
                        </div>
                        <button onClick={handleClick} type="submit"  class="btn btn-dark btn-block mx-2">SignUp</button>
                        <button type="submit" class="btn btn-dark btn-block mx-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
      {/*<div className=".form-control-lg mb-3 mx-2">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<label for="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" className="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
<button type="button" className="btn btn-outline-primary my-3">Primary</button>*/}
    </div>
  )
}

export default Login
