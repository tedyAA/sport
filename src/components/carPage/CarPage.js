import React from 'react';
import NavigationBar from "../navs/NavigationBar";
import "react-image-gallery/styles/css/image-gallery.css";
import './CarPage.css';
import {BsFillPersonFill,} from "react-icons/bs";
import {FaSnowflake} from 'react-icons/fa';
import {GiCarDoor} from "react-icons/gi";
import { GrManual } from "react-icons/gr";
import ImageGallery from 'react-image-gallery';
import Calendar from '../calendar/Calendar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cars from '../frontPage/cars.json'


const CarPage = (props) => {

  const index = props.match.params.carName;
  let images=cars[index].images;
  let car = cars[index];
  let gear =cars[index].gear;
    return (
        <div class="app">
            <NavigationBar/>
            <div class="carContainer1">
                <Container fluid class="carContainer1">
                    <Row>
                        <Col sm={8}>
                          <lebel class="name">{car.name}</lebel>
                          <ImageGallery class="ImageGallery" items={images}/></Col>
                        <Col sm={4}>
                            <div class="bigContainer">
                                <div class="flex-container">
                                    <div class="cell1"><h3><GiCarDoor class="icons"/></h3></div>
                                    <div class="cell3"><h3><BsFillPersonFill class="icons"/></h3></div>
                                </div>
                                <div class="flex-container">
                                    <div class="cell2"><h3><FaSnowflake class="icons"/></h3></div>
                                    <div class="cell4"><h3> <img src={gear=="true" ? "./gearbox-auto.jpeg" : "https://carent.bg/assets/src/img/carent/gears_manual.svg"}/></h3></div>
                                    
                                     </div>
                            </div>
                            <ul class="car">
                            {car.specifications.map((specifications) => {
                         return (
                               <li class="car1">{specifications}</li> 
                                   );
                             })}     
                            </ul>
                            <div style={{display: "inline-block"}}><span>от</span><span class="price"> €{car.price}</span><span>/ден</span></div>
                            </Col>
                    </Row>
                    <Row>
                      <Calendar class="mb-3"price={car.price} name={ car.name} car={car}/>
                      </Row>
                </Container>
            </div>
               
            <div class="textContainer">
            <strong class="mt-5 mb-5">Резервация за кола под наем по телефона/Viber/Whatsapp</strong><p> +359 888 22 16 00</p>
            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Dussis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia
                deserunt mollit anim id est laborum."</p>
            </div>
            


        </div>


    );
}

export default CarPage;
