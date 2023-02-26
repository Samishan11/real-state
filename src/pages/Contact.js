import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container p-2">
        <div className="row border my-3 py-4">
          <h5 className="fw-bold mb-4 text-center position-relative">
            Contact Us
          </h5>
          <hr
            className="bg-danger"
            style={{
              width: "140px",
              height: "1.5px",
              position: "absolute",
              top: "22%",
              left: "45.5%",
            }}
          />
          <div className="col-md-8 mx-auto">
            <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="">Username</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" />
            </div>
            </div>
            <div className="form-group col-md-12 my-2">
              <label htmlFor="">Message</label>
              <textarea type="description" className="form-control" />
            </div>
            <div className="col-md-12 d-flex justify-content-end mt-4">
              <button className="btn btn-outline-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
