import NavigationBar from "../navs/NavigationBar";
import './Contacts.css';
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Contacts() {
  return (
    <div>
      <NavigationBar/>
      
      <h1 className="h1">Къде да ни намерите</h1>
      <Col lg={10}><h5><p class="ul">Свържете се с нас за информация относно предлаганите от нас автомобили, както и за изготвяне на оферта. Можете да използвате посочените координати за връзка или бутона за връзка с нас по-долу.</p> </h5>
      </Col>
  <Row>
    <Col sm={4}>
   <h5><p class="ul mt-5"><GoLocation/>  Адрес: гр. София, ул.Академик Стефан Младенов 46</p>
     <p class="ul"><AiOutlinePhone/>  Номер за връзка с нас :  <p>+(359) 898 989 898</p><p>+(359) 898 989 898</p></p></h5>  
     </Col>  
<Col sm={7}>
<iframe class="map mt-5"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.536312309362!2d23.344062750786794!3d42.64998907906621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84228f231f75%3A0x6165210209f278c2!2z0YPQuy4g4oCe0JDQutCw0LQuINCh0YLQtdGE0LDQvSDQnNC70LDQtNC10L3QvtCy4oCcIDQ2LCAxNzAwINCh0YLRg9C00LXQvdGC0YHQutC4INCa0L7QvNC_0LvQtdC60YEsINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1611651115788!5m2!1sbg!2sbg">
      </iframe>
      
</Col>
  </Row>
  
    </div>
  );
}

export default Contacts;
