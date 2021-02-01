import './FrontPage.css';
import NavigationBar from "../navs/NavigationBar";
import CarCard from "../carCard/CarCard";
import {Row,Col} from 'react-bootstrap';
import cars from './cars.json'


function FrontPage() {
let rows = [];
for(let  i =0; i< cars.length/3;i++){
  let rowHtml = [];
  for(let j =0;j<3;j++){
    let car = cars[i*3 + j];
    rowHtml.push(<Col md={4} sm={6}><CarCard class="ml-5" carImage={car.image} carName={car.name} carPrice={car.price} index={i*3 + j} gear={car.gear}/></Col>)
  }
  rows.push(<Row>{rowHtml}</Row>)
}
  return (
    <div class="app">
      <NavigationBar/>
      <div class="cardsContainer">
        {rows}
      {/* <Row>
      {cars.map((car, index) => {
        
              return (
             <Col> <CarCard class="ml-5" carImage={car.image} carName={car.name} carPrice={car.price} index={index} gear={car.gear}/></Col> 
              );
            })}
            </Row> */}
      </div>
     </div>
    
  );
}

export default FrontPage;
