import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <img
              src="./headerlogo.png" 
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          <Navbar.Brand href="#home">Alumni Connect</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </Container>
      </Navbar>
    </div>
  )
}
