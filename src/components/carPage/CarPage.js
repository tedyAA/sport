import React from 'react';
import NavigationBar from "../navs/NavigationBar";
import "react-image-gallery/styles/css/image-gallery.css";
import './CarPage.css';
import { BsFillPersonFill,} from "react-icons/bs";
import { FaSnowflake } from 'react-icons/fa';
import {  GiCarDoor } from "react-icons/gi";
import ImageGallery from 'react-image-gallery';
import BookComponent from '../calendar/BookComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const images = [
  {
    original: 'https://www.groupe-psa.com/content/uploads/2016/07/COVER-2020-PAGE-PEUGEOT.jpg',
    thumbnail: 'https://www.groupe-psa.com/content/uploads/2016/07/COVER-2020-PAGE-PEUGEOT.jpg',
  },
  {
    original: 'https://media.peugeot.bg/image/33/3/peugeot-5008-2009styp-019b.715333.19.jpg?autocrop=1',
    thumbnail: 'https://media.peugeot.bg/image/33/3/peugeot-5008-2009styp-019b.715333.19.jpg?autocrop=1',
  },
  {
    original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3N0IDAIC6b9-XcOHN9PKru7IbbixERhCSA&usqp=CAU',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3N0IDAIC6b9-XcOHN9PKru7IbbixERhCSA&usqp=CAU',
  },
  {
    original: 'https://autobild.bg/wp-content/uploads/2020/01/Bilder-Peugeot-2008-II-2019-1200x800-390b583617ef3f5d.jpg',
    thumbnail: 'https://autobild.bg/wp-content/uploads/2020/01/Bilder-Peugeot-2008-II-2019-1200x800-390b583617ef3f5d.jpg',
  },
  {
    original: 'https://www.driver.bg/wp-content/uploads/2020/09/peugeot-5008-2020-01.jpg',
    thumbnail: 'https://www.driver.bg/wp-content/uploads/2020/09/peugeot-5008-2020-01.jpg',
  },
];

function CarPage() {
 
  return (
    <div class="front">
      <NavigationBar/>
      <div class="carContainer1">
  <Row>
    <Col sm={8}>
      <ImageGallery class="ImageGallery" items={images}/>
      </Col>
    <Col sm={4}>
      <Container>
      <Row xs={10} md={6} lg={12}>
<Col><h1><GiCarDoor/></h1></Col>
<Col><h1><BsFillPersonFill/></h1></Col>
</Row >
<Row xs={10} md={6} lg={12}>
<Col><h1><FaSnowflake/></h1></Col>
<Col><h1><FaSnowflake/></h1></Col>
</Row>
      </Container>
       <ul> 
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
        </ul>
        <h2>от 13,99 / ден</h2>
        </Col>
  </Row>
</div>
<BookComponent/>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
   et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
   aliquip ex ea commodo consequat. Dussis aute irure dolor in reprehenderit in voluptate velit esse cillum 
   dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum."</p>
    <h3>Video</h3>
    <iframe title="myFrame" width="420" height="315" src="https://www.youtube.com/watch?v=OiJJSY5uBvQ">
</iframe>

    


</div>
   
  );
}

export default CarPage;