import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

class MyHeader extends Component {
    constructor(){

        this.state={isLoggedIn:false}
    }
    render() {
        return (
            <div>
       <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link  to="/" >DashBoard</Link>
        <Link to="/about" >AboutUs</Link>
        <Link to="/contactus" >ContactUs</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        );
    }
}

export default MyHeader;