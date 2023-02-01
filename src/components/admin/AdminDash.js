import React from "react";
import Sidebar from "./Sidebar";

const AdminDash = () => {
  return (
    <div className="container-fluid">
      <div className="container" style={{ height: "100vh" }}>
        <Sidebar></Sidebar>
        <div className="container mx-3">
          <div className="container col-md-10 mx-auto">
            <h4 className="fw-bold mx-2 pt-2">Dashboard Overview</h4>
            <div className="row mx-2">
              <div
                className="flex-column me-1 col-md-3 p-0 my-3 px-2 d-flex justify-content-center align-items-center"
                style={{
                  width: "32%",
                  background: "#e8f2ff",
                  height: "30vh",
                }}
              >
                <div
                  className="circle bg-light d-flex justify-content-center align-items-center rounded-circle"
                  style={{ height: "80px", width: "80px" }}
                >
                  <i class="fa-solid h2 fa-landmark"></i>
                </div>
                <small className="fw-bold mt-2">Land</small>
                <small className="mt-2">55</small>
              </div>
              <div
                className="flex-column me-1 col-md-3  p-0 my-3 px-2 d-flex justify-content-center align-items-center"
                style={{
                  width: "32%",
                  background: "#e8f2ff",
                  height: "30vh",
                }}
              >
                <div
                  className="circle bg-light d-flex justify-content-center align-items-center rounded-circle"
                  style={{ height: "80px", width: "80px" }}
                >
                  <i class="fa-solid h2 fa-building"></i>
                </div>
                <small className="fw-bold mt-2">Appartment</small>
                <small className="mt-2">{55}</small>
              </div>
              <div
                className="flex-column me-1 col-md-3  p-0 my-3 px-2 d-flex justify-content-center align-items-center"
                style={{
                  width: "32%",
                  background: "#e8f2ff",
                  height: "30vh",
                }}
              >
                <div
                  className="circle bg-light d-flex justify-content-center align-items-center rounded-circle"
                  style={{ height: "80px", width: "80px" }}
                >
                  <i class="fa-solid h2 fa-building"></i>
                </div>
                <small className="fw-bold mt-2">Building</small>
                <small className="mt-2">{55}</small>
              </div>
            </div>
            {/*  */}
            <div className="mt-5 mx-2">
              <h6 className="m-0">RECENT USERS</h6>
              {/* {
                      getJob.map((val, ind) => {
                        return ( */}
              <div
                // key={ind}
                className="border rounded shadow-sm row align-items-center my-2 mx-0 py-2 job-row"
              >
                <div className="col-3 d-flex align-items-center">
                  <div className="no-img-avatar-sm">ST</div>
                  <div className="mx-2">
                    {/* <p className="m-0 text-s">dsfdsaf</p>
                    <p className="m-0 text-xs">21</p> */}
                  </div>
                </div>
                <div className="col">
                  <p className="m-0 badge badge-muted-primary fw-light">12</p>
                </div>
                <div className="col">
                  <p className="m-0 text-s">Applicants: 21</p>
                </div>
                <div className="col">
                  <p className="m-0 text-xs">Posted</p>
                  <p className="m-0 text-sm">1212</p>
                </div>
                <div className="col">
                  <p className="m-0 badge badge-muted-warning fw-light">
                    112 Days To Expire
                  </p>
                </div>
              </div>
            </div>
            {/* );
                      })
                    } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
