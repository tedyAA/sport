import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import './navBar.css';
import Header from './header'
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom'
import { NavDropdown} from 'react-bootstrap'
import Flags from 'country-flag-icons/react/1x1'

const NavigationBar =()=> {
  const { t } = useTranslation();
  const { i18n } = useTranslation(['translation', 'welcome']);
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };
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
        <Nav.Link as={NavLink} to="/FrontPage">{t('cars')}</Nav.Link>
        <Nav.Link as={NavLink} to="/RentalConditions">{t('Conditions')}</Nav.Link>
        <Nav.Link as={NavLink} to="/About">{t('AboutUs')}</Nav.Link>
        <Nav.Link as={NavLink} to="/Contacts">{t('Contacts')}</Nav.Link>
        <NavDropdown title={<Flags.BG title="Bulgarian" className="flagIcons"/>} id="collasible-nav-dropdown">
        <NavDropdown.Item  onClick={() => changeLanguage('bg')} as="button">BG</NavDropdown.Item>
        <NavDropdown.Item  onClick={() => changeLanguage('en')} as="button">EN</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>
  
  )

}

export default NavigationBar;