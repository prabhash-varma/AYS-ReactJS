import React from 'react'
import { Link } from 'react-router-dom'
import HomeNav from '../components/HomeNav.js'
import MainImage from './Images/ays3.png'
import './css/Main.css'
import Footer from '../components/Footer.js'
import {useNavigate} from 'react-router-dom'

function Employee_home() {
    const navigate=useNavigate();
  return (
    <div>
      <img style={{marginTop:"60px"}} id="MainImage" src={MainImage} alt="MainImage" />
        
      <h1>
          <Link to="/work">Work to do</Link>
        </h1>
        <Footer/>
  </div>
  )
}

export default Employee_home
