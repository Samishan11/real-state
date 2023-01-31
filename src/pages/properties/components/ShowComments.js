import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import $ from 'jquery'
import { UserContext } from '../../../context/userContext'
import { toast } from 'react-toastify'
const ShowComments = (props) => {
    const [comments, setComments] = useState()
    const [reportTitle, setReportTitle] = useState()
    const [report, setReport] = useState()
    const [user] = useContext(UserContext)
    useEffect(() => {
        axios.get('/show-comments/' + props.propertyId.toString()).then(function (res) {
            console.log(res.data)
            setComments(res.data)
        })
    }, [])
    
    const likeComment = async (comment) => {
        $(`#likeInp${comment}`).click()
        const checked = $(`#likeInp${comment}`).is(":checked")
        const res = await axios.put('/like-comment', { comment, liked: checked })
        if (checked) {
            $(`#heart${comment}`).addClass('text-primary')
            $(`#like${comment}`).html(res.data.likes)
        } else {
            $(`#heart${comment}`).removeClass('text-primary')
            $(`#like${comment}`).html(res.data.likes)
        }
    }
    const reportComment = async(comment)=>{
        const res = await axios.post('/report', {comment: comment, subject: reportTitle, report: report})
        if(res.data.success){
            toast.success(res.data.message, {position: toast.POSITION.TOP_RIGHT})
        }
    }
    return (
        <div>
            {
                comments ?
                    <>
                        {
                            comments.length > 0 ?
                                <>
                                    {
                                        comments.map((val, ind) => {
                                            return (
                                                <div key={val} className='d-flex flex-wrap my-3 rounded px-2 py-2' style={{ background: "#e9e9e9" }}>
                                                    <div>
                                                        <img className='rounded-circle' src={`http://localhost:5000/${val.user.image}`} style={{ height: "4ch", width: "4ch", objectFit: "cover" }} alt="" />
                                                    </div>
                                                    <div className='mx-2'>
                                                        <div>
                                                            {
                                                                val.rating === 1 ?
                                                                    <>
                                                                        <i className='fa-solid fa-star text-primary'></i>
                                                                    </> :
                                                                    val.rating === 2 ?
                                                                        <>
                                                                            <i className='fa-solid fa-star text-primary'></i>
                                                                            <i className='fa-solid fa-star text-primary'></i>
                                                                        </> :
                                                                        val.rating === 3 ?
                                                                            <>
                                                                                <i className='fa-solid fa-star text-primary'></i>
                                                                                <i className='fa-solid fa-star text-primary'></i>
                                                                                <i className='fa-solid fa-star text-primary'></i>
                                                                            </> :
                                                                            val.rating === 4 ?
                                                                                <>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                </> :
                                                                                <>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                    <i className='fa-solid fa-star text-primary'></i>
                                                                                </>
                                                            }
                                                        </div>
                                                        <small className='text-xs fw-bold'>{val.user.firstName} {val.user.lastName}</small>
                                                        <small className='text-xs mx-1 text-muted'>{val.date}</small>
                                                        <p>{val.comment}</p>
                                                        <div className='d-flex'>
                                                            {
                                                                val.likedBy.indexOf(user?._id) !== -1 ?
                                                                    <>
                                                                        < div >
                                                                            <input id={`likeInp${val._id}`} defaultChecked={true} type="checkbox" hidden />
                                                                        </div>
                                                                        <button onClick={likeComment.bind(this, val._id, val.likes)} style={{ outline: "none", border: "none" }} className='rounded bg-light '><small id={`like${val._id}`} className='text-sm'>{val.likes}</small><i id={`heart${val._id}`} className={`fa-solid fa-heart mx-1 text-sm text-primary`} style={{ color: "#afafaf" }}></i></button>
                                                                    </> :
                                                                    <>
                                                                        < div >
                                                                            <input id={`likeInp${val._id}`} defaultChecked={false} type="checkbox" hidden />
                                                                        </div>
                                                                        <button onClick={likeComment.bind(this, val._id, val.likes)} style={{ outline: "none", border: "none" }} className='rounded bg-light '><small id={`like${val._id}`} className='text-sm'>{val.likes}</small><i id={`heart${val._id}`} className={`fa-solid fa-heart mx-1 text-sm`} style={{ color: "#afafaf" }}></i></button>
                                                                    </>
                                                            }
                                                            <button data-bs-toggle="modal" data-bs-target={`#reportModal${val._id}`} style={{ outline: "none", border: "none" }} className='rounded ms-3'><i className='fa-solid fa-flag mx-1 text-sm' style={{ color: "#afafaf" }}></i><small className='text-sm'>Report</small></button>
                                                            <div className="modal fade" id={`reportModal${val._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div className="modal-dialog modal-dialog-centered">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <p className='m-0'><span><i className='fa-solid fa-info-circle me-1'></i></span>Report</p>                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div class="modal-body">
                                                                            <div>
                                                                                <div className='py-2 px-2' style={{ background: "#f1f1f1", borderLeft: "3px solid #707070" }}>
                                                                                    <small className='text-xs fw-bold'>{val.user.firstName} {val.user.lastName}</small>
                                                                                    <small className='text-xs ms-1'>{new Date(val.date).toDateString()}</small>
                                                                                    <p className='text-sm m-0'>{val.comment}</p>
                                                                                </div>
                                                                                <div className='my-2'>
                                                                                    <label htmlFor="" className='text-sm'>Subject</label>
                                                                                    <input onChange={(e)=>setReportTitle(e.target.value)} className='form-control text-sm' type="text" />
                                                                                </div>
                                                                                <div className='my-2'>
                                                                                    <label htmlFor="" className='text-sm'>Description</label>
                                                                                    <textarea onChange={(e)=>setReport(e.target.value)} className='form-control text-sm' name="" id="" cols="30" rows="6"></textarea>
                                                                                    <small className='text-xs'>Be specific with your reason to report this content.</small>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button onClick={reportComment.bind(this, val._id)} type="button" className="btn btn-sm btn-info text-light">Report</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </> :
                                <p>No Reviews Yet</p>
                        }
                    </> :
                    <p>Loading...</p>
            }
        </div >
    )
}
export default ShowComments;