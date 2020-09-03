import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import './CalendarLG.css';
import moment from "moment";
import '../stylesheets/react-big-calendar.css';
import '../stylesheets/styles.css';


const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class CalendarLG extends React.Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };

  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (

   
        <div className="Calendar" 
        style={{background: "white", display: 'flex', justifyContent: 'center', textcolor: 'black'}} 
        >
          <DnDCalendar
            defaultDate={moment().toDate()}
            defaultView="month"
            events={this.state.events}
            localizer={localizer}
            onEventDrop={this.onEventDrop}
            onEventResize={this.onEventResize}
            resizable
            style={{ height: "50vh", width: "75vw" }}
          />
        </div>
      
    );
  }
}

export default CalendarLG; 