import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import Moment from 'moment';
import '../BigCalendar/styles.css';
import PropTypes from 'prop-types';

let allViews = Object.keys(Views).map(k => Views[k]);

const localizer = momentLocalizer(Moment);

  export default class BigCalendar extends React.Component {

  colorfulEvent = (event) => {
    if(event.eventType==="RH"){
      return {style: {borderLeft:'5px solid #f1d29d', backgroundColor:'#51CE90'}}
    }else if(event.eventType==="OT"){
      return {style: {borderLeft:'5px solid #f08695', backgroundColor:'#F1D29D'}}
    }else if(event.eventType==="BE"){
      return {style: {borderLeft:'5px solid #51ce90', backgroundColor:'#F08695'}}
    }else if(event.eventType==="BO"){
      return {style: {borderLeft:'5px solid #8383fd', backgroundColor:'#8383FD'}}
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
          onView={this.props.onView}
          onNavigate={this.props.onNavigate}
        />
      </div>
    )
  }
}

BigCalendar.propTypes = {
  startAccessor: PropTypes.string,
  endAccessor: PropTypes.string,
  events:PropTypes.array,
  eventPropGetter: PropTypes.func,
  localizer:PropTypes.object,
  step: PropTypes.number,
  views: PropTypes.object,
  view:PropTypes.string,
  onView:PropTypes.func,
  toolbar: PropTypes.bool,
  date:PropTypes.object,
  onNavigate:PropTypes.func,
  getNow: PropTypes.func,
  slotPropGetter:PropTypes.func
}

BigCalendar.defaultProps = {
  startAccessor: 'start',
  endAccessor: 'end',
  events: [],
  eventPropGetter: BigCalendar.colorfulEvent,
  slotPropGetter: BigCalendar.slotPropGetter,
  step: 60,
  toolbar:true,
  date: new Date()
}