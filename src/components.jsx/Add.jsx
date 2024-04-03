import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../services/allAPI';


function Add({setuploadVideoResponse}) {

  const [uploadVideo, setUploadVideo]=useState({

    id:"",name:"",url:"",link:""

  })
  console.log(uploadVideo)

  const getYoutubeEmbadLink=(e)=>{

    const {value}=e.target;
    console.log(value);
    if(value.includes("v=")){
         
      let VID=value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`)
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }else{

      setUploadVideo({...uploadVideo,link:""})
    }

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const handleAdd= async ()=>{

  const {id,name,url,link}=uploadVideo

  if(!id||!name||!url||!link){
    alert("please fill the missing fields")
  }else{
    //store uploaeded video into json

    const result= await uploadVideoAPI(uploadVideo);
    console.log(result);
    if(result.status>=200 && result.status<=300){

      //success
      handleClose()
      //empty fileds
      setUploadVideo({
        id:"",name:"",url:"",link:""
      })
      alert("data add successfully")

      setuploadVideoResponse(result.data);
      
    }else{
      alert(result.message)
    }
  }
}


  return (
    <>
    <div className='d-flex align-items-center '>
      
      <h5>Upload-video</h5> 
      <button className='btn' onClick={handleShow} style={{color:'white'}}><i class="fa-solid fa-arrow-up-from-bracket fa-fade fa-1x"></i></button>
    </div>

   

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form>
      <FloatingLabel
        controlId="floatingInputId"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id" 
        onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video Name">
        <Form.Control type="text" placeholder="Video Name"  onChange={(e)=>setUploadVideo({...uploadVideo,name:e.target.value})} />
      </FloatingLabel>
      <br />

      <FloatingLabel
        controlId="floatingInputImage"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Image URL"  onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video URL">
        <Form.Control type="text" placeholder="Enter Video URL"  onChange={getYoutubeEmbadLink} />
      </FloatingLabel>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancell
          </Button>
          <Button variant="info" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add