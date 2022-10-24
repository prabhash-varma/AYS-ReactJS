import React, { useState, useContext } from "react";
import HomeNav from "../components/HomeNav.js";
import { store } from "../App.js";
import CartItem from "../components/CartItem.js";
import "./css/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useContext(store);

  return (
    <div>
      <HomeNav />
      <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fa-solid fa-cart-shopping"
          ></i>
          Cart Items{" "}
        </h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>
      <div className="cart-items">
        {cartItems.map((item,key) => {
          return (
            <div className="cart-card" key={key}>
              <CartItem
                name={item.name}
                rating={item.rating}
                size={item.size}
                price={item.price}
              />

              <button
                className="btn btn-danger"
                onClick={() => {
                  setCartItems(cartItems.filter((i,id) => id !== key));
                  // alert("Removed from Cart!")
                }}
              >
                <i
                  style={{ marginRight: "5px" }}
                  class="fa-solid fa-cart-shopping"
                ></i>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
