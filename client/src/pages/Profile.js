import React,{useContext, useEffect,useState} from "react";
import HomeNav from "../components/HomeNav.js";
import ProfileComp from "../components/ProfileComp.js";
import {store} from '../App.js'
import Axios from 'axios'



function Profile() {
  const [cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist]=useContext(store);
  const [profileData,setProfileData] = useState({})

  useEffect(()=>{
    if(userdetails.email===""){
      window.location.href="/login";
    }
    else{
      console.log(userdetails);
      Axios.get(`http://localhost:3001/users?email=${userdetails.email}`).then((res)=>{
        console.log(res.data);
        setProfileData(res.data[0]);
      })

    }

  },[userdetails])


  return (
    <div>
      <HomeNav />
      <p style={{marginTop:"70px"}}></p>
      <ProfileComp firstName={profileData.firstName} lastName={profileData.lastName} email={profileData.email} phone={profileData.phone} address={profileData.address} city={profileData.city} state={profileData.state} pincode={profileData.pincode}/>
    </div>
  );
}

export default Profile;
