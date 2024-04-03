import React, { useEffect, useState } from 'react'
import Videocard from '../components.jsx/Videocard'
import { Col, Row } from 'react-bootstrap'

import{getAllCategoryAPI, getAlluploadVideoAPI, updtaeCategoryAPI} from '../../services/allAPI'
import Category from './Category'

function View({uploadVideoResponse,setdropvideoResponse}) {

  const[deleteVideoResponse,setdeleVideoResponse]=useState(false)

  const [allVideos,setAllvideos]=useState([]);

  useEffect(()=>{ 
    setdeleVideoResponse(false)
    getAllUploadedVideos()
  },[uploadVideoResponse,deleteVideoResponse])


  const getAllUploadedVideos = async ()=>{

    const result=await getAlluploadVideoAPI()
    if(result.status===200){

      setAllvideos(result.data)
     
    }else{
      console.log("false Api request");
      setAllvideos([])
    }
  }

  const dragOver=(e)=>{
    e.preventDefault()
  }

  const videoDropped = async (e)=>{
    const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    //console.log(videoId,"category id",categoryId);
   const {data} =await getAllCategoryAPI();
   const selectedCategory=data.find(item=>item.id==categoryId)
   console.log(selectedCategory)
   
   let result=selectedCategory.allVideos.filter(video=>video.id!==videoId)//why this?
   const {id,categoryName} = selectedCategory;
   let newCategory= {id,categoryName,allVideos:result}
   
   const res=await updtaeCategoryAPI(categoryId,newCategory)
  setdropvideoResponse(res)
  }
  return (
    <>
    <Row draggable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
            <Col sm={12} md={4} lg={3} className='me-4 '>
        <Videocard video={video} setdeleVideoResponse={setdeleVideoResponse}/>  
      </Col>
        )):<p className='text-danger fw-bolder'>nothing to display</p>
      }
    
     
    </Row>
    
    </>
  )
}

export default View