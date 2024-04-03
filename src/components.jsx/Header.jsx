import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>

<Navbar className="bg-info">
        <Container>
          <Navbar.Brand style={{color:'white'}}>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}> <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/160/160174.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media-player
            </Link>
           
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header