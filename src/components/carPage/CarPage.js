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
import { AiOutlinePhone } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


const CarPage = (props) => {
    const { t } = useTranslation();

  const index = props.match.params.carName;
  let images=cars[index].images;
  let car = cars[index];
  let gear =cars[index].gear;
    return (
        <div class="app">
            <NavigationBar/>
            <div class="carContainer">
                <Container>
                    <Row>
                        <Col sm={8}>
                          <lebel class="name">{car.name}</lebel>
                          <ImageGallery class="ImageGallery" items={images}/></Col>
                        <Col sm={4}>
                            <div class="iconsContainer">
                                <div class="flex-container">
                                    <div class="cell1"><h3><GiCarDoor class="icons"/></h3></div>
                                    <div class="cell3"><h3><BsFillPersonFill class="icons"/></h3></div>
                                </div>
                                <div class="flex-container">
                                    <div class="cell2"><h3><FaSnowflake class="icons"/></h3></div>
                                    <div class="cell4"><h3> <img src={gear=="true" ? "./automatic.png" : "./gear.png"}/></h3></div>
                                    </div>
                            </div>
                            <ul class="table">
                                {i18n.language=="en"?
                                 car.specificationsEN.map((specificationsEN) => {
                                    return (
                                          <li class="list">{specificationsEN}</li> 
                                              );
                                        })
                                : car.specifications.map((specifications) => {
                                    return (
                                          <li class="list">{specifications}</li> 
                                              );
                                        })
                                }
                                
                            </ul>
                            <div style={{display: "inline-block"}}><span>{t('from')}</span><span class="price"> €{car.price}</span><span>{t('price')}</span></div>
                            </Col>
                    </Row>
                    <Row>
                      <Calendar class="mb-3"price={car.price} name={ car.name} car={car}/>
                      </Row>
                </Container>
            </div>
               
            <div class="textContainer">
            <strong class="mt-5 mb-5">{t('reservation')}</strong><p><AiOutlinePhone/> +359 888 22 16 00</p>
            <strong>{t('carInfo')}</strong>
            <p>{t('carspecifications')}</p>
            </div>
            


        </div>


    );
}

export default CarPage;
