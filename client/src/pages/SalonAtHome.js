import React from "react";
import HomeNav from "../components/HomeNav.js";
import Salon from "../components/Salon.js";
import Footer from '../components/Footer.js'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import S1i from "./Images/S1i.jpg";
import S1j from "./Images/S1j.jpg";
import S1k from "./Images/S1k.jpg";
import S11 from "./Images/S11.jpg";
import S12 from "./Images/S12.jpg";
import S13 from "./Images/S13.jpg";

import "./css/Salon.css";
function SalonAtHome() {
  return (
    <div>
      <HomeNav />
      <h1>Salon</h1>
      <center>
        {" "}
        <div style={{ display: "block", width: 700, padding: 30 }}>
          <Carousel>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={S11} alt="Image One" />
              <Carousel.Caption>
                <h3>Label for first slide</h3>
                <p>We serve you </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={S12} alt="Image Two" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>We serve you</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={S13} alt="Image Three" />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>We serve you</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </center>

      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          justifyContent: "center",
          "margin-top": "25px",
        }}
      >
        <div className="service-salon-img" style={{ margin: "10px" }}>
          <Salon name="Hair cut" rating="4.5" image={S1j} />
          <button className="btn btn-primary"><i  style={{marginRight:"8px"}} class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
        </div>

        <div className="service-salon-img" style={{ margin: "10px" }}>
          <Salon name="facials & cleanup" rating="4.5" image={S1i} />
          <button className="btn btn-primary"><i  style={{marginRight:"8px"}} class="fa-solid fa-cart-shopping"></i>Add to Cart</button>

        </div>

        <div className="service-salon-img" style={{ margin: "10px" }}>
          <Salon
            name="Massages, Pedicure & Manicure"
            rating="4.5"
            image={S1k}
          />
          <button className="btn btn-primary"><i  style={{marginRight:"8px"}} class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SalonAtHome;
