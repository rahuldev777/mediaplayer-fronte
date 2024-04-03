import React, { useState } from 'react'
import Add from '../components.jsx/Add'
import { Link } from 'react-router-dom'
import View from '../components.jsx/View'
import Category from '../components.jsx/Category'


function Home() {
  const [uploadVideoResponse,setuploadVideoResponse]=useState({})
  const[dropvideoResponse,setdropvideoResponse]=useState([])
  return (
    <>
    <div className='container mt-4 mb-4 d-flex justify-content-between '>

      <div className='add-video'>
      <Add setuploadVideoResponse={setuploadVideoResponse}/>

      </div>
      <Link to={'/watchhistory'} style={{textDecoration:"none",color:'white'}}>Watch-History <i className="fa-solid fa-arrow-up-from-bracket fa-fade ms-3"></i></Link>

    </div>

    <div className='container-fluid w-100 mt-4 mb-4 row'>

<div className=' all-videos col-lg-9 '><br />
<h3 style={{color:"orange"}}>All Videos</h3>
      <View uploadVideoResponse={uploadVideoResponse} setdropvideoResponse={setdropvideoResponse}/>
</div>
      <div className='category col-lg-3'>

        <Category dropvideoResponse={dropvideoResponse}/>

      </div>

    </div>
    
    </>
  )
}

export default Home