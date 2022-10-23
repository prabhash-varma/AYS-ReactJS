import React from 'react'
import MainNav from '../components/MainNav'
import MainImage from './Images/indeximage.jpg'
import './css/Main.css'
import HomeCleaning from './Images/home_cleaning.svg'
import Appliance from './Images/appliance.svg'
import PackersAndMovers from './Images/packers_movers.svg'
import Salon from './Images/salon.svg'
import Footer from '../components/Footer'

function Main() {
  return (
    <div>

      <MainNav/>
      <img id="MainImage" src={MainImage} alt="MainImage" />
      <h1 style={{"margin-top":"65px"}}>Our Services</h1>
      
      <div className="services">
        <div className="services-name">
          <img src={Appliance} alt="Appliance" />
          <h3>Appliances</h3>
        </div>
        <div className="services-name">
        <img src={HomeCleaning} alt="HomeCleaning" />
        <h3>HomeCleaning</h3>
        </div>
        <div className="services-name">
        <img src={PackersAndMovers} alt="PackersAndMovers"/>
        <h3>PackersAndMovers</h3>
        </div>
        <div className="services-name">
        <img src={Salon} alt="Salon" />
        <h3>Salon</h3>
        </div>
        

        
        
        
      </div>



      <Footer/>
    </div>
  )
}

export default Main
