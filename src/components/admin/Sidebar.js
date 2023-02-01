import React from 'react'

const Sidebar = () => {
  return (
    <div className="col-md-4 m-0 p-0 position-absolute bg-primary" style={{width:"15em", height:'100vh' , left:0}}>
        <div className="nav_link text-align">
            <div className="links active  active_link mx-auto my-3 py-1">
                <span className='mx-4' style={{cursor:'pointer'}}>Dashboard</span>
            </div>
            <div className="links mx-auto active_link  my-3 py-1" >
                <span className='text-light  mx-4' style={{cursor:'pointer'}}>Add User</span>
            </div>
            <div className="links mx-auto active_link  my-3 py-1" >
                <span className='text-light  mx-4' style={{cursor:'pointer'}}>Manage User</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;