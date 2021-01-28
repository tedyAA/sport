import React from 'react';
import './bookingPage.css';
import NavigationBar from '../navs/NavigationBar'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Card from '../carCard/CarCard'


const ContactUs = (props) => {
    let name = props.location.props.carName
    let start = props.location.props.startDate
    let end = props.location.props.endDate
    let price = props.location.props.price
    let car =  props.location.props.car
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_1e6kbbm', 'contact_form', e.target, 'user_d8RYDgpdtbS48tym6puBv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
      <div>
          <NavigationBar/>
          
          <div   class="form">
          <Container>
          <div>
              <h1 class="">ВАШИТЕ ДАННИ</h1>
    <Form className="contact-form" onSubmit={sendEmail}>
    <input type="hidden" name="car_name" value={name}/>
    <input type="hidden" name="from_date" value={start}/>
    <input type="hidden" name="to_date" value={end}/>
    <input type="hidden" name="price" value={price}/>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Име</Form.Label>
        <Form.Control name="from_name" type="name" placeholder="Въведи Име" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Фамилия</Form.Label>
        <Form.Control  name="user_last_name" type="name" placeholder="Въведи Фамилия" />
      </Form.Group>
    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="user_email" type="email" placeholder="Въведи email" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Телефон</Form.Label>
        <Form.Control name="phone" type="phone" placeholder="Въведи Телефонен Номер" />
      </Form.Group>
    </Form.Row>
  
    <Form.Row>
    <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Коментар</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl name="message" type="message" as="textarea" aria-label="With textarea" />
  </InputGroup>
    </Form.Row>
    <Button class=" mt-3 mb-3 btn btn-danger"variant="primary" type="submit" value="Send">
      Submit
    </Button>
  </Form>
  </div>
  </Container>
  </div>
  </div>
  );
}
export default ContactUs
