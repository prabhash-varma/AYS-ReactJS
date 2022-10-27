import React from "react";
import "./css/Profile.css";

function ProfileComp() {
  return (
    <div style={{ paddingTop: "3em" }}>
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body" style={{height:"130%"}}>
                <div className="account-settings">
                  <div id= "user-profile" className="user-profile">
                    <div id="user-avatar" className="user-avatar">
                      <img id="avatar-img"
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                     
                      />
                    </div>
                    <h5 id="user-name" className="user-name">Yuki Hayashi</h5>
                    <h6 id="user-email" className="user-email">yuki@Maxwell.com</h6>
                  </div>
                  <div id="about" className="about">
                    <h5 id="h5">About</h5>
                    <p id="p">
                      I'm Yuki. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">First Name</label>
                      <input
                        type="text" 
                        className="form-control" style={{marginBottom:"1em"}}
                        id="fullName"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Last Name</label>
                      <input
                        type="url"
                        className="form-control" style={{marginBottom:"1em"}}
                        id="website"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">Email</label>
                      <input
                        type="email"
                        className="form-control" style={{marginBottom:"1em"}}
                        id="eMail"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control" style={{marginBottom:"1em"}}
                        id="phone"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">Address</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="Street">Street</label>
                      <input
                        type="name"
                        className="form-control" style={{marginBottom:"1em"}}
                        id="Street"
                        placeholder="Street"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="ciTy">City</label>
                      <input
                        type="name"
                        className="form-control"
                        id="ciTy"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="sTate">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sTate"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="zIp">Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zIp"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right " style={{marginTop: "30px"}}>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary " style={{margin: "10px"}}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary" style={{margin: "10px"}}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComp;
