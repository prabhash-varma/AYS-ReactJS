import React,{ useState, useContext} from 'react'
import HomeNav from '../components/HomeNav.js'
import {store} from '../App.js'
import './css/Orders.css'


function Orders() {

    const gb = useContext(store);
    const [cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist] =gb

  return (
    <div>
       <HomeNav/>
       <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fa-solid fa-cart-shopping"
          ></i>
          Orders
        </h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>
        <div style={{display: "flex",flexDirection: "row",justifyContent:"center",alignItems: "center"}}>
            
            {orderslist.length > 0 ? (
            <div className="orders-card" >
              {orderslist.map((item)=>{
  
                return(
                item.add_orderItems.map((it)=>{
                  return(
  
                    <div className="order-item-card">
  
                      <h3>{it.name}</h3>
                      <h3>{item.add_name}</h3>
                      <h3>{item.add_email}</h3>
                    </div>
                  )
                })
                )
                //return(
                  // <div className="order-item" style={{ display: "flex",flexDirection: "row" }}>
                  //   <div style={{ display: "flex",flexDirection: "column" }}>
                  //   <h1>{item.add_date}</h1>
                  //   <h1>{item.add_email}</h1>
                  //   <h1>{item.add_phone}</h1>
                  //   </div>
                    
                  //   <div style={{ display: "flex",flexDirection: "column" }}>
                  //   <i  style={{ fontSize:"35px",marginRight:"30px"}} class="fa-solid fa-chevron-right"></i>
                  //   </div>
                    
                  // </div>

                //)
              })}
            </div>
            ) : (
              <h1 style={{marginTop: "100px"}}>No Orders Placed</h1>
            )}
        </div>
    </div>
  )
}

export default Orders
