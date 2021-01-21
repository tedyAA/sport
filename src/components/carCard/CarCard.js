import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from 'react-bootstrap';
import image from "../../images/peugeot.jpg";
import "./CarCard.css";
import { BsFillPersonFill,} from "react-icons/bs";
import { FaSnowflake } from 'react-icons/fa';
import {  GiCarDoor } from "react-icons/gi";
import { GrManual } from "react-icons/gr";

const CarCard =()=> {
    return(
    <Card class="card" style={{ width: '23rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>Peugeot</Card.Title>
      <Card.Title>от 10,99€ / ден</Card.Title>
      
      <Button variant="primary" href="/CarPage">Повече информация</Button>
    </Card.Body>
    <Card.Footer className="text-muted">
        <div class="footerRow">
    <h5 class="mr-4 ml-3"><BsFillPersonFill />5 </h5>
    <h5 class="mr-4"><GiCarDoor />5 </h5>
    <h5 class="mr-4"><FaSnowflake />A/C </h5>
    <h5 class="mr-4"><GrManual />Ръчна </h5>
    </div>
    </Card.Footer>
  </Card>
  )

}

export default CarCard;