import React,{ useState, useContext} from 'react'
import HomeNav from '../components/HomeNav.js'

import {useParams} from 'react-router-dom'
import {store} from '../App.js'
import './css/OrdersDetails.css'

function OrderDetails() {
  
  const [cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist]  = useContext(store);
  let {orderid} = useParams();


  return (
    <div>
       <HomeNav/>
       <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fas fa-edit"
          ></i>
          Orders Details 
        </h1>
      </div>

      <hr style={{ width: "900px", height: "2px" }}></hr>

              {orderslist.map((item,key)=>{

                console.log(key)
                return(
              <div className='orderdetails'>
                  { (key==orderid )&&(  
                  <div >
                      <div className='image'>
                      <img style={{width:"300px",float:"right",marginRight:"200px",boxShadow: '6px  7px 9px #F4AAB9'}} src={item.img}/>
                      </div>
                      <div className='data'>
                         <p> Your ordered item is {item.name}</p>
                      
                         <p>{item.add_date}</p>
                         <p>Registered email is {item.add_email}</p>
                         <h1>Address:</h1>
                         <p>{item.add_address1},{item.add_address2}
                         {item.add_pincode} ,{item.add_state}</p>
                         </div>
                  </div>)
              }
              </div>
                )
            
              })}
    </div>
  )
}

export default OrderDetails
