import React,{useContext} from 'react'
import HomeNav from '../components/HomeNav.js'
import Packers from '../components/Packers.js'
import Footer from '../components/Footer.js'
import './css/PackersAndMovers.css'
import {store} from '../App.js'

function PackersAndMovers() {

  const globalState = useContext(store);
  const [cartItems,setCartItems] = globalState;

  return (
    <div>
       <HomeNav/>
       <div style={{marginTop:"100px",display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
        <div>
          <h1 style={{"margin-top":"65px",fontFamily:"sans-serif"}}><b>Packers And Movers</b></h1>
          <div style={{"display":"flex",flexDirection: 'row',justifyContent:"flex-start"}}>
          <i class="fa fa-star" style={{marginTop:"5px",marginRight:"5px"}}  aria-hidden="true"></i>
          <p>4.5(800k)</p>
          </div>
         
        </div>
        <div>
        <iframe src='https://youtube.com/embed/9zjB-WJSoos'
        frameborder='0'
        style={{"width":"495px","height":"285px",borderRadius:"10px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
      />
        </div>
       </div>


       <hr style={{marginTop: '160px',width:"900px",height:"8px"}}></hr>



       <div style={{margin:"80px",display: 'flex',flexDirection:"row",justifyContent:"space-evenly"}}>
       
        <div className="packers-card" >
       <Packers name="House Moving" rating="4.5" size="800k" price="₹ 5000"/>
      
       <button className="btn btn-primary" onClick={()=>{
          setCartItems([...cartItems,{name:"House Moving",rating:"4.5",size:"800k",price:"₹ 5000"}])
        console.log(cartItems)
          alert("Added to Cart!")
       }}><i  style={{marginRight:"8px"}} class="fa-solid fa-cart-shopping"></i>

 Add to Cart</button>
        </div>
        
        <div className="packers-card" >
        
        <Packers name="Office Moving" rating="4.5" size="800k" price="₹ 6000"/>
        <button className="btn btn-primary" onClick={()=>{
          setCartItems([...cartItems,{name:"Office Moving",rating:"4.5",size:"800k",price:"₹ 6000"}])
          console.log(cartItems)
          alert("Added to Cart!")
        }} ><i style={{marginRight:"8px"}} class="fa-solid fa-cart-shopping"></i>

 Add to Cart</button>
        </div>
        <div  className="packers-card" >
        <Packers name="Shop Moving" rating="4.5" size="800k" price="₹ 7000"/>
        <button className="btn btn-primary" onClick={()=>{
          setCartItems([...cartItems,{name:"Shop Moving",rating:"4.5",size:"800k",price:"₹ 7000"}])
          console.log(cartItems)
          alert("Added to Cart!")
        }} ><i  style={{marginRight:"5px"}} class="fa-solid fa-cart-shopping"></i>

 Add to Cart</button>
        </div>
        </div>
     
     <Footer/>
    </div>
  )
}

export default PackersAndMovers
