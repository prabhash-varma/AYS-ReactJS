import React from 'react'
import aysimage from './Images/ays.jpg';
import {Link} from 'react-router-dom'
import './css/HomeNav.css'


const HomeNav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
        <a className="navbar-brand">
           <img style={{width:"100px",height:"45px","margin-left":"70px"}} src={aysimage} alt="#" />
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{"font-size":"18px","margin-right":"30px"}}>
      <ul style={{"margin-right":"35px"}} className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/ays/home"> <a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/ays/about"><a className="nav-link active" aria-current="page" href="#">About</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/ays/contactus"><a className="nav-link active" aria-current="page" href="#">ContactUs</a></Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <Link to="/ays/services/homecleaning"><li><a className="dropdown-item" href="#">Home Cleaning</a></li></Link>
            <Link to="/ays/services/appliances"><li><a className="dropdown-item" href="#">Appliances</a></li></Link>
            <Link to="/ays/services/packersandmovers"><li><a className="dropdown-item" href="#">PackersAndMovers</a></li></Link>
            <Link to="/ays/services/salon"><li><a className="dropdown-item" href="#">Salon</a></li></Link>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <Link to="/ays/profile"><li><a className="dropdown-item" href="#">Profile</a></li></Link>
            <Link to="/ays/cart"><li><a className="dropdown-item" href="#">My Cart</a></li></Link>
            <Link to="/ays/orders"><li><a className="dropdown-item" href="#">Orders</a></li></Link>
            <li><hr class="dropdown-divider"/></li>
            <Link to="/ays/settings"><li><a class="dropdown-item" href="#">Settings</a></li></Link>
            <Link to="/"><li><a class="dropdown-item" href="#">Logout</a></li></Link>


          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default HomeNav
