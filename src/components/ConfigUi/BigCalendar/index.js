import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import Moment from 'moment';
import '../BigCalendar/styles.css';
import propTypes from 'prop-types';

let allViews = Object.keys(Views).map(k => Views[k]);

const localizer = momentLocalizer(Moment);

const myEventsList =
  [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2020, 1, 0),
      end: new Date(2020, 1, 1),
      eventType: "BE"
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2020, 1, 7,1,1,1),
      end: new Date(2020, 1, 10,2,2,2),
      eventType:"OT"
    },
    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2020, 2, 13, 0, 0, 0),
      end: new Date(2020, 2, 20, 0, 0, 0),
      eventType:"RH"
    }
  ]

  export default class BigCalendar extends React.Component {

  colorfulEvent = (event) => {
    if(event.eventType==="RH"){
      return {style: {borderLeft:'5px solid #f1d29d', backgroundColor:'#fff4e5'}}
    }else if(event.eventType==="OT"){
      return {style: {borderLeft:'5px solid #f08695', backgroundColor:'#fee3e5'}}
    }else if(event.eventType==="BE"){
      return {style: {borderLeft:'5px solid #51ce90', backgroundColor:'#dcf7e9'}}
    }else if(event.eventType==="BO"){
      return {style: {borderLeft:'5px solid #8383fd', backgroundColor:'#eae6ff'}}
    }
  }

  render(){
    return (
      <div>
        <Calendar
          events= {this.props.events}
          views={this.props.views||allViews}
          step={this.props.step}
          startAccessor={this.props.startAccessor}
          endAccessor={this.props.endAccessor}
          localizer={this.props.localizer||localizer}
          eventPropGetter={this.props.eventPropGetter}
          toolbar={this.props.toolbar}
          date={this.props.date}
          getNow={this.props.getNow}
          view={this.props.view}
          slotPropGetter={this.props.slotPropGetter}
        />
      </div>
    )
  }
}

BigCalendar.propTypes = {
  startAccessor: propTypes.string,
  endAccessor: propTypes.string,
  events:propTypes.array,
  eventPropGetter: propTypes.func,
  localizer:propTypes.object,
  step: propTypes.number,
  views: propTypes.object,
  view:propTypes.string,
  toolbar: propTypes.bool,
  date:propTypes.object,
  getNow: propTypes.func,
  slotPropGetter:propTypes.func
}

BigCalendar.defaultProps = {
  startAccessor: 'start',
  endAccessor: 'end',
  events: myEventsList,
  eventPropGetter: BigCalendar.colorfulEvent,
  slotPropGetter: BigCalendar.slotPropGetter,
  step: 60,
  toolbar:true,
  date: new Date()
}