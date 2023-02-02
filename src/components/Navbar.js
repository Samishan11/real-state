import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../context/Notificationcontext';
const Navbar = () => {
    const [book, setBook] = useContext(NotificationContext);
    console.log(book)
    var filterr;
    if (book?.length > 0) {
        const filter = book?.filter(data => {
            if (!data?.accept) {
                return filterr = data;
            }
        })
    }
    const logout = () => {
        localStorage.clear()
        window.location.href = "/";
    }
    
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light border bg-light">
                <div className='container col-10 mx-auto'>
                    <Link to={'/'} style={{ textDecoration: "none" }}>
                        <div className="logo d-flex">
                            <div className="title fs-5 mt-3">
                                <p className='fw-bold'>Real<span className='text-primary'>-Estate</span></p>
                            </div>
                        </div>
                    </Link>
                    <button className="fas fa-bars d-block d-md-none" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-5">
                            <Link className="nav-item nav-link" to="/">Home</Link>
                            <Link className="nav-item nav-link" to="/properties-category">All Listing</Link>
                            {
                                localStorage.getItem('token') &&
                                <Link className="nav-item nav-link" to="/list-property/category">List Property</Link>
                            }
                        </div>
                        <hr />
                        <div className="navbar-nav ms-auto">
                            <div className="">
                                {
                                    localStorage.getItem('token') ?
                                        <>
                                            <div className='d-flex'>

                                                <Link className='me-3' to={'/booking'} style={{ textDecoration: "none" }}>
                                                    <div className='d-flex'>
                                                        <i className='fas fa-bell rounded-circle bg-dark d-flex justify-content-center align-items-center text-light position-relative' style={{ width: '30px', height: "30px", fontSize: '.9rem', paddingTop: '5px' }}>
                                                            <small style={{ fontSize: '.6rem', width: '15px', height: '15px', top: '1px', right: '4px' }} className='text-light d-flex justify-content-center align-items-center bg-danger rounded-circle position-absolute'>{filterr?.length > 0 ? filterr?.length : '0'}</small>
                                                        </i>
                                                    </div>
                                                </Link>
                                                <Link className='' to={'/dashboard'} style={{ textDecoration: "none" }}>
                                                    <div className='d-flex'>
                                                        <i className='fas fa-user rounded-circle bg-dark d-flex justify-content-center align-items-center text-light' style={{ width: '30px', height: "30px" }}></i>
                                                    </div>
                                                </Link>
                                                <button onClick={logout} className='btn border ms-2 p-0 px-2 rounded'><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                                            </div>
                                        </> :
                                        <>
                                            <div className='d-flex'>
                                                <Link className='nav-link' to={"/login"}>Login</Link>
                                                <Link className='btn text-light button rounded mx-4' to={"/register"}>Sign Up</Link>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar