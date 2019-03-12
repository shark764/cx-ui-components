import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from './../../../constants';

const StyledInput = styled.input`
  border: none;
  outline: none;
  height: 38px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  border-style: ${props => props.border && props.isActive ? 'solid' : 'none'};
  border-color: ${props => props.isActive ? (props.activeColor || colors.skylightBlue) : '#DCDCDC' };
`;

export default class Input extends Component {

  constructor(props){
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.state = {
      value: '',
      isActive: false
    };
  };

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  onKeyDown = e => {
    this.props.onKeyDown(e);
    if(e.keyCode === 13) {
      this.setState({value: ''});
    };
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <StyledInput
        id={this.props.id}
        name={this.props.name}
        className={this.props.className}
        onFocus={this.toggleActive}
        onBlur={this.toggleActive}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
        value={this.state.value}
        border={this.props.border}
        isActive={this.state.isActive}
        activeColor={this.props.activeColor}/>
    );
  };
};

Input.propTypes = {
  /** Enable or disable the input's border */
  border: PropTypes.bool,
  /** Outline color when the input is active */
  activeColor: PropTypes.string,
  /** Input's ID */
  id: PropTypes.string,
  /** Input's name */
  name: PropTypes.string,
  className: PropTypes.string
}

Input.defaultProps = {
  border: true
}