import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
        //FrontPage
        //CarPage
        // RentalConditions
        "RentalConditionsHeader":"Rental conditions",
        "SmallHeader":"DAILY PRICES INCLUDE:",
        "RentalInfo1":"Unlimited mileage",
        "RentalInfo2":"24 hour car rental",
        "RentalInfo3":"Third party liability insurance",
        "RentalInfo4":"24 hours roadside assistance on the territory of Bulgaria (in case of technical failure)",
        "RentalInfo5":"Limitation of liability for damage - reduces the liability of the tenant for damage to the amount of his deposit. Valid only upon presentation of a report by the Police. It does not include damages caused as a result of the use of alcohol, drugs or in violation of the provisions of the PIA.",
        "RentalInfo6":"Limitation of liability for theft - reduces the lessee's liability for theft to the amount of his deposit. Valid only after presentation of a report by the Police and after returning the documents and keys of the car.",
        "RentalInfo7":"Winter tires (during the winter season)",
        "RentalInfo8":"Free collection and return of cars from Sofia Airport",
        "RentalInfo9":"Extra driver",
        "RentalInfo10":"ДДС 20%",
        "generalterms":"General terms",
        "Requirements":"Requirements for the tenant:",
        "RequirementsInfo":"The tenant must have a driver's license of at least 1 year, a passport (or ID card) and a credit card. Drivers under the age of 21 may have to pay an additional Young Driver fee and be required to pay a higher deposit than normal.",
        "RentalPeriod":"Rental period:",
        "RentalPeriodInfo":"The minimum rental period is 24 hours. The tolerance when returning the car is one hour (if possible). Delay over this period will be charged as an additional day.",
        "Payment":"Methods of payment and deposit:",
        "PaymentInfo":"When booking the car, the renter can choose one of the following options: make a partial online prepayment (20% of the total amount) via Paypal or credit card, pay the full amount by credit card or pay the full rent on arrival. If there is a partial prepayment, the remaining amount is due when you pick up the car. We accept the following payment methods: cash, credit or debit card (Visa, Mastercard, Maestro). Upon receipt of the car, the renter is obliged to leave a deposit with a credit card issued in his name, which is determined by car class.It is possible to leave a deposit in cash or with a debit card, in which case it may be higher. Process of authorization of the deposit and its release. When taking the car, the amount of the deposit will be blocked (authorized) in the card of the Tenant. On return, after inspecting the car, the deposit is released.",
        "Insurance":"Insurance:",
        "InsuranceInfo":"1. “Zero Deductibility in case of damage”: Completely removes the Lessee's liability in case of damage or theft for 8-12 euros / day (depending on the car class), but does not cover damage to the car's suspension, as well as missing details. Valid only upon presentation of a document of injury or theft by the Police. Add and receive the following Benefits:",
        
        // AboutUs
        "AboutUsHeader":"About us",
        "AboutUsInfo": "CarRent is a national car rental company, founded in 2004. For the past 15 years we have gained a lot of experience and built an impeccable reputation in renting cars in Bulgaria. We have offices in Sofia, Burgas and Varna, we welcome our clients at all international airports in Bulgaria. We offer delivery of rental cars to your home or office within the city of Sofia, as well as to Borovets, Bansko and Pamporovo, as well as to any other point in the country.Our cars are inspected before and after each rental, so they are always in perfect technical condition. The cars have all the necessary documents to drive on the roads, and depending on the season are equipped with winter or summer tires. In each of our cars there is a road map of Bulgaria, and on request we can provide chains, ski rack or navigation. Only with us the additional drivers are completely free, regardless of their number. We accept international credit and debit cards - Visa and Mastercard.We offer a wide range of cheap and family cars for rent - Mini, Economical, Compact, Vans and Luxury. We have cars with manual and automatic speeds. With us you can rent a Minivan with 7 seats or a Minibus with 9 seats. We make transfers to any point in Bulgaria. Upon prior request we can provide a personal driver. Trust us and you will be served by professionals!",
        "info1":"Unlimited mileage",
        "info2":"24 hour car rental",
        "info3":"Third party liability insurance",
        "info4":"24 hours roadside assistance on the territory of Bulgaria (in case of technical failure)",
        "info5":"Limitation of liability for damage - reduces the liability of the tenant for damage to the amount of his deposit. Valid only upon presentation of a report by the Police. It does not include damages caused as a result of the use of alcohol, drugs or in violation of the provisions of the PIA.",
        "info6":"Limitation of liability for theft - reduces the lessee's liability for theft to the amount of his deposit. Valid only after presentation of a report by the Police and after returning the documents and keys of the car.",
        "info7":"Winter tires (during the winter season)",
        "info8":"Free collection and return of cars from Sofia Airport",
        "info9":"Extra driver",
        "info10":"ДДС 20%",
        // Contacts
        "header":"Contacts",
        "info":"Contact us for information about the products we offer, as well as to prepare an offer. You can use the contact details provided or the contact us button below.",
     "address":"Address Sofia, Akademik Stefan Mladenov st. ",
"contacts":"Contact us:",
    }
  },
  bg: {
    translation: {
         //FrontPage
        //CarPage
        // RentalConditions
        "RentalConditionsHeader":"Условия за наем",
        "SmallHeader":"ДНЕВНИТЕ ЦЕНИ ВКЛЮЧВАТ:",
        "RentalInfo1":"Неограничен пробег",
        "RentalInfo2":"24 часа наем на автомобил",
        "RentalInfo3":"Застраховка Гражданска отговорност",
        "RentalInfo4":"24 часа пътна помощ на територията на България (при техническа повреда)",
        "RentalInfo5":"Ограничаване отговорността при щета – намалява отговорността на наемателя при щета до размер на депозита му. Важи само при представяне на протокол от Полицията. Не включва щети причинени в следствие употребата на алкохол, наркотици или при нарушаване разпоредбите на ЗДП.",
        "RentalInfo6":"Ограничаване на отговорността при кражба –намалява отговорността на наемателя при кражба до размер на депозита му. Важи само след представяне на протокол от Полицията и след връщане на документите и ключовете на автомобила.",
        "RentalInfo7":"Зимни гуми (през зимния сезон)",
        "RentalInfo8":"Безплатно взимане и връщане на автомобили от Летище София",
        "RentalInfo9":"Допълнителе шофъор",
        "RentalInfo10":"ДДС 20%",
        "generalterms":"Общи условия",
        "Requirements":"Изисквания спрямо наемателя:",
        "RequirementsInfo":"Наемателят следва да има шофьорска книжка от поне 1 година, паспорт (или лична карта) и кредитна карта. Шофьорите под 21 години може да трябва да заплатят допълнително такса “Млад Шофьор” и да им бъде поискан по-висок депозит от нормалния.",
        "RentalPeriod":"Наемен период:",
        "RentalPeriodInfo":"Минималният период на наемане на автомобил е 24 часа. Толерансът при връщане на колата е един час (ако е възможно). Закъснение над този срок ще се таксува като допълнителен ден.",
        "Payment":"Начини на плащане и депозит:",
        "PaymentInfo":"По време на резервирането на автомобила Наемателят може да избере една от следните опции: да направи частично онлайн предплащане (20% от цялата сума) през Paypal или с кредитна карта, да плати цялата сума с кредитна карта или да плати целия наем при пристигането си. Ако има частично предплащане, то останалата сума се дължи при взимането на колата. Приемаме следните методи на разплащане: в брой, кредитна или дебитна карта (Visa, Mastercard, Maestro).При получаването на колата Наемателят е длъжен да остави депозит с кредитна карта, издадена на негово име, който се определя според класа автомобил. Възможно е оставянето на депозит в брой или с дебитна карта, като в този случай е възможно той да бъде по-висок.Процес на авторизация на депозита и неговото освобождаване.При взимането на автомобила, размерът на депозита ще бъде блокиран (авторизиран) в картата на Наемателя. На връщане, след инспектирането на колата, депозитът се освобождава.",
        "Insurance":"Застраховки:",
        "InsuranceInfo":"1. “Нулево Самоучастие при щета”: Напълно премахва отговорността на Наемателя при щета или кражба срещу 8-12 евро/ден(в зависимост от класа автомобил), но не покрива щети по окачването на автомобила, както и липсващи детайли. Валидно само след представянето на документ за увреждането или кражбата от Полицията. Добавете и ще получите следните Предимства:",
        // AboutUs
        "AboutUsHeader":"За нас",
        "AboutUsInfo": "CarRent e национална рент а кар компания, основана през 2004г. За изминалите над 15 години ние натрупахме доста опит и изградихме безупречна репутация в отдаването на автомобили под наем на територията на България. Разполагаме с офиси в София, Бургас и Варна, посрещаме клиентите си на всички международни летища в България. Предлагаме доставка на автомобили под наем до вашия дом или офис в рамките на град София, а също и до Боровец, Банско и Пампорово, както и до всяка друга точка в страната. Нашите коли се проверяват преди и след всеки наем, ето защо винаги са в перфектно техническо състояние. Автомобилите притежават всички необходими документи, за да се движат по пътищата, а според сезона се оборудват със зимни или летни гуми. Във всяка наша кола има пътна карта на България, а по заявка можем да осигурим вериги, ски багажник или навигация. Само при нас допълнителните шофьори са напълно безплатни, независимо от техния брой. Приемаме международни кредитни и дебитни карти – Visa и Mastercard. Предлагаме богата гама от евтини и семейни автомобили под наем – Мини, Икономични, Компактни, Ванове и Луксозни. Разполагаме с коли с ръчни и автоматични скорости. При нас можете да наемете Миниван със 7 места или Минибус с 9 места. Извършваме трансфери до всяка точка на България. По предварителна заявка можем да осигурим и персонален шофьор. Доверете ни се и ще бъдете обслужени от професионалисти!",
        "info1":"Неограничен пробег",
        "info2":"24 часа наем на автомобил",
        "info3":"Застраховка Гражданска отговорност",
        "info4":"24 часа пътна помощ на територията на България (при техническа повреда)",
        "info5":"Ограничаване отговорността при щета – намалява отговорността на наемателя при щета до размер на депозита му. Важи само при представяне на протокол от Полицията. Не включва щети причинени в следствие употребата на алкохол, наркотици или при нарушаване разпоредбите на ЗДП.",
        "info6":"Ограничаване на отговорността при кражба –намалява отговорността на наемателя при кражба до размер на депозита му. Важи само след представяне на протокол от Полицията и след връщане на документите и ключовете на автомобила.",
        "info7":"Зимни гуми (през зимния сезон)",
        "info8":"Безплатно взимане и връщане на автомобили от Летище София",
        "info9":"Допълнителе шофъор",
        "info10":"ДДС 20%",
        // Contacts
        "header":"Къде да ни намерите",
        "info":"Свържете се с нас за информация относно предлаганите от нас автомобили, както и за изготвяне на оферта. Можете да използвате посочените координати за връзка или бутона за връзка с нас по-долу.",
     "address":"Адрес: гр. София, ул.Академик Стефан Младенов 46",
"contacts":"Номер за връзка с нас :",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "bg",
    lng: "bg",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;