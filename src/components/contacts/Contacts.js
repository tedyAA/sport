import NavigationBar from "../navs/NavigationBar";
import './Contacts.css';
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import {Row, Container} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationBar/>
     <Container>
     <h1 class="mt-5" style={{color: "#333457"}}>{t('header')}</h1>
     <Row>
       <Col><p class="p">{t('info')}</p></Col>
       </Row>
     <Row>
     <Col sm={4}>
   <p class="p1"><GoLocation/> {t('address')}</p>
     <p class="p1"><AiOutlinePhone/> {t('contacts')}<p>+(359) 898 989 898</p><p>+(359) 898 989 898</p></p>  
     </Col>  
     <Col>
<iframe class="map mt-5" title="fsdf"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.536312309362!2d23.344062750786794!3d42.64998907906621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84228f231f75%3A0x6165210209f278c2!2z0YPQuy4g4oCe0JDQutCw0LQuINCh0YLQtdGE0LDQvSDQnNC70LDQtNC10L3QvtCy4oCcIDQ2LCAxNzAwINCh0YLRg9C00LXQvdGC0YHQutC4INCa0L7QvNC_0LvQtdC60YEsINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1611651115788!5m2!1sbg!2sbg">
      </iframe>
</Col>
</Row>
     </Container>
  
    </div>
  );
}

export default Contacts;
