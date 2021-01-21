import React, { Component } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

class Header extends Component {
  render() {
    return (
<div class="header" style={{display: 'flex', flexDirection: 'row'}}>
    <div class="section">
    <div class="right "><AiOutlinePhone class="mr-2"/>Телефон: +(359) 898 989 898</div>
    </div>
    <div class="section">
    <div class="right"><GoLocation class="mr-2"/>гр София ул. АлаБала Портокала 10</div>
</div>
<div class="section">
<div class="right"><BsEnvelope class="mr-2"/>Email: sportcarrent@gmail.com</div>
  </div>
  <div class="section">
<div class="right"><FiFacebook /></div>
  </div>
  <div class="section">
<div class="right"><FaInstagram/></div>
  </div>
  <div class="section">
<div class="right"><FiYoutube /></div>
  </div>
  <div class="section1">
<div class="right"><FaViber /></div>
  </div>
  </div>
    );
  }
}
 
export default Header;