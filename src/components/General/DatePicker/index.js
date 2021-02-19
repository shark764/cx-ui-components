import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import PropTypes from 'prop-types';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import 'moment/min/locales';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      isEmpty: true,
      isDisabled: false,
    };
  }
  
  handleDayChange(selectedDay) {
    this.props.onClick(selectedDay);
  }

  render() {
    const { containerBackground, ...inputCustomStyles } = this.props.customStyle;
    return (
      <DayPickerInput
        value={this.props.selectedDay}
        placeholder={this.props.placeholder || `${formatDate(new Date(), this.props.format || "MM/DD/YYYY", this.props.localeTimeZone || "us")}`}
        inputProps={{ disabled: this.props.disabled, style: inputCustomStyles }}
        dayPickerProps={{
          locale: this.props.localeTimeZone,
          localeUtils: MomentLocaleUtils,
          modifiers: {
            disabled: [
              {
                after: this.props.maxDate,
                before: this.props.minDate,
              }
            ]
          },
          containerProps: {
            style: {
              minWidth: '270px',
              backgroundColor: containerBackground
            }
          }
        }}
        formatDate={formatDate}
        parseDate={parseDate}
        onDayChange={this.handleDayChange}
        format={this.props.format || "MM/DD/YYYY"}
        inputProps={this.props.inputProps}
      />
    );
  }
}

DatePicker.propTypes = {
  customStyle: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  parseDate: PropTypes.func,
  formatDate: PropTypes.func,
  onClick: PropTypes.func,
  localeTimeZone: PropTypes.string,
  selectedDay: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  minDate: PropTypes.instanceOf(Date),  
  maxDate: PropTypes.instanceOf(Date),
  inputProps: PropTypes.object
};