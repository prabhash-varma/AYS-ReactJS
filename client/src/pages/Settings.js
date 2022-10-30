import React,{useContext,useState,useEffect} from 'react'
import HomeNav from '../components/HomeNav.js'
import {store} from '../App.js'
import Axios from 'axios';
import "./css/Profile.css";
import Footer from '../components/Footer.js'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'


function Settings() {

  const navigate = useNavigate();
  const [cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist]=useContext(store);

  const [obj,setObj]= useState({firstname:userdetails.firstName,lastname:userdetails.lastName,email:userdetails.email,phone:userdetails.phone,address:userdetails.address,city:userdetails.city,state:userdetails.state,pincode:userdetails.pincode});

  const [firstNameMsg, setFirstNameMsg] = useState("");
  const [lastNameMsg, setLastNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [addressMsg, setAddressMsg] = useState("");
  const [cityMsg, setCityMsg] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");
  

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObj({ ...obj, [name]: value });
  }

  const updateUserProfile = ()=>{
    if (obj.firstname === "") {
      setFirstNameMsg("First name is required!");
    } else if (obj.lastname === "") {
      setLastNameMsg("Last name is required!");
    } else if (obj.email === "" || !obj.email.includes("@")) {
      setEmailMsg("Enter valid email!");
    } else if (obj.phone === "" || !obj.phone.match(/^[0-9]{10}$/)) {
      setPhoneMsg("Enter valid phone number!");
    } else if (obj.address === "") {
      setAddressMsg("Address is required!");
    } else if (obj.city === "") {
      setCityMsg("City is required!");
    } else if (obj.state === "select" || obj.state === "") {
      setStateMsg("State is required!");
    } else if (obj.pincode === "" || !obj.pincode.match(/^[0-9]{6}$/)) {
      setPincodeMsg("Enter valid pincode!");
    } 
    else{
      setUserDetails({...userdetails,firstName:obj.firstname,lastName:obj.lastname,email:obj.email,phone:obj.phone,address:obj.address,city:obj.city,state:obj.state,pincode:obj.pincode});

      Axios.patch(`http://localhost:3001/users/${userdetails.id}`,{firstName:obj.firstname,lastName:obj.lastname,email:obj.email,phone:obj.phone,address:obj.address,city:obj.city,state:obj.state,pincode:obj.pincode}).then((res)=>{
        toast.success("Profile updated successfully!",{position: toast.POSITION.BOTTOM_RIGHT});
        console.log(userdetails)
      }).catch((err)=>{
        toast.error("Error in updating profile!",{position: toast.POSITION.BOTTOM_RIGHT});
      })
      
    }
  }



  useEffect(()=>{
    if(userdetails.length===0){
      navigate("/ays/login")
    }
  },[userdetails])


  return (
    <div>
       <HomeNav/>

       <div className="cart-header" style={{ display: "flex",marginTop:"60px" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fas fa-edit"
          ></i>
          Update your profile
        </h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>
     
    <div>
      <div style={{paddingTop: "2em"}}>
      <div className="container">
        <div className="row gutters">
          
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h3 className="mb-2 text-dark">Personal Details</h3>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">First Name</label>
                      
                      <input
                        type="text" 
                        name="firstname"
                        value={obj.firstname}
                        className="form-control" style={{marginBottom:"1em"}}
                        id="fullname"

                        placeholder="First name"
                        onChange={(e)=>{
                          setFirstNameMsg("")
                          handleInputs(e)
                        }}
                      />
                    </div>
                    <p style={{ color: "red" }}>{firstNameMsg}</p>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Last Name</label>
                      <input
                        type="url"
                        name="lastname"
                        value={obj.lastname}
                        className="form-control" style={{marginBottom:"1em"}}
                        id="website"
                        placeholder="Last Name"
                        onChange={(e)=>{
                          setLastNameMsg("")
                          handleInputs(e)
                        }}
                      />
                    </div>
                    <p style={{ color: "red" }}>{lastNameMsg}</p>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={obj.email}
                        className="form-control" style={{marginBottom:"1em"}}
                        id="eMail"
                        placeholder="Email ID"
                        onChange={(e)=>{
                          setEmailMsg("")
                          handleInputs(e)
                        }}
                      />
                    </div>
                    <p style={{ color: "red" }}>{emailMsg}</p>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={obj.phone}
                        className="form-control" style={{marginBottom:"1em"}}
                        id="phone"
                        placeholder="Phone number"
                        onChange={(e)=>{
                          setPhoneMsg("")
                          handleInputs(e)
                        }}
                      />
                    </div>
                    <p style={{ color: "red" }}>{phoneMsg}</p>
                  </div>
                  
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h3 className="mt-3 mb-2 text-dark">Address</h3>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="Street">Addresss</label>
                      <input
                        type="name"
                        name="address"
                        value={obj.address}
                        className="form-control" style={{marginBottom:"1em"}}
                        id="Street"
                        placeholder="Street"
                        onChange={(e)=>{
                          setAddressMsg("")
                          handleInputs(e)
                        }}
                      />
                    </div>
                    <p style={{ color: "red" }}>{addressMsg}</p>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="ciTy">City</label>
                      <input
                        type="name"
                        name="city"
                        value={obj.city}
                        className="form-control"
                        id="ciTy"
                        placeholder="City"
                        onChange={(e)=>{
                          setCityMsg("")
                          handleInputs(e)
                        }}
                      />
                    </div>
                    <p style={{ color: "red" }}>{cityMsg}</p>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="sTate">State</label>
                      <select onChange={(e) => {
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
                    </div>
                    <p style={{ color: "red" }}>{stateMsg}</p>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="zIp">Zip Code</label>
                      <input
                        type="text"
                        name="pincode"
                        value={obj.pincode}
                        className="form-control"
                        id="zIp"
                        placeholder="Zip Code"
                        onChange={(e)=>{
                          setPincodeMsg("")
                          handleInputs(e)
                        }}
                      />
                    </div>
                    <p style={{ color: "red" }}>{pincodeMsg}</p>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right " style={{marginTop: "30px"}}>
                      {/* <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary " style={{margin: "10px"}}
                      >
                        Cancel
                      </button> */}
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary" style={{margin: "10px"}}
                        onClick={() => {
                          updateUserProfile();
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

<div style={{marginTop:"170px"}}>
<Footer/>
</div>
    

    </div>
  )
}

export default Settings
