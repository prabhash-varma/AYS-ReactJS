import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import MainNav from "../components/MainNav";
import Builder from "./Images/builder.png";
import "./css/Signup.css";
import Axios from "axios";

function Register() {




  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender:"",
    profession:"",
    email: "",
    phone: "",
    address: "",
    city:"",
    state: "",
    pincode: "",
  });
  const [firstNameMsg, setFirstNameMsg] = useState("");
  const [lastNameMsg, setLastNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [genderMsg, setGenderMsg] = useState("");
  const [professionMsg, setProfessionMsg] = useState("");
  const [addressMsg, setAddressMsg] = useState("");
  const [cityMsg, setCityMsg] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");
 

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    const {
      firstName,
      lastName,
      gender,
      profession,
      email,
      phone,
      address,
      city,
      state,
      pincode,
    } = user;

    if (firstName === "") {
      setFirstNameMsg("First name is required!");
    } else if (lastName === "") {
      setLastNameMsg("Last name is required!");
    }else if (gender === "" || gender==="select") {
      setGenderMsg("Select your gender!");
    } else if (profession === "") {
      setProfessionMsg("Enter your profession!");
    } 
    else if (email === "" || !email.includes("@")) {
      setEmailMsg("Enter valid email!");
    } else if (phone === "" || !phone.match(/^[0-9]{10}$/)) {
      setPhoneMsg("Enter valid phone number!");
    } else if (address === "") {
      setAddressMsg("Address is required!");
    } else if (city === "") {
      setCityMsg("City is required!");
    } else if (state === "select" || state === "") {
      setStateMsg("State is required!");
    } else if (pincode === "" || !pincode.match(/^[0-9]{6}$/)) {
      setPincodeMsg("Enter valid pincode!");
    }
   else {
      
          Axios.post(`http://localhost:3001/employees`, {
            firstName,
            lastName,
            gender,
            profession,
            email,
            phone,
            address,
            city,  
            state,
            pincode
          }).then((res) => {
            console.log(res);
            if (res.data) {
              alert("We received your details. We will contact you soon!");
              setUser({firstName:"",lastName:"",gender:"",profession:"",email:"",phone:"",address:"",city:"",state:"",pincode:""});
            } else {
              alert("Something went wrong");
            }
          });
        } 
      }
  



  return (
    <div>


<MainNav />
      <div className="login">
        <div>
          <img
            style={{ width: "500px", height: "700px" }}
            src={Builder}
            alt="logo"
          />
        </div>

        <div className="formdiv">
          <h1 style={{ "margin-bottom": "50px", "margin-top": "30px" }}>
            Register as Professional
          </h1>
          <form onSubmit={submitHandler}>
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}} for="exampleInputEmail1" class="form-label">
                    First Name<p style={{color:"red"}}>*</p>
                  </label>
                  <input

                    type="text"
                    value={user.firstName}
                    name="firstName"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="john"
                    // value={user.firstName}
                    onChange={(e) => {
                      setFirstNameMsg("");
                      handleInputs(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{firstNameMsg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}} for="exampleInputEmail1" class="form-label">
                  Last Name<p style={{color:"red"}}>*</p>
                  </label>
                  <input
                    type="text"
                    value={user.lastName}
                    name="lastName"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="doe"
                    // value={user.lastName}
                    onChange={(e) => {
                      setLastNameMsg("");
                      handleInputs(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{lastNameMsg}</p>
                </div>
              </div>




              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}}  for="exampleInputEmail1" class="form-label">
                    Gender<p style={{color:"red"}}>*</p>
                  </label>

                  <select style={{width:"225px"}} name="gender" onChange={(e)=>{
                    setGenderMsg("");
                    handleInputs(e);
                  }} class="form-select" aria-label="Default select example">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                  </select>
                  
                  
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}}  for="exampleInputEmail1" class="form-label">
                    Profession<p style={{color:"red"}}>*</p>
                  </label>
                  <input
                  style={{height:"38px"}}
                    type="text"
                    value={user.profession}
                    name="profession"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Eg.plumber"
                    // value={user.phone}
                    onChange={(e) => {
                      setProfessionMsg("");
                      handleInputs(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{professionMsg}</p>
                </div>
              </div>



              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}}  for="exampleInputEmail1" class="form-label">
                    Email<p style={{color:"red"}}>*</p>
                  </label>
                  <input
                    type="text"
                    value={user.email}
                    name="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="john@gmail.com"
                    // value={user.email}
                    onChange={(e) => {
                      setEmailMsg("");
                      handleInputs(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{emailMsg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}}  for="exampleInputEmail1" class="form-label">
                    Phone<p style={{color:"red"}}>*</p>
                  </label>
                  <input
                    type="text"
                    value={user.phone}
                    name="phone"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="99******99"
                    // value={user.phone}
                    onChange={(e) => {
                      setPhoneMsg("");
                      handleInputs(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{phoneMsg}</p>
                </div>
              </div>




              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label  style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}} for="exampleInputEmail1" class="form-label">
                    Address<p style={{color:"red"}}>*</p>
                  </label>
                  <input
                    type="text"
                    value={user.address}
                    name="address"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Church Street"
                    // value={user.email}
                    onChange={(e) => {
                      setAddressMsg("");
                      handleInputs(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{addressMsg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}}  for="exampleInputEmail1" class="form-label">
                    City<p style={{color:"red"}}>*</p>
                  </label>
                  <input
                    type="text"
                    value={user.city}
                    name="city"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Chennai"
                    // value={user.phone}
                    onChange={(e) => {
                      setCityMsg("");
                      handleInputs(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{cityMsg}</p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label  style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}} for="exampleInputEmail1" class="form-label">
                    State<p style={{color:"red"}}>*</p>
                  </label>
                  <select style={{width: "225px",height:"33px"}} onChange={(e) => {
                        setStateMsg("");
                        handleInputs(e)
                      }} name="state" id="state" className="form-control">
                    <option value="select">{}</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                  <p style={{ color: "red" }}>{stateMsg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label style={{display: "flex",flexDirection:"row",justifyContent:"center",marginBottom:"0px"}}  for="exampleInputEmail1" class="form-label">
                    Pincode<p style={{color:"red"}}>*</p>
                  </label>
                  <input
                  style={{height:"33px"}}
                    type="text"
                    value={user.pincode}
                    name="pincode"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="500001"
                    // value={user.pincode}
                    onChange={(e) => {
                      setPincodeMsg("");
                      handleInputs(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{pincodeMsg}</p>
                </div>
              </div>

             

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            
           
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Register
