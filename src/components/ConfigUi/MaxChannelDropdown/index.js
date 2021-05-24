import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import MaxIndicatorSVG from '../../Icons/MaxIndicatorSVG';
import Tooltip from '../Tooltip';

const DropdownWrapper = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: flex-end;
`

const Label = styled.label`
  margin-right: 10px;
  margin-left: 8px;
  font-weight: 700;
`

const MaxChannelWrapper = styled.div`
  background-color: ${props => props.disabled ? '#fafafa' : '#FFFFFF'};
  border: 1px solid #EAEAEA;
  width: 100px;
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  & option {
    color: #444;
  }
  ${props =>
    props.disabled &&
    css`
      color: #999999;
      background-color: #fafafa;
      cursor: not-allowed;
    `};
`

const SelectInput = styled.select`
  background-color: ${props => props.disabled ? '#fafafa' : '#FFFFFF'};
  border: none;
  max-width: 65px;
  min-width: 65px;
  width: 75px !important;
  font-size: 16px;
  height: 35px;
  text-align-last: right;
  padding: 5px 10px;
  width: ${props => props.compress ? 'auto' : '110px'};
  &:required:invalid {
    color: #979797;
  }
  & option {
    color: #444;
  }
  &:not(:disabled) {
    background-repeat: no-repeat;
    background-position: right 5px center;
    background-size: 10px 10px;
  }
  ${props =>
    props.disabled &&
    css`
      color: #999999;
      background-color: #fafafa;
      cursor: not-allowed;
    `};
`

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const calculateNumberOfInteractions = (weight) => weight > 4 ? Math.floor(100 / weight) : 1;

class MaxChannelDropdown extends React.Component {
  constructor(props) {
    const numbOfInteractions = calculateNumberOfInteractions(props.weight);
    super(props);
    this.state = {
      numbOfInteractions: numbOfInteractions,
      value: props.dropdownValue
    };
  }

  componentDidUpdate(prevProps) {
    // Updating the value when we received a value directly as a prop
    if (prevProps.dropdownValue !== this.props.dropdownValue) {
      this.setState({ value: this.props.dropdownValue })
    }
    // When we receive a different weight, we use it to calculate the number of interactions and we set the latter as a value
    if (prevProps.weight !== this.props.weight) {
      const numberOfInteractions = calculateNumberOfInteractions(this.props.weight);
      this.setState({ numbOfInteractions: numberOfInteractions });
    }
  }

  render() {
    const itemList = (
      (this.state.numbOfInteractions > 0 ?
        [...Array(this.state.numbOfInteractions + 1).keys()]
        :
        [...Array(1).keys()]
      )).map(i => ({ label: i, value: i }));

    // If itemList > 0, item list should delete the first option with label/value = 0
    if (this.props.weight > 4 && itemList.length > 0) {
      itemList.shift();
    }

    return (
      <DropdownWrapper name={this.props.name}>
        <Label>{this.props.label ? this.props.label : 'Max:'}</Label>
        <MaxChannelWrapper
          disabled={(this.props.weight < 5) || (this.props.weight > 50) || (this.props.disabled)}
        >
          <ConditionalWrapper
            condition={this.props.tooltipText}
            wrapper={children =>
              <Tooltip
                content={this.props.tooltipText}
                tooltipProps={this.props.tooltipProps}
                direction="bottom">{children}</Tooltip>}
          >
            <MaxIndicatorSVG
              size={20}
              weight={this.state.value === this.state.numbOfInteractions ? 100 : this.props.weight}
              maxCapacity={this.state.value === this.state.numbOfInteractions}
            />
          </ConditionalWrapper>
          <SelectInput
            value={this.state.value > 0 ? this.state.value : 0}
            onChange={this.props.onChange}
            disabled={this.props.weight < 5 || this.props.weight > 50 || this.props.disabled}
          >
            {itemList.reverse().map((option, index) => (
              <option value={option.value} key={index.toString()}>{option.label}</option>
            ))}
          </SelectInput>
        </MaxChannelWrapper>
      </DropdownWrapper>
    );
  }
}

MaxChannelDropdown.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  weight: PropTypes.number.isRequired,
  dropdownValue: PropTypes.number,
  tooltipText: PropTypes.string,
  tooltipProps: PropTypes.object
};

MaxChannelDropdown.defaultProps = {
  dropdownValue: 1
}

export default MaxChannelDropdown;