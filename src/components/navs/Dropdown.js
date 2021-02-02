import React from 'react';
import './navBar.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Flags from 'country-flag-icons/react/1x1'
import { useTranslation } from "react-i18next";

    const DropdownLg =()=> {
        const { t, i18n } = useTranslation(['translation', 'welcome']);
        const changeLanguage = code => {
          i18n.changeLanguage(code);
        };
        return(
      <div>
        <DropdownButton title={<Flags.BG title="Bulgarian" className="flagIcons"/>} variant="dark">
  <Dropdown.Item onClick={() => changeLanguage('bg')} as="button">BG <Flags.BG title="Bulgarian" className="flagIcons"/></Dropdown.Item>
  <Dropdown.Item onClick={() => changeLanguage('en')} as="button">EN <Flags.US title="United States" className="flagIcons"/></Dropdown.Item>
</DropdownButton>
      </div>
      
      )
    
    }
export default DropdownLg
