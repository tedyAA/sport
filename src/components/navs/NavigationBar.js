import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import './navBar.css';
import Header from './header'

const NavigationBar =()=> {
  
    return(
  <div>
    <div class="try">
    <Header/>
    </div>
    
  <Navbar class="navbar" expand="lg">
  <Navbar.Brand href="#home">Sport Car Rent</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="/FrontPage">Автомобили</Nav.Link>
        <Nav.Link to="" href="/RentalConditionsntacts">Условия за наем</Nav.Link>
        <Nav.Link href="/About">За нас</Nav.Link>
        <Nav.Link href="/Contacts">Контакти</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>
  
  )

}

export default NavigationBar;