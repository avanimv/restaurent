import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurentSlice';

function Header() {
  const dispatch=useDispatch();
  return (
    <>
    <Link to={'/'}style={{textDecoration:"none"}}>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <img height={"50px"} width={"100px"} src="data:image/png;base64,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 " alt="" />
          <Navbar.Brand href="#home">Palaaram</Navbar.Brand>
          <input
          onChange={(e)=>dispatch(search(e.target.value))}
          type="text" className='form-control w-25' placeholder='search by neighbourhood'/>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      </Link>
    </>
  )
}

export default Header