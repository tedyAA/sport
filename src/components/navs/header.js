import React, { Component } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Flags from 'country-flag-icons/react/1x1'

class Header extends Component {
  render() {
    return (
<div class="header" style={{display: 'flex', flexDirection: 'row'}}>
    <div class="section">
    <div class="right "><AiOutlinePhone class="mr-2"/>Телефон: +(359) 898 989 898</div>
    </div>
    <div class="section">
    <div class="right"><GoLocation class="mr-2"/>гр. София, ул.Академик Стефан Младенов 46</div>
</div>
<div class="section">
<div class="right"><BsEnvelope class="mr-2"/>Email: sportcarrentbg@gmail.com</div>
  </div>
  <div class="section">
<div class="right"><FiFacebook /></div>
  </div>
  <div class="section">
<div class="right"><FaInstagram/></div>
  </div>
  <div class="section1">
<div class="right"><FaViber /></div>
  </div>
  <DropdownButton id="dropdown-item-button" title={<Flags.BG title="Bulgarian" className="flagIcons"/>} variant="dark">
  <Dropdown.Item as="button">BG <Flags.BG title="Bulgarian" className="flagIcons"/></Dropdown.Item>
  <Dropdown.Item as="button">EN <Flags.US title="United States" className="flagIcons"/></Dropdown.Item>
</DropdownButton>
  </div>
    );
  }
}
 
export default Header;
