import './FrontPage.css';
import NavigationBar from "../navs/NavigationBar";
import CarCard from "../carCard/CarCard";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FrontPage() {
  return (
    <div class="app">
      <NavigationBar/>
      <div class="carContainer">
        
      <Row>
      <Col sm><CarCard/></Col>
      <Col sm><CarCard/></Col>
      <Col sm><CarCard/></Col>
      </Row>
      <Row>
      <Col sm><CarCard/></Col>
      <Col sm><CarCard/></Col>
      <Col sm><CarCard/></Col>
  </Row>
      </div>
     </div>
    
  );
}

export default FrontPage;
