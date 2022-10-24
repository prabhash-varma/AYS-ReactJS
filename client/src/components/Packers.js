import React from 'react'

function Packers(props) {
  return (
    <div style={{width:"300px",height:"250px",display: 'flex', flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h2>{props.name}</h2>
        <p><i class="fa fa-star" style={{marginTop:"5px",marginRight:"5px"}}  aria-hidden="true"></i>{props.rating}({props.size})</p>
        <p style={{marginTop:"20px",fontSize:"30px"}} aria-hidden="true">{props.price}</p>
        
      
    </div>
  )
}

export default Packers
