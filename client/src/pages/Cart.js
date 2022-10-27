import React, { useState, useContext } from "react";
import HomeNav from "../components/HomeNav.js";
import { store } from "../App.js";
import CartItem from "../components/CartItem.js";
import "./css/Cart.css";
import {useNavigate} from 'react-router-dom'


function Cart() {

  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");
  const [address1Msg, setAddress1Msg] = useState("");
  
  const globalState = useContext(store);
  const [cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist] = globalState;




  const [orderItems,setOrderItems] =useState({add_name:"",add_email:"",add_phone:"",add_address1:"",add_address2:"",add_state:"",add_pincode:"",add_date:"",add_orderItems:[]});
 
  const navigate = useNavigate();
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setOrderItems({ ...orderItems, [name]: value });

    var date=new Date();  
    var day=date.getDate();  
    var month=date.getMonth()+1;  
    var year=date.getFullYear();  
    var today=day+"-"+month+"-"+year;
      
    var h=date.getHours();  
    var m=date.getMinutes();  
    //var s=date.getSeconds();  
    var time=h+":"+m;
    var dateTime=today+" "+time;
    setOrderItems(previtem=>{
      return {...previtem,add_date:dateTime,add_orderItems:cartItems}
      })
  };

  const submitHandlerCart=(e)=>{
    e.preventDefault();
  
    if(cartItems.length <= 0){
      alert("Please add items to cart")
    }
    else if(orderItems.add_name===""){
      //alert("Please enter your name");
      setNameMsg("Enter your name!");
    }
    else if(orderItems.add_email==="" || !orderItems.add_email.includes("@")){
     // alert("Please enter valid email");
      setEmailMsg("Enter valid email!");
    }
    else if(orderItems.add_phone==="" || !orderItems.add_phone.match(/^[0-9]{10}$/)){
      //alert("Please enter your phone number");
      setPhoneMsg("Enter valid phone number!");
    }
    else if(orderItems.add_address1===""){
      //alert("Please enter your address");
      setAddress1Msg("Enter your address!");
    }
    else if(orderItems.add_state===""){
     // alert("Please enter your state");
      setStateMsg("Enter your state!");
    }
    else if(orderItems.add_pincode==="" || !orderItems.add_pincode.match(/^[0-9]{6}$/)){
      //alert("Please enter your pincode");
      setPincodeMsg("Enter valid pincode!");
    }
    else{
    
      //setOrderItems({...orderItems,});

      setOrderslist([...orderslist,orderItems]);
      setCartItems([]);

      console.log(orderItems);
      alert("Ordered Successfully");
      navigate("/ays/orders")
    }
  }




  return (
    <div>
      <HomeNav />
      <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fa-solid fa-cart-shopping"
          ></i>
          Cart Items
        </h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>


    {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h1>Cart is empty</h1>
        </div>
        ) : (
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

)}


    <div>
     
      <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fas fa-shipping-fast"
          ></i>
          Enter Shipping Address
        </h1>
      </div>

      <hr style={{ width: "900px", height: "2px" }}></hr>
      
      <div className="cart-form">
        <div>

      
      <form onSubmit={submitHandlerCart}>
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Name</b>
                  </label>
                  <input
                    type="text"
                    name="add_name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="john"
                    // value={user.firstName}
                    onChange={(e)=>{
                      setNameMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{ nameMsg }</p>
                </div>
                
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    name="add_email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="john@gmail.com"
                    // value={user.email}
                    onChange={(e)=>{
                      setEmailMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{emailMsg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Phone</b>
                  </label>
                  <input
                    type="text"
                    name="add_phone"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="99******99"
                    // value={user.phone}
                    onChange={(e)=>{
                      setPhoneMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{phoneMsg}</p>
                </div>
              </div>






              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Address Line 1</b>
                  </label>
                  <input
                    type="text"
                    style={{height:"70px"}}
                    name="add_address1"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                    // value={user.email}
                    onChange={(e)=>{
                      setAddress1Msg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{address1Msg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Address Line 2</b>
                  </label>
                  <input
                    type="text"
                    style={{height:"70px"}}
                    name="add_address2"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                    // value={user.phone}
                    onChange={(e)=>{
                      setPhoneMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{}</p>
                </div>
              </div>




             

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>State</b>
                  </label>
                  <input
                    type="text"
                    name="add_state"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Andhra Pradesh"
                    // value={user.state}
                    onChange={(e)=>{
                      setStateMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{stateMsg}</p>
                </div>


                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Pincode</b>
                  </label>
                  <input
                    type="text"
                    name="add_pincode"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="500001"
                    // value={user.pincode}
                    onChange={(e)=>{
                      setPincodeMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{pincodeMsg}</p>
                </div>



                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Payment Mode</b>
                  </label>
                  <input
                    type="text"
                    name="payment"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    disable={true}
                    value={"Cash On Delivery"}
                    onChange={(e)=>{
                      // setPincodeMsg("");
                      // handleInputs(e)
                    }}
                  />
                 
                </div>
              </div>



              <button type="submit" class="btn btn-primary">
                Order Items
              </button>
            </div>
          </form>
          
          </div>
      </div>
    </div>
    </div>
  );
}

export default Cart;
