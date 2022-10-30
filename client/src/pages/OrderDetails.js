import React,{ useState, useContext} from 'react'
import HomeNav from '../components/HomeNav.js'

import {useParams,useNavigate} from 'react-router-dom'
import {store} from '../App.js'
import './css/OrdersDetails.css'


function OrderDetails() {

  const navigate = useNavigate();
  
  const [cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist]  = useContext(store);
  let {orderid} = useParams();


  return (
    <div>
       <HomeNav/>
       <div style={{marginTop: '80px'}}></div>
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
      <div style={{marginTop:"40px"}}>
              {orderslist.map((item,key)=>{

                console.log(key)
                return(
              <div className='orderdetails'>
                  { (key==orderid )&&(  
                  <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly"}}>
                     <div style={{display: "flex", flexDirection: "column","justify-content":"center",alignItems: "flex-start"}}>
                        <h4>Ordered Service : {item.name}</h4>
                        
                        <h4>Email: {item.add_email}</h4>
                        <h4>Phone: {item.add_phone}</h4>

                        
                        <h2 style={{marginTop:"20px"}}>Address:</h2>
                        <h5>{item.add_address1}</h5>
                        
                        <h5>{item.add_address2}</h5>
                        
                       
                        <h5>{item.add_state}</h5>
                        
                        <h5>{item.add_pincode}</h5>
                     
                        <div style={{display:"flex",justifyContent:"space-evenly"}}>
                          <div style={{marginRight:"20px"}}>
                            <button type="button" class="btn btn-success" onClick={()=>{
                              navigate('/ays/contactus')
                            }} style={{marginTop:"20px"}}>Need Help?</button>
                          </div>
                          <div >
                            <button type="button" class="btn btn-danger" style={{marginTop:"20px"}}>Cancel Order</button>
                          </div>

                        </div>

                     </div>

                     <div className="orders-details" style={{display: 'flex',flexDirection:"column",justifyContent: 'center',alignItems: 'center'}}>
                        <img style={{width:"300px",height:"200px",marginBottom:"10px"}} src={item.img}/>
                        <h3>{item.price}</h3>

                     </div>
                  </div>)
              }
              </div>
                )
            
              })}
      </div>
    </div>
  )
}

export default OrderDetails
