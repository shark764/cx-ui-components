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

const Wrapper = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  display: inline-block;
  overflow: hidden;
`;

class WeekdayPicker extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let active = this.props.activeDays,
        day = e.target.id;
    if(active.indexOf(day) == -1){
        active = active.concat([day]);
    }
    else{
        active = active.filter(e => e !== day)
    }
    this.props.onClick(active);
  }

  render(){
    return (
      <Wrapper disabled={this.props.readOnly}>
        <Day id='sunday'  title='Sunday' active={this.props.activeDays} onClick={!this.props.readOnly ? this.handleClick : undefined} disabled={this.props.readOnly}>S</Day>
        <Day id='monday'  title='Monday' active={this.props.activeDays} onClick={!this.props.readOnly ? this.handleClick : undefined} disabled={this.props.readOnly}>M</Day>
        <Day id="tuesday"  title='Tuesday' active={this.props.activeDays} onClick={!this.props.readOnly ? this.handleClick : undefined} disabled={this.props.readOnly}>T</Day>
        <Day id="wednesday"  title='Wednesday' active={this.props.activeDays} onClick={!this.props.readOnly ? this.handleClick : undefined} disabled={this.props.readOnly}>W</Day>
        <Day id="thursday" title='Thursday' active={this.props.activeDays} onClick={!this.props.readOnly ? this.handleClick : undefined} disabled={this.props.readOnly}>T</Day>
        <Day id="friday"  title='Friday' active={this.props.activeDays} onClick={!this.props.readOnly ? this.handleClick : undefined} disabled={this.props.readOnly}>F</Day>
        <Day id="saturday"  title='Saturday' active={this.props.activeDays} onClick={!this.props.readOnly ? this.handleClick : undefined} disabled={this.props.readOnly}>S</Day>
      </Wrapper>
    )
  }
}

WeekdayPicker.defaultProps = {
  activeDays: []
};

WeekdayPicker.propTypes = {
  activeDays: PropTypes.array,
  onClick: PropTypes.func,
  readOnly: PropTypes.bool
}

export default WeekdayPicker; 