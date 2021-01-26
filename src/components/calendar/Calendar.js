import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";

class Calendar extends React.Component {
    
    numberOfNightsBetweenDates = (startDate, endDate) => {
        const start = new Date(startDate) //clone
        const end = new Date(endDate) //clone
        let dayCount = 1
        let finalPrice=0
      let price = (this.props.price)
        while (end > start) {
          dayCount++
          start.setDate(start.getDate() + 1)
        }
        if(startDate==null || endDate == null){
            return ""
        }
      if(dayCount<=3){

finalPrice=price*dayCount
      }
      if(dayCount>3 && dayCount<7){
        price-=(price*0.05)
        finalPrice=price*dayCount
              }
              if(dayCount>7){
                price-=(price*0.1)
                finalPrice=price*dayCount
                      }
                     
                      return finalPrice
        
      }
  state = {
    startDate: null,
    endDate: null,
    endDateFormatted: null,
    startDateFormatted: null,
    finalDate:null,
   
  };
  hundleDateChange(startDate, endDate, endDateFormatted,startDateFormatted) {
    this.setState(() => ({
      endDate,
      startDate,
      finalDate:endDateFormatted-startDateFormatted,
    }));
    if (startDate != null) {
      this.setState(() => ({
        startDateFormatted: startDate.format("DD-MM-YY"),
      }));
    }
    if (endDate != null) {
      this.setState(() => ({
        endDateFormatted: endDate.format("DD-MM-YY"),
        
      }));
    }
  }
  
  render() {
    return ( 
      <div>
          <Row>
              <Col xs={6}>
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate,finalDate }) =>
            this.hundleDateChange(startDate, endDate, finalDate)
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
        />
        </Col>
        <Col>
       <div>{this.numberOfNightsBetweenDates(this.state.startDate, this.state.endDate)}</div>
       </Col>
       <Col>
       <Link to={
           {
               pathname:"/Booking",
               props:{
                   startDate:this.state.startDateFormatted,
                 endDate:this.state.endDateFormatted, 
                 carName: this.props.name,
                price: this.numberOfNightsBetweenDates(this.state.startDate, this.state.endDate) }
           }
       }>
       <button class="btn btn-danger">Rezervirai</button>
       </Link>
       </Col>
       </Row>
        <div>

        </div>
      </div>
    );
  }
}

export default Calendar;