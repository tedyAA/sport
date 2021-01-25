import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Calendar extends React.Component {
    numberOfNightsBetweenDates = (startDate, endDate) => {
        const start = new Date(startDate) //clone
        const end = new Date(endDate) //clone
        let dayCount = 1
        let price=0
        let finalPrice=0
      
        while (end > start) {
          dayCount++
          start.setDate(start.getDate() + 1)
        }
        if(startDate==null || endDate == null){
            return ""
        }
      if(dayCount<=3){
price=20
finalPrice=price*dayCount
      }
      if(dayCount>3 && dayCount<7){
        price=15
        finalPrice=price*dayCount
              }
              if(dayCount>7){
                price=10
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
      finalDate:endDateFormatted-startDateFormatted
    }));
    if (startDate != null) {
      this.setState(() => ({
        startDateFormatted: startDate.format("D"),
      }));
    }
    if (endDate != null) {
      this.setState(() => ({
        endDateFormatted: endDate.format("D"),
        
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
          startDateId="start_date_id"
          endDate={this.state.endDate}
          endDateId="end_date_id"
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
       </Row>
        <div>

        </div>
      </div>
    );
  }
}
export default Calendar;