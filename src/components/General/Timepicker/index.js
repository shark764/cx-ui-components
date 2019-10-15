import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import downArrow from './down-arrow.png';

const TimepickerContainer = styled.div`
  max-width: ${props => (props.twelveHoursMode ? '200px' : '125px')};
  min-width: ${props => (props.twelveHoursMode ? '170px' : '95px')};
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset, 0 -1px 0 rgba(0, 0, 0, 0.05) inset;
  padding: 2px;
`;

const StyledSelect = styled.select`
  appearance: none;
  width: ${props => (props.twelveHoursMode ? '32%' : '48%')};
  height: 32px;
  border: none;
  box-sizing: border-box;
  box-shadow: none;
  transition: none;
  padding-left: 5px;
  &:disabled {
    text-indent: 1px;
    text-overflow: '';
    color: #999999;
    background-color: #fafafa;
  }
  &:not(:disabled) {
    background-image: url(${downArrow});
    background-repeat: no-repeat;
    background-position: right 5px center;
    background-size: 13px 13px;
  }
`;

export default class Timepicker extends Component {
  constructor(props) {
    super(props);
    const { twelveHoursMode, minutesOnDay } = props;

    let hours = -1;
    let amPm = '';

    if (!minutesOnDay || (twelveHoursMode && minutesOnDay >= 0 && minutesOnDay <= 59)) {
      hours = 12;
    } else if (twelveHoursMode && minutesOnDay >= 780) {
      hours = Math.trunc((minutesOnDay - 720) / 60);
    } else if (minutesOnDay > -1) {
      hours = Math.trunc(minutesOnDay / 60);
    }

    if (twelveHoursMode) {
      amPm = minutesOnDay >= 720 && minutesOnDay < 1440 ? 'pm' : 'am';
    }
    this.state = {
      hours: hours > -1 ? hours * 60 : hours,
      minutes: minutesOnDay && minutesOnDay > -1 ? minutesOnDay % 60 : 0,
      amPm: amPm,
    };
  }

  componentDidUpdate(prevProps) {
    const { minutesOnDay, twelveHoursMode } = this.props;

    if (minutesOnDay !== prevProps.minutesOnDay) {
      let hours = -1;
      let amPm = '';
      if (twelveHoursMode && minutesOnDay >= 780) {
        hours = Math.trunc((minutesOnDay - 720) / 60);
      } else if (twelveHoursMode && minutesOnDay >= 0 && minutesOnDay <= 59) {
        hours = 12;
      } else if (minutesOnDay > -1) {
        hours = Math.trunc(minutesOnDay / 60);
      }

      if (twelveHoursMode) {
        amPm = minutesOnDay >= 720 && minutesOnDay < 1440 ? 'pm' : 'am';
      }

      this.setState({
        hours: hours > -1 ? hours * 60 : hours,
        minutes: minutesOnDay && minutesOnDay > -1 ? minutesOnDay % 60 : 0,
        amPm: amPm,
      });
    }
  }

  onHoursChange = e => {
    const { twelveHoursMode } = this.props;
    const { minutes, amPm } = this.state;

    let minutesOnDay = Math.trunc(e.target.value);

    if (twelveHoursMode && amPm === 'pm' && minutesOnDay < 720 && minutesOnDay > -1) {
      minutesOnDay += 720 + minutes;
    } else if (twelveHoursMode && amPm === 'am' && minutesOnDay === 720) {
      minutesOnDay = 0 + minutes;
    } else if (minutesOnDay > -1) {
      minutesOnDay += minutes;
    }

    this.props.onChange(minutesOnDay);
  };

  onMinutesChange = e => {
    const { hours, amPm } = this.state;

    let minutesOnDay = -1;

    if (hours > -1) {
      minutesOnDay = hours + Math.trunc(e.target.value);
      if (amPm === 'pm' && hours < 720) {
        minutesOnDay += 720;
      } else if (amPm === 'am' && hours === 720) {
        minutesOnDay -= 720;
      }
    }

    this.props.onChange(minutesOnDay);
  };

  onAMPMChange = e => {
    const { twelveHoursMode, minutesOnDay: minutesOnDayProp } = this.props;
    const { minutes, hours } = this.state;
    const amPm = e.target.value;

    let minutesOnDay = -1;

    if (twelveHoursMode && amPm === 'pm' && minutesOnDayProp > 0 && minutesOnDayProp < 720) {
      minutesOnDay = minutesOnDayProp + 720;
    } else if (twelveHoursMode && amPm === 'am' && minutesOnDayProp >= 720 && minutesOnDayProp <= 779) {
      minutesOnDay = 0 + minutes;
    } else if (hours > -1) {
      minutesOnDay = hours + minutes;
    }

    this.props.onChange(minutesOnDay);
  };

  render() {
    let hoursOptions = [];
    const minutesOptions = Array.from({ length: 60 }, (x, i) => ({
      label: `${i >= 10 ? `${i}` : `0${i}`}`,
      value: i,
    })).filter(({ value }) => value % this.props.minutesStep === 0);

    if (this.props.twelveHoursMode) {
      if (this.props.nullOption) {
        hoursOptions.push({
          label: '--',
          value: -1,
        });
      }
      hoursOptions.push(
        ...Array.from({ length: 12 }, (x, i) => ({
          label: `${i + 1}`,
          value: (i + 1) * 60,
        })).filter(({ value }) => value % (this.props.hoursStep * 60) === 0)
      );
    } else {
      hoursOptions.push(
        ...Array.from({ length: 24 }, (x, i) => ({
          label: `${i}`,
          value: i * 60,
        })).filter(({ value }) => value % (this.props.hoursStep * 60) === 0)
      );
    }

    return (
      <TimepickerContainer twelveHoursMode={this.props.twelveHoursMode}>
        <StyledSelect
          id="hoursSelector"
          data-automation="hoursSelector"
          value={this.state.hours}
          onChange={this.onHoursChange}
          twelveHoursMode={this.props.twelveHoursMode}
          disabled={this.props.disabled}
        >
          {hoursOptions.map(({ label, value }) => (
            <option key={value.toString()} value={value}>
              {label}
            </option>
          ))}
        </StyledSelect>
        <span>:</span>
        <StyledSelect
          id="minutesSelector"
          data-automation="minutesSelector"
          value={this.state.minutes}
          onChange={this.onMinutesChange}
          twelveHoursMode={this.props.twelveHoursMode}
          disabled={this.props.minutesOnDay <= -1 || this.props.disabled}
        >
          {minutesOptions.map(({ label, value }) => (
            <option key={value.toString()} value={value}>
              {label}
            </option>
          ))}
        </StyledSelect>
        {this.props.twelveHoursMode && (
          <StyledSelect
            id="ampmSelector"
            data-automation="ampmSelector"
            value={this.state.amPm}
            onChange={this.onAMPMChange}
            twelveHoursMode={this.props.twelveHoursMode}
            disabled={this.props.minutesOnDay <= -1 || this.props.disabled}
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </StyledSelect>
        )}
      </TimepickerContainer>
    );
  }
}

Timepicker.propTypes = {
  minutesOnDay: PropTypes.number,
  twelveHoursMode: PropTypes.bool,
  hoursStep: PropTypes.number,
  minutesStep: PropTypes.number,
  nullOption: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Timepicker.defaultProps = {
  hoursStep: 1,
  minutesStep: 15,
};
