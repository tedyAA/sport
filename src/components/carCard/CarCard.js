import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from 'react-bootstrap';
import "./CarCard.css";
import { BsFillPersonFill,} from "react-icons/bs";
import { FaSnowflake } from 'react-icons/fa';
import {  GiCarDoor } from "react-icons/gi";
import { GrManual } from "react-icons/gr";
import { Link } from "react-router-dom";

const CarCard =({ carImage, carName, carPrice, index })=> {
  
    return(
    <Card class="card" style={{ width: '23rem' }}>
       <Link to={`CarPage/${index}`} key={index}>
       <Card.Img variant="top" src={ carImage} />
              </Link>
    <Card.Body>
      <Card.Title>{carName}</Card.Title>
      <Card.Title>от {carPrice}€ / ден</Card.Title>
      <Button variant="primary">Повече информация</Button>
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