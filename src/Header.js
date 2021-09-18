import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// function Header() {
//     return (
//         <div>
//             <button>ok</button>
//         </div>
//     );
// }
const Header =()=><div>
   <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link> */}
         <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink>
         <NavLink activeClassName="active" to="/login" className="nav-link">Login</NavLink>
        <NavLink activeClassName="active" to="/about" className="nav-link">About Us</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>
export default Header;