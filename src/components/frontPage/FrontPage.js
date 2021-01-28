import './FrontPage.css';
import NavigationBar from "../navs/NavigationBar";
import CarCard from "../carCard/CarCard";
import Row from 'react-bootstrap/Row'
import cars from './cars.json'

function FrontPage() {
  return (
    <div class="app">
      <NavigationBar/>
      <div class="carContainer">
      <Row>
      {cars.map((car, index) => {
        
              return (
               <CarCard class="ml-5" carImage={car.image} carName={car.name} carPrice={car.price} index={index} gear={car.gear}/>
              );
            })}
            </Row>
      </div>
     </div>
    
  );
}

export default FrontPage;
