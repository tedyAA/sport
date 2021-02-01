import NavigationBar from "../navs/NavigationBar";
import './AboutUs.css';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';


function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <div >
      <NavigationBar/>
      <h1 class="h1">{t('AboutUsHeader')}</h1>
      <p class="ul">{t('AboutUsInfo')}</p>
      <ul class="ul">
      <li lg >{t('info1')}</li>
      <li lg>{t('info2')}</li>
      <li lg>{t('info3')}</li>
      <li lg>{t('info4')}</li>
      <li lg> {t('info5')}</li>
           <li>{t('info6')}</li>
           <li>{t('info7')}</li>
           <li>{t('info8')}</li>
           <li>{t('info9')}</li>
           <li>{t('info10')}</li>
      </ul>
    </div>
  );
}

export default AboutUs;
