import React from 'react'
import HomeNav from '../components/HomeNav.js'
import member1 from "./Images/member1.jpeg";
import member2 from "./Images/member2.jpg";
import member3 from "./Images/member3.jpg";
import member4 from "./Images/member4.jpg";
import "./css/About.css";


function About() {
  return (
    <div>
       <HomeNav/>

       {/* <h1 class="text-center fw-bold">Team AYS</h1>
      <p class="text-muted text-center">
        The team with a vision to connect customers and service provides and
        fill the gap in the market demand
      </p> */}
       {/* <section class="team"> */}
  <div class="container">
      <div class="row">
          <div class="col-lg-8 mx-auto">
              <h1 class="text-center fw-bold">
                  Team AYS
              </h1>
              <p class="text-muted text-center">
                  The team with a vision to connect customers and service provides and fill the gap in the market demand
              </p>
          </div>
      <div
        class="container"
        style={{
          background: "radial-gradient(circle, #638bd6 0%, #353838 100%)",
          "padding-top": "80px",
        }}
      >
        <div class="row d-flex justify-content-center">
          <div class="col-md-3">
            <div class="our-team">
              <div class="pic">
                <img className="photo" src={member1} alt="member1"></img>
              </div>
              <h2 class="title">Siddu Putchala</h2>
              <span class="role">Web Developer</span>
              <ul class="social">
                <li>
                  <a href="#" class="fab fa-linkedin"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-twitter"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-facebook"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-instagram"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="our-team">
              <div class="pic">
                <img className="photo" src={member2} alt="member2"></img>
              </div>
              <h2 class="title">Prabhas</h2>
              <span class="role">Web Developer</span>
              <ul class="social">
                <li>
                  <a href="#" class="fab fa-linkedin"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-twitter"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-facebook"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-instagram"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="our-team">
              <div class="pic">
                <img className="photo" src={member3} alt="member3"></img>
              </div>
              <h2 class="title">Saketh</h2>
              <span class="role">Web Developer</span>
              <ul class="social">
                <li>
                  <a href="#" class="fab fa-linkedin"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-twitter"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-facebook"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-instagram"></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-3">
            <div class="our-team">
              <div class="pic">
                <img className="photo" src={member4} alt="member4"></img>
              </div>
              <h2 class="title">Kasyap</h2>
              <span class="role">Web Developer</span>
              <ul class="social">
                <li>
                  <a href="#" class="fab fa-linkedin"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-twitter"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-facebook"></a>
                </li>
                <li>
                  <a href="#" class="fab fa-instagram"></a>
                </li>
              </ul>
            </div>
          </div>

 <p className="text"> 
    With Great Power Comes Great Responsibilities
    </p>
        </div>
      </div>
    </div>
    </div>

    </div>
  )
}

export default About
