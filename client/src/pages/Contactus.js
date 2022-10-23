import React from 'react'
import HomeNav from '../components/HomeNav.js'
import './css/Contactus.css'


function Contactus() {
  return (
    <div>
       <HomeNav/>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',"margin-top":"70px"}}>
         
      <div style={{width: '700px',display: 'flex',flexDirection: 'column'}} className="contact-info">

        <div style={{"margin-bottom":"20px"}}>
          <h1>Contact Us</h1>
        </div>

        <div style={{"margin-bottom":"20px"}}>
          <p style={{"font-size":"18px"}}>AYS has proudly served clients seeking I.R.C § 1031 counsel as Qualified Intermediaries with precision and excellence for over 18 years. We often personally meet with clients, and speak at educational events on “Tax Deferred Exchanges.”</p>
        </div>
        

        <div style={{display: 'flex',flexDirection: 'row', justifyContent:"center",margin:"15px"}}>
          <h4 style={{"margin-right":"10px"}}><b>Email:</b></h4>
          <h4>info@ays.com</h4>
        </div>

        <div style={{display: 'flex',flexDirection: 'row', justifyContent:"center",margin:"15px"}}>
          <h4 style={{"margin-right":"10px"}}><b>Phone:</b></h4>
          <h4>1-8000-227-301</h4>
        </div>

        <div style={{display: 'flex',flexDirection: 'row', justifyContent:"center",margin:"15px"}}>
          <h4 style={{"margin-right":"10px"}}><b>FAX:</b></h4>
          <h4>1-8000-227-301</h4>
        </div>

        
        <div  style={{display: 'flex',flexDirection: 'row', justifyContent:"center",margin:"15px"}}>
          <h4 style={{"margin-right":"10px"}}><b>Address:</b></h4>
          <h4>1234, 56th Street, New York, NY 12345</h4>
        </div>


      </div>


      <div style={{width: '500px',border:"1px solid black","border-radius": "15px"}} className="contact-form">
        <h2 style={{margin:"15px"}}>Send Us a Message</h2>
        <form>
          <div className="container">

          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
             
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
             
            </div>
            
            
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Message
              </label>
              <textarea id="exampleInputEmail1" class="form-control" rows="5" cols="80"></textarea>
             
            </div>
            
            <button
              type="submit"
              class="btn btn-primary"
              
            >
              Send
            </button>
          </div>
        </form>


      </div>
       </div>
      
    </div>
  )
}

export default Contactus
