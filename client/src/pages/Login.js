import React,{useState,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import Builder from "./Images/builder.png";
import MainNav from "../components/MainNav";
import Axios from 'axios'
import {store} from '../App.js'


function Login() {
  const navigate = useNavigate();

  const [cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist]=useContext(store);
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [msg,setMsg]=useState("");
  const [pmsg,setPmsg]=useState("");
  const [imsg,setImsg]=useState("");
 
  const [passwordType, setPasswordType] = useState("password");
  
  
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }


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
          setUserDetails(res.data[0]);
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


    <div >

    <MainNav/>
    <div className="login" >
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
              <div style={{display:"flex",justifyContent: "center"}}>
              {/* <i class="fa fa-user" style={{fontSize:"20px",marginRight: "6px",marginTop:"3px",color:"black"}} aria-hidden="true"></i> */}
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
              </div>
              
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
              <p style={{color:"red"}}>{msg}</p>
            </div>



            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              
              <div style={{display:"flex",flexDirection:"row"}}>
              {/* <i class="fas fa-key" style={{fontSize:"20px",marginRight: "6px",marginTop:"3px", color:"black"}} aria-hidden="true"></i> */}
             <input
                type={passwordType}
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>{
                  setPmsg("")
                  setImsg("")
                  setPassword(e.target.value);
                }}

              />
               
            
             <div  style={{"margin-top":"3px",cursor: "pointer"}} onClick={togglePassword}>
                { passwordType==="password"? <i className="fa fa-eye-slash" style={{"font-size":"18px"}}></i> :<i className="fa fa-eye" style={{"font-size":"18px"}}></i> }
              </div>
              
            </div>
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
        
        <div style={{marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"center"} }>
          <div>
            <p>Don't have an account? </p>
          </div>
          <div>
          <Link to="/signup"><p id="signup"><u>Sign Up</u></p></Link>

          </div>
        </div>
      </div>
     
      
    </div>


    </div>
  );
}

export default Login;
