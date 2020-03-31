import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Day = styled.p`
  display: inline-block;
  cursor: default;
  user-select: none;
  transition: 100ms linear all;
  margin: 0;
  padding: 0;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: ${props => props.disabled ? '#999999' : '#656565' };
  border-right: 1px solid #EAEAEA;
  &:last-child {
    border-right: none;
  }
  ${props => !props.disabled && `
    &:hover {
        background-color: #E4F3FE;
        color: #656565;
    }
  `}
  ${props => props.active.includes(props.id) && `
    background-color: #07487a !important;
    color: #FFFFFF !important;
  `}
  ${props => props.disabled && props.active.includes(props.id) && `
    cursor: not-allowed;
  `}
  ${props => props.disabled && !props.active.includes(props.id) &&
    css`
      cursor: not-allowed;
      background-color: #efefef !important;
      color: #656565 !important;
    `};
`;

const InputError = "1px solid red;box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px inset, rgba(0, 0, 0, 0.05) 0px -1px 0px inset;";

const Wrapper = styled.div`
  border: ${props => props.error ? InputError : '1px solid #EAEAEA'};
  border-radius: 4px;
  display: inline-block;
  overflow: hidden;
`;

const weekDays = [
  {id: 'sunday', label: 'S', title: 'Sunday' },
  {id: 'monday', label: 'M', title: 'Monday' },
  {id: 'tuesday', label: 'T', title: 'Tuesday' },
  {id: 'wednesday', label: 'W', title: 'Wednesday' },
  {id: 'thursday', label: 'T', title: 'Thursday' },
  {id: 'friday', label: 'F', title: 'Friday' },
  {id: 'saturday', label: 'S', title: 'Saturday' }
]

class WeekdayPicker extends React.Component{

  handleClick = (e) => {
    let active = this.props.activeDays,
      day = e.target.id;
    if (active.indexOf(day) == -1) {
      active = active.concat([day]);
    } else {
      active = active.filter(e => e !== day)
    }
    this.props.onClick(active);
  }

  render(){
    return (
      <Wrapper error={this.props.error} disabled={this.props.readOnly}>
        {weekDays.map((day) =>
          <Day
            id={day.id}
            key={`${day.id}${this.props.id}`}
            title={day.title}
            active={this.props.activeDays}
            onClick={!this.props.readOnly ? this.handleClick : undefined}
            disabled={this.props.readOnly}
          >
            {day.label}
          </Day>
        )}
      </Wrapper>
    )
  }
}

WeekdayPicker.defaultProps = {
  activeDays: []
};

WeekdayPicker.propTypes = {
  id: PropTypes.string.isRequired,
  activeDays: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  error: PropTypes.bool
}

export default WeekdayPicker; 