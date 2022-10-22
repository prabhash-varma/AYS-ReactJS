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
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"><Link to="/ays/home">Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/ays/about">About</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/ays/contactus">ContactUs</Link></a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"><Link to="/ays/services/homecleaning">Home Cleaning</Link></a></li>
            <li><a className="dropdown-item" href="#"><Link to="/ays/services/appliances">Appliances</Link></a></li>
            <li><a className="dropdown-item" href="#"><Link to="/ays/services/packersandmovers">PackersAndMovers</Link></a></li>
            <li><a className="dropdown-item" href="#"><Link to="/ays/services/salon">Salon</Link></a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"><Link to="/ays/profile">Profile</Link></a></li>
            <li><a className="dropdown-item" href="#"><Link to="/ays/cart">My Cart</Link></a></li>
            <li><a className="dropdown-item" href="#"><Link to="/ays/orders">Orders</Link></a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#"><Link to="/ays/settings">Settings</Link></a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>


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
