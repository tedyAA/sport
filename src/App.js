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
                <Route path="/CarPage/:carName" component={CarPage} exact />
                <Route path="/About" component={AboutUs} exact/>
                <Route path="/Booking" component={Booking} exact/>
                <Route path="/Contacts" component={Contacts} exact/>
                <Route path="/RentalConditions" component={RentalConditions} exact/>
            </Switch>
      </BrowserRouter>
        </main>
    </div>
  );
}

export default App;
