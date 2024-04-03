import React from 'react'
import {Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

function Landingpage() {
  const usenavigateByURL=useNavigate()
  return (
    
    <>
    <Row className="mt-5 mb-5 align-items-center justify-content-between w-100">
        <Col></Col>
<Col lg={5}> <h2>Welcome to <span style={{color:'orange'}}>Media player</span></h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At rem sequi excepturi dolores quam eligendi corrupti deleniti. Voluptatem, qui hic consequatur nihil saepe, quibusdam, iure velit cum perferendis veritatis beatae!</p>
<button onClick={()=>usenavigateByURL('./home')} className='btn btn-info mt-4'>Get Started</button>
</Col>
<Col lg={5}>

    <img src="https://s18798.pcdn.co/fenfenrita/wp-content/uploads/sites/11995/2018/10/Oct-31-2018-03-12-58.gif" className=' rounded' height={'400px'} alt="" />
</Col>
<Col></Col>
    </Row>

    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" src="https://s18798.pcdn.co/fenfenrita/wp-content/uploads/sites/11995/2018/10/Oct-31-2018-03-09-09.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" src="https://i.gifer.com/origin/ec/ec2cc02c120bfe9b02029b4a5506eae9_w200.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" src="https://i.gifer.com/origin/78/78270fde30bdca8fec52f86bfa7cab0c_w200.gif" height={'220px'} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

        </div>

    </div>

    <div className='container d-flex border rounded align-items-center justify-content-between w-100 border-light p-5 mb-5'>

       <div className='col-lg-5'>

    
    
        <h6 className='mt-4 mb-4'><span className='text-warning fw-bolder'>Play-Everything</span>:
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae qui minus dolore maxime beatae, facere accusantium magni iusto delectus voluptatum consectetur voluptas tempore aliquam, labore perferendis sint sunt ullam fugiat.
        </h6>


        <h6 className='mt-4 mb-4'><span className='text-warning fw-bolder'>Categorized-video</span>:
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae qui minus dolore maxime beatae, facere accusantium magni iusto delectus voluptatum consectetur voluptas tempore aliquam, labore perferendis sint sunt ullam fugiat.
        </h6>

      
      
        <h6 className='mt-4 mb-4'><span className='text-warning fw-bolder'>Managing-videos</span>:
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae qui minus dolore maxime beatae, facere accusantium magni iusto delectus voluptatum consectetur voluptas tempore aliquam, labore perferendis sint sunt ullam fugiat.
        </h6>


       </div>

       <div className='video col-lg-5'>
       <iframe className='border rounded' width="500" height="315" src="https://www.youtube.com/embed/gZVGxN3Xlhw?si=wUnIoTIiJus6Meou" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>

       </div>

    </div>
    
    </>
  )
}

export default Landingpage