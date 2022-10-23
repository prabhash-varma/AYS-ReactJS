import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import Builder from "./Images/builder.png";
import MainNav from "../components/MainNav";
import Axios from 'axios'



function Login() {
  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [msg,setMsg]=useState("");
  const [pmsg,setPmsg]=useState("");
  const [imsg,setImsg]=useState("");

  const submit = (e)=>{
    e.preventDefault();
    console.log(email,password);

    if(email===""){
      e.preventDefault();
      setMsg("Enter your email!");
      console.log("enter email");
    }
    else if(!email.includes("@")){
      e.preventDefault();
      setMsg("Enter a valid email!");
      console.log("enter valid email");
    }
    else if(password===""){
      e.preventDefault();
      setPmsg("Enter your password!");
      console.log("enter password");
    }
    
    else{
      
      Axios.get(`http://localhost:3001/users?email=${email}&password=${password}`).then((res)=>{
      
        console.log(res.data);
        
        if(res.data.length>0){
          alert("Login successful!");
          navigate('/ays/home');
        }
        else{
          setImsg("Invalid email or password!");
          console.log("Invalid email or password!");
        }
      })

    }
  }


  return (


    <>

    <MainNav/>
    <div className="login">
      <div>

          <img style={{width:"500px",height:"700px"}} src={Builder} alt="logo" />
      </div>

      <div id="formdiv">
        <h1 style={{"margin-bottom":"50px","margin-top":"30px"}}>Login</h1>
        <div>
          <h5 style={{color:"red"}}>{imsg}</h5>
        </div>
        <form onSubmit={submit} >
          <div className="container">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>{
                  setMsg("")
                  setImsg("")
                  setEmail(e.target.value);
                }}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
              <p style={{color:"red"}}>{msg}</p>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>{
                  setPmsg("")
                  setImsg("")
                  setPassword(e.target.value);
                }}

              />
              <p style={{color:"red"}}>{pmsg}</p>
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
              onClick={()=>{
                submit();
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
