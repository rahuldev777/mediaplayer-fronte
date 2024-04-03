import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { AddVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';



function Videocard({video,setdeleVideoResponse,insidecard}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);
  
  const{name,link}=video
  let today = new Date()
  let timeStamp= new Intl.DateTimeFormat('en-US',{year:"numeric",month:'2-digit',day:"2-digit",hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  let videoHistory={name,link,timeStamp}

   await AddVideoHistoryAPI(videoHistory)
  }
  const removeVideo= async(id)=>{
    await deleteVideoAPI(id);
setdeleVideoResponse(true);
  }

  const dragStarted=(e,id)=>{
    console.log("dragg started"+id);
    e.dataTransfer.setData("videoId",id);
  }

  return (
    <>
     <Card draggable onDragStart={e=>dragStarted(e,video?.id)} style={{ width: '18rem' }}>
      <Card.Img variant="top" onClick={handleShow} height={'200px'} src={video?.url} />
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <h6>{video?.name}</h6>
       
        {insidecard?null:<Button className='btn' onClick={()=>removeVideo(video?.id)} ><i class="fa-solid fa-trash text-danger"></i></Button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <iframe width="100%" height="526" src={`${video?.link}?autoplay=1`} title="Hits Of KJ Yesudas | Evergreen Malayalam Songs of Yesudas |  Video Jukebox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen ></iframe>

        </Modal.Body>
      </Modal>


    </>
  )
}

export default Videocard