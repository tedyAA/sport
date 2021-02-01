import React, { useState } from 'react';
import './navBar.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Flags from 'country-flag-icons/react/1x1'
import { useTranslation } from "react-i18next";

    const DropdownLg =()=> {
        const { i18n } = useTranslation();
        const [language, setLanguage] = useState("bg");
        const handleSelect=(e)=>{
          console.log(e);
          setLanguage(e);
          i18n.changeLanguage(e);
        }
        return(
      <div>
        <DropdownButton onSelect={handleSelect} title={<Flags.BG title="Bulgarian" className="flagIcons"/>} variant="dark">
  <Dropdown.Item eventKey="bg" as="button">BG <Flags.BG title="Bulgarian" className="flagIcons"/></Dropdown.Item>
  <Dropdown.Item eventKey="en" as="button">EN <Flags.US title="United States" className="flagIcons"/></Dropdown.Item>
</DropdownButton>
      </div>
      
      )
    
    }
export default DropdownLg
