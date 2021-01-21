import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FrontPage from "./components/frontPage/FrontPage";
import CarPage from "./components/carPage/CarPage"
import AboutUs from "./components/aboutUs/AboutUs"
import Booking from './components/bookingPage/booking'
import Contacts from './components/contacts/Contacts'
import RentalConditions from './components/rentalConditions/RentalConditions'
function App() {
  return (
    <div className="App">
     <main>
     <BrowserRouter>
            <Switch>
                <Route path="/FrontPage" component={FrontPage} exact />
                <Route path="/CarPage" component={CarPage} />
                <Route path="/About" component={AboutUs} />
                <Route path="/Booking" component={Booking} />
                <Route path="/Contacts" component={Contacts} />
                <Route path="/RentalConditionsntacts" component={RentalConditions}/>
            </Switch>
      </BrowserRouter>
        </main>
    </div>
  );
}

export default App;
