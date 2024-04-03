import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getAllCategoryAPI, updtaeCategoryAPI } from '../../services/allAPI';
import Videocard from './Videocard';


function Category({dropvideoResponse}) {

  const [categoryName,setcategoryName]=useState('');

  const [Allcategoryes,setAllcategoryes]=useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd= async()=>{
    if(categoryName){
      const result=await addCategoryAPI({categoryName,allvideos:[]})
      if(result.status>200 && result.status<300){
        handleClose()
        setcategoryName('')
        getCategorys()
      }else{
      alert(result.message)
    }
  }else{
    alert('please fill all the fields')
  }

  }
  useEffect(()=>{
    getCategorys()
  },[dropvideoResponse])

  const getCategorys= async()=>{

    const{data}=await getAllCategoryAPI()
    setAllcategoryes(data)
  }

  const videoDrop= async(e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
    //console.log("video Id"+videoId,"dropped inside the category"+categoryId);
    const {data}=await getAVideoAPI(videoId)
    //console.log(data);
    const selectCatgory= Allcategoryes.find(item=>item.id===categoryId)  
    console.log(selectCatgory);
     selectCatgory.allVideos.push(data)

 
    await updtaeCategoryAPI(categoryId,selectCatgory)
    getCategorys()//why this  call?
  }
 // console.log(Allcategoryes)
  const dragOver=(e)=>{
    console.log('vidoe card dragged over the category');
    e.preventDefault()
  }

  const videoDragstarted=(e,videoId,categoryId)=>{
    let datashare={videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(datashare))
    // console.log(datashare)
  }
  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategorys()
  }


  return (
    <>
    <div className='d-grid'>
      <button className='btn btn-info' onClick={handleShow}>Add Category</button>
    </div>
{
  Allcategoryes?.length>0?Allcategoryes.map(data=>(
     <div className='border rounded p-3' draggable="true" onDragOver={e=>dragOver(e)}  onDrop={e=>videoDrop(e,data?.id)}>
      
  <div className='d-flex justify-content-between align-items-center'>
    <h6>{data?.categoryName}</h6>
    <button className='btn' onClick={()=>removeCategory(data?.id)}><i className='fa-solid fa-trash text-danger'></i>

    </button>

  </div>
<Row>
  {
    data?.allVideos?.length>0?data?.allVideos.map(card=>(
      <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragstarted(e,card.id,data.id)}>
        <Videocard video={card} insidecard={true}/>
      </Col>
    )):null
  }
</Row>
</div>
  )):<p>no data to display here</p>
 
}


     <Modal
     show={show}
     onHide={handleClose}
     backdrop="static"
     keyboard={false}
   >
     <Modal.Header closeButton>
       <Modal.Title>Modal title</Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <Form>
     <FloatingLabel controlId="floatingName" label="Category Name">
        <Form.Control type="text" placeholder="Category Name" onChange={(e)=>setcategoryName(e.target.value)} />
      </FloatingLabel>
     </Form>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" onClick={handleAdd}>Understood</Button>
     </Modal.Footer>
   </Modal>
   </>
  )
}


export default Category