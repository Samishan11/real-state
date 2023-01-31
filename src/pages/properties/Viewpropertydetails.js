import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './style.css';
import $ from 'jquery';
import { UserContext } from '../../context/userContext';
import { toast } from "react-toastify";
import BookingCard from './components/BookingCard';
import OwnersCard from './components/OwnersCard';
import { RoomBookProvider } from '../../context/BookRoomContext';
import MapView from './components/MapView';


const Viewpropertydetails = () => {
  const [property, setProperty] = useState()
  const propertyId = useParams().propertyId
  const [user] = useContext(UserContext)
  const [rating, setRating] = useState('1');
  const [review, setReview] = useState()

  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`/get-property-listing/${propertyId}`).then(function (res) {
      setProperty(res.data.result)
    })
  }, [])

  const starRate = (val) => {
    $('.fa-star').removeClass('text-warning')
    console.log(val)
    for (var i = 0; i <= val; i++) {
      $('.fa-star').eq(i).addClass('text-warning')
      setRating(val)
    }
  }
  const postReview = async () => {
    const res = await axios.post(`/post-review/${propertyId}`, { property: propertyId, rating: rating, comment: review })
    if (res.data.success) {
      toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT })
    }
  }

  const find_customer = () => {
    
  }

  return (
    <>
      <Navbar></Navbar>
      {
        property ?
          <div className="container mx-auto my-4 col-md-12 col-xl-9 mx-auto">
            <div className="row flex-reverse">
              <div className="col-md-8 right-section">
                <div className="p-1">
                  <div id="carouselExampleIndicators" className="carousel slide bg-dark" data-bs-ride="carousel" style={{ position: "relative" }}>
                    <div className="carousel-indicators d-flex m-0">
                      {
                        property?.images ?
                          property.images.map((val, ind) => {
                            return (
                              <img type="button"
                                src={`http://localhost:5000/${val}`} style={{ height: "8ch", width: "14ch", objectFit: "cover" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={ind} className={`${ind === 0 ? "active" : ""} mx-3`} aria-current="true" aria-label={`Slide ${ind}`} />
                            )
                          }) :
                          <>
                            <p>Loading...</p>
                          </>
                      }
                    </div>
                    <div className="carousel-inner">
                      {
                        property?.images ?
                          property.images.map((val, ind) => {
                            return (
                              <div key={ind} className={`carousel-item ${ind === 0 ? "active" : ""}`}>
                                <img key={ind + 1} src={`http://localhost:5000/${val}`} className="d-block w-100" alt="image" style={{ height: "50ch", objectFit: "cover" }} />
                              </div>
                            )
                          }) :
                          <>
                            <div className="d-block w-100 carousel-item" alt="image" style={{ height: "50ch" }}>
                              <p>Loading...</p>
                            </div>
                          </>
                      }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className="bg-light p-2">

                    <div className="px-3">
                      <div className="mb-5" id="overviewSection">
                        <p className="text text-secondary mb-0 fw-bold">
                          Overview
                        </p>
                        <hr className="mt-1" />
                        <div className="hostel-data mb-4">
                          <p className="text text-secondary mb-1 fw-bold">
                            {property?.title}
                          </p>
                          <div className="d-flex justify-content-start align-items-center mb-2">
                            <i className="text-secondary me-2">
                              <ion-icon name="location"></ion-icon>
                            </i>
                            <small className="d-block text-secondary">
                              {property?.address?.address}, {property?.address?.city} - {property?.address?.postal}
                            </small>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-2">
                            <i className="text-secondary me-2">
                              <ion-icon name="phone-portrait-outline"></ion-icon>
                            </i>
                            <small className="d-block text-secondary">
                              {property?.owner?.phone}
                            </small>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-2">
                            <i className="text-secondary me-2">
                              <ion-icon name="mail"></ion-icon>
                            </i>
                            <small className="d-block text-secondary">
                              {property?.owner?.email}
                            </small>
                          </div>
                        </div>
                        <div className="hostel-description mb-4">
                          <p className="text text-secondary mb-1 fw-bold">
                            Description
                          </p>
                          <p className="text text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur eligendi, illo quod minus animi modi
                            cum temporibus eveniet perspiciatis numquam optio ex
                            consequuntur
                          </p>
                        </div>
                      {
                        property?.category !== "land" &&
                        <>
                          <div className="hostel-features mb-4">
                          <p className="text text-secondary mb-1 fw-bold">
                            Features
                          </p>
                          <div className="d-flex flex-wrap justify-content-between align-items-center">
                            {
                              property?.features.map((val) => {
                                return (
                                  <div className="d-flex justify-content-start align-items-center mb-2">
                                    <ion-icon name="checkmark-circle-outline" style={{ color: "#12bf12" }}></ion-icon>
                                    <small className="d-block text-secondary ms-1">
                                      {val}
                                    </small>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>

                        <hr />
                        <div className="hostel-rules mb-5">
                          <p className="text text-secondary mb-0 fw-bold">
                            Property Rules
                          </p>
                          <div className="row my-3">
                            <div className="col-md-4">
                              <div className="px-1">
                                <div className="d-flex justify-content-start align-items-center mb-2">
                                  <i className=" text-secondary me-2">
                                    <ion-icon name="paw"></ion-icon>
                                  </i>
                                  <small className="d-block text-secondary">
                                    Pets Friendly
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="px-1">
                                <p className="text text-secondary">

                                  <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" defaultChecked={property?.rules?.pets_allowed ? true : false} disabled />
                                  </div>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="px-1">
                                <div className="d-flex justify-content-start align-items-center mb-2">
                                  <i className=" text-secondary me-2">
                                    <ion-icon name="accessibility"></ion-icon>
                                  </i>
                                  <small className="d-block text-secondary">
                                    Children
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="px-1">
                                <div class="form-check form-switch">
                                  <input class="form-check-input" type="checkbox" defaultChecked={property?.rules?.kids_allowed ? true : false} disabled />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </>
                      }
                      </div>
                      {/* {
                        property?.category === "hotel" || property?.category === "hostel" ?
                          <>
                            <hr className='mb-4' />
                            <RoomBookProvider><Rooms rooms={property?.rooms} property={property}></Rooms></RoomBookProvider>
                          </> :
                          <></>
                      } */}
                      <div className="mb-5" id="mapSection">
                        <p className="text text-secondary fw-bold mb-0">
                          Map
                        </p>
                        <hr className="mt-1" />
                        <div className=''>
                          <MapView position={{ lat: property?.lat, lng: property?.lng }}></MapView>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                {
                  localStorage.getItem("token") ?
                    user?._id !== property?.owner?._id ?
                      <RoomBookProvider><BookingCard property={property}></BookingCard></RoomBookProvider> :
                      <OwnersCard property={property}></OwnersCard>
                    :
                    <button onClick={() => navigate('/login')} type='button' className="btn btn-primary d-block w-100">
                      Booking
                    </button>
                }
              </div>
            </div>
          </div> :
          <>
            <p>Loading Data...</p>
          </>
      }
    </>
  )
}
export default Viewpropertydetails