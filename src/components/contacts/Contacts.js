import NavigationBar from "../navs/NavigationBar";
import './Contacts.css';
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";

function Contacts() {
  return (
    <div>
      <NavigationBar/>
      <div class="grid-container">
      <h1 className="float-left ml-5 mt-5">Къде да ни намерите</h1>
      <h4><p className="float-left ml-5 mt-5">Свържете се с нас за информация относно предлаганите от нас автомобили, както и за изготвяне на оферта. Можете да използвате посочените координати за връзка или бутона за връзка с нас по-долу.</p></h4>
      <h4><GoLocation className="float-left ml-5 mt-5"/>
     <p className="float-left ml-3 mt-5">Адрес: гр. София, ул.Академик Стефан Младенов 46</p></h4>
     <h4><AiOutlinePhone className="float-left ml-5 mt-5"/>
     <p className="float-left ml-3 mt-5">+(359) 898 989 898</p></h4>
      <iframe class="map" title="myFrame1"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23459.16169541074!2d23.305805931105006!3d42.695351810047406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856dd1517c85%3A0xffb5a61b370ddfaa!2z0KbQtdC90YLRitGALCDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1611136810516!5m2!1sbg!2sbg">
      </iframe>
    </div>
    </div>
  );
}

export default Contacts;
