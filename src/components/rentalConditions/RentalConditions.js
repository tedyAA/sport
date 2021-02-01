import NavigationBar from "../navs/NavigationBar";
import './RentalConditions.css';
import { useTranslation } from 'react-i18next';

function RentalConditions() {
  const { t } = useTranslation();
  return (
    <div >
      <NavigationBar/>
      <h1 class="h1Style">{t('RentalConditionsHeader')}</h1>
      <h2 class="h2Style">{t('SmallHeader')}</h2>
      <ul class="ulStyle">
      <li lg >{t('RentalInfo1')}</li>
      <li lg>{t('RentalInfo2')}</li>
      <li lg>{t('RentalInfo3')}</li>
      <li lg>{t('RentalInfo4')}</li>
      <li lg> {t('RentalInfo5')}</li>
           <li>{t('RentalInfo6')}.</li>
           <li>{t('RentalInfo7')}</li>
           <li>{t('RentalInfo8')}</li>
           <li>{t('RentalInfo9')}</li>
           <li>{t('RentalInfo10')}</li>
      </ul>
      <h1 class="h1Style">{t('generalterms')}</h1>
      <div class="ulStyle">
      <p>{t('Requirements')}</p>
      <p>{t('RequirementsInfo')}</p>
      <p>{t('RentalPeriod')}</p>
      <p>{t('RentalPeriodInfo')}</p>
      <p>{t('Payment')}</p>
      <p>{t('PaymentInfo')}</p>
      <p>{t('Insurance')}</p>
      <p>{t('InsuranceInfo')}</p>
    </div>
    </div>
  );
}

export default RentalConditions;
