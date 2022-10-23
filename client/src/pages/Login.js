import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import Builder from "./Images/builder.png";
import MainNav from "../components/MainNav";
function Login() {
  const navigate = useNavigate();
  return (


    <>

    <MainNav/>
    <div className="login">
      <div>

          <img style={{width:"500px",height:"700px"}} src={Builder} alt="logo" />
      </div>

      <div className="formdiv">
        <h1 style={{"margin-bottom":"50px","margin-top":"30px"}}>Login</h1>
        <form>
          <div className="container">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              {/* <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              /> */}
              {/* <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label> */}
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => {
                navigate("/ays/home");
              }}
            >
              Submit
            </button>
          </div>
        </form>
        
      </div>
     
      
    </div>


    </>
  );
}

export default Login;
