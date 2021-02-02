import React, { Component } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
// import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

  const Header =()=>{
    const { t } = useTranslation();
       return (
<div>
<Container fluid className='header'>
  
  <Row className="justify-content-md-center">
    <Col lg={3} md={3} sm={3} className='section' ><AiOutlinePhone class="mr-2"/>{t('HeaderPhone')} +(359) 898 989 898</Col>
    <Col lg={4} md={4} sm={4} className='section'><GoLocation class="mr-2"/>{t('Address')}</Col>
    <Col lg={3} md={3} sm={3} className='section'><BsEnvelope class="mr-2"/>Email: sportcarrentbg@gmail.com</Col>
    <div class="right"><FiFacebook /></div>
    <div class="right"><FaInstagram/></div>
    <div class="right"><FaViber /></div>
    <div class="section2"></div>
  </Row>
</Container>
  </div>
    );
}
 
export default Header;
