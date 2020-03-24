import React from "react";
import Calendar from 'react-calendar';
import '../SmallCalendar/Calendar.css';
import PropTypes from 'prop-types';

export default class SmallCalendar extends React.Component{
    
  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
            onChange={this.props.onChange}
            value={this.props.value}
            calendarType="US"
            showNavigation={this.props.showNavigation}
            activeStartDate={this.props.activeStartDate}
            onViewChange={(event)=>{return}}
            navigationLabel={this.props.navigationLabel}
        />
      </div>
    );
  }
}


SmallCalendar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object,
  showNavigation: PropTypes.bool,
  activeStartDate: PropTypes.object,
  navigationLabel: PropTypes.func,
}

SmallCalendar.defaultProps = {
  onChange: SmallCalendar.onChange,
  value: new Date(),
  showNavigation: true
}