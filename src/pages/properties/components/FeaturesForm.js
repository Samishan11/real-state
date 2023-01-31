import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ListingContext } from '../../../context/listingContext';
import "../style.css";
import $ from "jquery"
import axios from 'axios';

const FeaturesForm = () => {
    const data = useLocation()?.state?.data
    console.log(data)

    const navigate = useNavigate()

    const [listingData, setListingData] = useContext(ListingContext)
    const [features, setFeatures] = useState(listingData?.features ? listingData.features : [])
    // const [postal, setPostal] = useState(listingData?.postal)


    const storeData = () => {
        listingData.features = features
        // listingData.postal = postal
        setListingData(listingData)
        console.log(listingData)
        navigate("/list-property/rules")
    }

    const back = () => {
        listingData.features = features
        // listingData.postal = postal
        setListingData(listingData)
        navigate("/list-property/address")
    }

    const addItem = (id, value) => {
        const check = $(`#${id}`).is(":checked")
        if (check) {
            console.log("checked")
            setFeatures((list) => [...list, value])

        } else {
            console.log("unchecked")
            var index = features.indexOf(value)
            features.splice(index, 1)
            setFeatures(features)
        }
    }

    return (
        <>
            <div className='container mx-auto my-4 col-9 mx-auto'>
                <div className='d-flex step-map'>
                    <div className='rounded-circle indicator indicator-done d-flex align-items-center justify-content-center text-center'>
                        <small className='text-light text-xs'><ion-icon name="checkmark-outline" style={{ "color": "#fff", fontSize: "1.2em" }}></ion-icon></small>
                    </div>
                    <div className='divider my-auto mx-2'></div>
                    <div className='rounded-circle indicator indicator-done d-flex align-items-center justify-content-center text-center'>
                        <small className='text-light text-xs'><ion-icon name="checkmark-outline" style={{ "color": "#fff", fontSize: "1.2em" }}></ion-icon></small>
                    </div>
                    <div className='divider my-auto mx-2'></div>
                    <div className='rounded-circle indicator d-flex align-items-center justify-content-center text-center'>
                        <small className='text-light text-xs'>3</small>
                    </div>
                    <div className='divider my-auto mx-2'></div>
                    <div className='rounded-circle indicator indicator-undone d-flex align-items-center justify-content-center text-center'>
                        <small className='text-light text-xs'>4</small>
                    </div>
                    <div className='divider my-auto mx-2'></div>
                    <div className='rounded-circle indicator indicator-undone d-flex align-items-center justify-content-center text-center'>
                        <small className='text-light text-xs'>5</small>
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-md-5'>
                        <div className=''>
                            <form action="">
                                <div className='box border rounded px-3 py-4'>
                                    <p className='text-md fw-bold'>What features does your property have?</p>
                                    {
                                        <div className='form-group my-3'>
                                            <label htmlFor="" className='my-2'>General Features</label>
                                            <div>
                                                <div className="form-check form-check-inline">


                                                    <input
                                                        className="form-check-input"
                                                        defaultChecked={features?.indexOf('Internet') === -1 ? false : true}
                                                        id="internet"
                                                        type="checkbox"
                                                        onChange={addItem.bind(this, "internet", "Internet")}
                                                    />

                                                    <label
                                                        className="form-check-label text-sm"
                                                        htmlFor="internet"
                                                    >
                                                        Internet
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultChecked={features?.indexOf('TV') === -1 ? false : true}
                                                        id="tv"
                                                        onChange={addItem.bind(this, "tv", "TV")}
                                                    />
                                                    <label
                                                        className="form-check-label text-sm"
                                                        htmlFor="tv"
                                                    >
                                                        TV
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultChecked={features?.indexOf('Breakfast') === -1 ? false : true}
                                                        id="breakfast"
                                                        onChange={addItem.bind(this, 'breakfast', "Breakfast")}
                                                    />
                                                    <label
                                                        className="form-check-label text-sm"
                                                        htmlFor="breakfast"
                                                    >
                                                        Breakfast
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultChecked={features?.indexOf('Parking') === -1 ? false : true}
                                                        id="parking"
                                                        onChange={addItem.bind(this, 'parking', "Parking")}
                                                    />
                                                    <label
                                                        className="form-check-label text-sm"
                                                        htmlFor="parking"
                                                    >
                                                        Parking
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className='d-flex my-2'>
                                    <button onClick={back} className='btn btn-outline-primary rounded' type='button'>Back</button>
                                    <button onClick={storeData} type="button" className='btn btn-primary d-block rounded ms-2'>Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-6'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesForm