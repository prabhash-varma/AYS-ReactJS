import React, { useContext, useState,useEffect  } from "react";
import Axios from "axios";
import {store} from "./App";
import { useNavigate} from "react-router-dom";

function Work()
{
 const [empdetails] = useContext(store);
 const [ orderitems,setOrderItems] = useState("")
 const [amount,setamount] = useState("")
 const navigate = useNavigate();

  const getorderdetails = async() => {
    const res =await Axios.get(`http://localhost:3001/orders?eemail=${empdetails.email}`);
    setOrderItems(res.data[0]);
    };

  useEffect(() => {
    if (empdetails.length === 0) {
      navigate("/");
    }
    getorderdetails();
  }, [empdetails,orderitems.length]);

  const submithandler = async (e)=>{
    e.preventDefault();
    const res = await Axios.patch(`http://localhost:3001/orders/${orderitems.id}`,{cost:amount,status:1})
    const res1 = await Axios.patch(`http://localhost:3001/employees/${orderitems.eid}`,{free:0})
    navigate("/Employee_home") 
  }
return(
    <div>
<h1>Orders Requested</h1>             
   <p>
   <h3>empdetails:{empdetails.email}</h3>
    <h3>empdetails:{empdetails.password}</h3>
    <h2>Customer details :- </h2>
     <h3>Name: {orderitems.ufname}</h3> 
      <h3>email :{orderitems.ord_email}</h3>
      <h3> city:{orderitems.ord_address1}</h3>
    <h3> State:{orderitems.ord_state}</h3>              
    <h3> Residential address:{orderitems.ord_address2}</h3>
    <h3>Contact number:{orderitems.ord_phone}</h3>    
    </p>   
  {orderitems.status===0 ?(<form onSubmit ={submithandler}>
    <h4>Cost:<input type="number" placeholder="enter the amount" onChange={(e)=>{setamount(e.target.value)}}/></h4>
     <br/>
     <h3>
       <input type="radio"/>work Completed
        </h3>
       <button type="submit" class="btn btn-outline-success">Post</button>        
       </form>)   :(
        <h4>
        <div>Cost : {orderitems.cost}</div>
        <div>Satus:Completed</div>
        </h4>
       )}               
 </div>
    )
}
export default Work;