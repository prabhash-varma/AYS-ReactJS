import React from 'react'
import {useContext, useEffect,useState} from "react";
import EmpNav from "../components/EmpNav.js";
import ProfileComp from "../components/ProfileComp.js";
import {store} from '../App.js'
import Axios from 'axios'


function Empprofile() {

    const {empdetails, setempDetails} = useContext(store);


  return (
    <div>
        <EmpNav />
      <p style={{marginTop:"70px"}}></p>
      <ProfileComp firstName={empdetails.firstName} lastName={empdetails.lastName} email={empdetails.email} phone={empdetails.phone} address={empdetails.address} city={empdetails.city} state={empdetails.state} pincode={empdetails.pincode}/>
      
    </div>
  )
}

export default Empprofile
