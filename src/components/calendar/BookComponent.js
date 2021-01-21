import React from "react";
import Calendar from '../calendar/Calendar'
import './Calendar.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BookComponent =()=> {
    let history = useHistory();

  const redirect = () => {
    history.push('/Booking')
  }
    
    return(
    <div class="bookComponent">
  <Row>
    <Col><Calendar/></Col>
    <Col><Calendar/></Col>
    <Col> <Button onClick={redirect} variant="danger">Резервирай</Button></Col>
  </Row>
    </div>
  )

}

export default BookComponent;