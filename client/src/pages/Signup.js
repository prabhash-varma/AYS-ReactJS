import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import MainNav from '../components/MainNav'
import Builder from "./Images/builder.png";
import './css/Signup.css';
import Axios from 'axios'

function Signup() {
  const navigate = useNavigate();
  const [user,setUser]=useState({firstName:"",lastName:"",email:"",phone:"",state:"",pincode:"",password:"",confirmPassword:""});
  const [firstNameMsg,setFirstNameMsg]=useState("");
  const [lastNameMsg,setLastNameMsg]=useState("");
  const [emailMsg,setEmailMsg]=useState("");
  const [phoneMsg,setPhoneMsg]=useState("");
  const [stateMsg,setStateMsg]=useState("");
  const [pincodeMsg,setPincodeMsg]=useState("");
  const [passwordMsg,setPasswordMsg]=useState("");
  const [confirmPasswordMsg,setConfirmPasswordMsg]=useState("");

  const handleInputs=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({...user,[name]:value});
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(user);
    const {firstName,lastName,email,phone,state,pincode,password,confirmPassword}=user;
    if(firstName===""){
      setFirstNameMsg("First name is required!");
    }
    else if(lastName===""){
      setLastNameMsg("Last name is required!");
    }
    else if(email==="" || !email.includes("@")){
      setEmailMsg("Enter valid email!");
    }
    else if(phone==="" || phone.length!==10){
      setPhoneMsg("Enter valid phone number!");
    }
    else if(state===""){
      setStateMsg("State is required!");
    }
    else if(pincode==="" || pincode.length!==6){
      setPincodeMsg("Enter valid pincode!");
    }
    else if(password==="" || password.length<5){
      setPasswordMsg("Password should be atleast 5 characters long!");
    }
    else if(confirmPassword==="" || confirmPassword!==password){
      setConfirmPasswordMsg("Password doesn't match!");
    }
    else{
      var id=Math.floor(Math.random()*10000000000000);
      Axios.post(`http://localhost:3001/users`,{id,firstName,lastName,email,password,state,pincode,password}).then((res)=>{
        console.log(res);
        if(res.data){
          alert("Registration successful!");
          navigate("/login");
          
        }
        else{
          alert("Something went wrong");
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

      <div className="formdiv">
        <h1 style={{"margin-bottom":"50px","margin-top":"30px"}}>Signup</h1>
        <form onSubmit={submitHandler}>
          <div className="container">
          <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{"margin-right":"10px"}} class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="john"
                // value={user.firstName}
                onChange={(e)=>{
                  setFirstNameMsg("");
                  handleInputs(e)
                  
                }}
              />
              <p style={{color:"red"}}>{firstNameMsg}</p>
            </div>
            <div style={{"margin-left":"10px"}} class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="doe"
                // value={user.lastName}
                onChange={(e)=>{
                  setLastNameMsg("");
                  handleInputs(e)
                  
                }}
              />
              <p style={{color:"red"}}>{lastNameMsg}</p>
            </div>
          </div>


          <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{"margin-right":"10px"}} class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="john@gmail.com"
                // value={user.email}
                onChange={(e)=>{
                  setEmailMsg("");
                  handleInputs(e)
                  
                }}
              />
              <p style={{color:"red"}}>{emailMsg}</p>
            </div>
            <div style={{"margin-left":"10px"}} class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="99******99"
                // value={user.phone}
                onChange={(e)=>{
                  setPhoneMsg("");
                  handleInputs(e)
                }}
              />
              <p style={{color:"red"}}>{phoneMsg}</p>
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{"margin-right":"10px"}} class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                State
              </label>
              <input
                type="text"
                name="state"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Andhra Pradesh"
                // value={user.state}
                onChange={(e)=>{
                  setStateMsg("");
                  handleInputs(e)
                }}
              />
              <p style={{color:"red"}}>{stateMsg}</p>
            </div>
            <div style={{"margin-left":"10px"}} class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="500001"
                // value={user.pincode}
                onChange={(e)=>{
                  setPincodeMsg("");
                  handleInputs(e)
                }}
              />
              <p style={{color:"red"}}>{pincodeMsg}</p>
            </div>
          </div>
            
            <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{"margin-right":"10px"}} class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="********"
                // value={user.password}
                onChange={(e)=>{
                  setPasswordMsg("");
                  handleInputs(e)
                }}
              />
              <p style={{color:"red"}}>{passwordMsg}</p>
            </div>
            <div style={{"margin-left":"10px"}} class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Confirm Password

              </label>
              <input
                type="password"
                name="confirmPassword"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="********"
                // value={user.confirmPassword}
                onChange={(e)=>{
                  setConfirmPasswordMsg("");
                  handleInputs(e)
                }}
              />
              <p style={{color:"red"}}>{confirmPasswordMsg}</p>
            </div>
          </div>
         

            <button
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
        
      </div>
     
      
    </div>


    </>
  )
}

export default Signup
