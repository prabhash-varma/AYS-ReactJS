import React from 'react'
// import S11 from "../pages/Images/S11.jpg"

function Salon(props) {
  return (
    <div>
    {/* <div style={{width:"300px",height:"250px",display: 'flex', flexDirection:"column",alignItems:"center",justifyContent:"center"}}> */}
        <img src={props.image} />
        <h2 style={{justifyContent:"center"}}>{props.name}</h2>
        <p><i class="fa fa-star" style={{marginTop:"5px",marginRight:"5px"}}  aria-hidden="true"></i>{props.rating}</p>
        <p style={{marginTop:"20px",fontSize:"30px"}} aria-hidden="true"></p>
    </div>
   
  )
}

export default Salon