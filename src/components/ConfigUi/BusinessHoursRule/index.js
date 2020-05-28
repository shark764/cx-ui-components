import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/map';

import dotsIcon from './three_dots.png'
import WeekdayPicker from './../WeekdayPicker';
import DatePicker from './../../General/DatePicker';
import Timepicker from './../../General/Timepicker';
import CloseIconSVG from './../../Icons/CloseIconSVG';
import PlusIconSVG from './../../Icons/PlusIconSVG';
import BlackoutRecurringExceptionSVG from './../../Icons/BlackoutRecurringExceptionSVG';
import OneTimeBlackoutExceptionSVG from './../../Icons/OneTimeBlackoutExceptionSVG';
import OneTimeExtendedHoursSVG from './../../Icons/OneTimeExtendedHoursSVG';
import RegularHoursSVG from './../../Icons/RegularHoursSVG';
import Button from './../Button';

const OutsideWrapper = styled.div`
    word-break: initial;
    display: inline-block;
    border: 1px solid #E1E1E1;
    background-color: #F7F7F7;
    min-width: 1484px;
    ${props =>
      props.disabled &&
      css`
        cursor: not-allowed;
        color: gray;
      `};
`;
const Icon = styled.div`
    height: 40px;
    width: 40px;
    background-color: #F1D29D;
    display: inline-block;
    border-radius: 4px;
    vertical-align: top;
`;
const TopBar = styled.div`
    background-color: #FFF;
    color: #979797;
    font-size: 24px;
    padding: 7px 11px;
    border-bottom: 1px solid #E1E1E1;
    ${props =>
      props.disabled &&
      css`
        cursor: not-allowed;
        color: gray;
      `};
`;
const Content = styled.div`
    min-height: 100px;
    padding: 20px;
    display: flex;
`;
const Column = styled.div`
    display: inline-block;
    vertical-align: top;
    min-width: ${props => props.isMiddleContainer ? '578px' : 'auto'};
    ${props => props.divider && `
      border-left: 1px solid #C6C6C6;
      margin-left: 20px;
      padding-left: 20px; 
    `}
`;
const Label = styled.label`
  min-width: ${props => props.compress ? 'none' : '85px'};
  display: inline-block;
  font-size: 16px;
  text-align: ${props => props.alignLeft ? 'left' : 'right'};
  margin-right: 9px;
  vertical-align: top;
  color: #979797;
  line-height: 30px;
`;

const InputError = "1px solid red;box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px inset, rgba(0, 0, 0, 0.05) 0px -1px 0px inset;";

const Name = styled.input`
  border: ${props => props.error ? InputError : 'transparent'};
  color: #979797;
  line-height: 40px;
  margin-left: 10px;

  width: 1100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: gray;
      background: inherit;
    `};
`;
const Row = styled.div`
  margin-bottom: 16px;
  display: flex;
  min-height: ${props => props.height ? `${props.height}px` : 'auto'};
`;
const Input = styled.input`
  width: ${props => props.width ? props.width : 'auto'};
  vertical-align: top;
  background-color: #FFF;
  border: ${props => props.error ? InputError : '1px solid #EAEAEA;'};
  height: 30px;
  padding: 5px 10px;
  margin-right: 9px;
  &:disabled {
    text-indent: 1px;
    text-overflow: '';
    color: #999999;
    background-color: #fafafa;
    cursor: not-allowed;
  }
  ${props =>
    props.disabled &&
    css`
      text-indent: 1px;
      text-overflow: '';
      color: #999999;
      background-color: #fafafa;
      cursor: not-allowed;
  `};
`;
const TextArea = styled.textarea`
  background-color: white;
  border: ${props => props.error ? InputError : '1px solid #EAEAEA;'};
  width: 235px;
  min-height: 75px;
  padding: 5px 10px;
  ${props =>
    props.disabled &&
    css`
      text-indent: 1px;
      text-overflow: '';
      color: #999999;
      background-color: #fafafa;
      cursor: not-allowed;
    `};
`;
const Select = styled.select`
  background-color: white;
  border: ${props => props.error ? InputError : '1px solid #EAEAEA;'};
  font-size: 16px;
  height: 30px;
  padding: 5px 10px;
  width: ${props => props.compress ? 'auto' : '235px'};
  &:required:invalid {
    color: #979797;
  }
  & option {
    color: #444;
  }
  &:disabled {
    text-indent: 1px;
    text-overflow: '';
    color: #999999;
    background-color: #fafafa;
    cursor: not-allowed;
  }
  &:not(:disabled) {
    background-repeat: no-repeat;
    background-position: right 5px center;
    background-size: 10px 10px;
  }
  ${props =>
    props.disabled &&
    css`
      text-indent: 1px;
      text-overflow: '';
      color: #999999;
      background-color: #fafafa;
      cursor: not-allowed;
    `};
  margin-right: ${props => props.compress ? '16px' : 'none'};
  `
  const Actions = styled.ol`
  clear: both;
  position: relative;
  margin: 0px;
  list-style: none;
  padding-left: 2%;
  box-shadow: 0 6px 4px -6px black;
`;
const ActionItem = styled.li`
  font-size: 16px;
  background-color: #FFFFFF;
  display: block;
  color: #8E8E8E;
  position: relative;
  min-width: 150px;
  padding-left: 10px;
  padding-top: 10px;
  height: 35px;
  &:hover {
    border-left: 7px solid #0080FF;
    background-color: #CEECF5;
    color: #8E8E8E;
    min-width: 130px;
    padding-left: 5px;
    cursor: pointer;
  }
  &:before {
    content: counter(inst);
    background: rgba(255, 150, 0, 0.35);
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    font-style: italic;
    text-shadow: 1px 1px rgba(255, 150, 0, 0.5);
    border-radius: 0 0.675em 0.675em 0;
    font-size: 1.5em;
    text-align: center;
    padding-top: 0;
    padding-left: 2.25%;
    left: -5%;
    top: -0.65em;
    height: 1.35em;
    width: 1.35em;
    position: absolute;
    transition: all 0.2s ease-in-out;
    z-index: -1;
  }
`;
const CancelButton = styled(Button)`
  margin-right: 5px;
  width: 85px;
  height: 36px;
  font-size: 14px;
  padding: 3px 15px !important;
`;
const SaveButton = styled(Button)`
  max-width: 85px;
  font-size: 12px;
  padding: 3px 15px !important;
  &:disabled {
    cursor: not-allowed;
  }
`;
const AddButton = styled(Button)`
  margin-right: 5px;
  width: 30px;
  height: 30px;
  font-size: 14px;
  padding: 0 !important;
  ${props =>
    props.disabled &&
    css`
      text-indent: 1px;
      text-overflow: '';
      color: #999999;
      background-color: #fafafa;
      cursor: not-allowed;
    `};
`;
const CloseIcon = styled(CloseIconSVG)`
  margin-top: 5px;
  ${props =>
    props.disabled &&
    css`
      text-indent: 1px;
      text-overflow: '';
      color: #999999;
      background-color: #fafafa;
      cursor: not-allowed;
    `};
`;

const types = [
  {label: 'Regular Hours', value: 'recurring-hours'}, 
  {label: 'One-Time Extended Hours', value: 'one-time-extended-hours'},
  {label: 'Blackout Exceptions', value: 'blackout-recurring-exceptions'},
  {label: 'Blackout One Time Exceptions', value: 'blackout-one-time-exceptions'}
]
const repeats = [
  {label: 'Daily', value: 'daily'}, 
  {label: 'Weekly', value: 'weekly'},
  {label: 'Monthly', value: 'monthly'},
  {label: 'Yearly', value: 'yearly'}
]
const repeatsOn = [
  {label: 'Day', value: 'day'},
  {label: 'First', value: 'first'},
  {label: 'Second', value: 'second'},
  {label: 'Third', value: 'third'},
  {label: 'Fourth', value: 'fourth'},
  {label: 'Last', value: 'last'}
]
const repeatsOnDay = [
  {label: 'Day', value: 'day'},
  {label: 'Weekday', value: 'weekday'},
  {label: 'Weekend Day', value: 'weekend-day'},
  {label: 'Sunday', value: 'sunday'},
  {label: 'Monday', value: 'monday'},
  {label: 'Tuesday', value: 'tuesday'},
  {label: 'Wednesday', value: 'wednesday'},
  {label: 'Thursday', value: 'thursday'},
  {label: 'Friday', value: 'friday'},
  {label: 'Saturday', value: 'staruday'}
]
const repeatsYearlyMonthsInterval = [
  {label: 'January', value: 'january'}, 
  {label: 'February', value: 'february'},
  {label: 'March', value: 'march'},
  {label: 'April', value: 'april'},
  {label: 'May', value: 'may'},
  {label: 'June', value: 'june'},
  {label: 'July', value: 'july'},
  {label: 'August', value: 'august'},
  {label: 'September', value: 'september'},
  {label: 'October', value: 'october'},
  {label: 'November', value: 'november'},
  {label: 'December', value: 'december'}
]

export default class BusinessHoursRule extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      byDate: props.rule.endDate ? 'by' : 'none',
      outsideClick: fromEvent(document, 'click')
        .map(({ target }) => {
          if (!this.props.viewOnly && this.props.showActions) {
            if (this.actionsMenuRef.current.contains(target)) {
              return;
            }
            this.setState({showMenu: false});
          }
        })
        .subscribe(),
    };
    this.actionsMenuRef = React.createRef();
    this.isRelativeKeyword;
  }

  showMenu = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu
    }));
  }

  componentWillUnmount() {
    this.state.outsideClick.unsubscribe();
  }

  handleRuleName = (e) => {
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      name: e.target.value
    });
  }

  handleRuleType = (e) => {
    if (e.target.value.includes('one-time')) {
      this.props.onChange({
        id: this.props.rule.id,
        type: e.target.value,
        name: this.props.rule.name,
        description: this.props.rule.description,
        startDate: this.props.rule.startDate,
        hours: this.props.rule.hours,
        repeats: 'none'
      });
      this.setState({
        byDate: 'none'
      })
    } else {
      const {repeats, ...ruleNoRepeat } = this.props.rule;
      this.props.onChange({
        id: this.props.rule.id,
        ...ruleNoRepeat,
        ...(repeats !== 'none' ? {repeats} : {}),
        type: e.target.value
      });
  }
  }

  handleRuleDescription = (e) => {
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      description: e.target.value
    });
  }

  handleRuleRepeats= (e) => {
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      repeats: e.target.value,
      every: (e.target.value === 'yearly' || (this.props.rule && this.props.rule.repeats === 'yearly')) 
        && e.target.value !== this.props.rule.repeats ? 
          undefined :
          this.props.rule.every
    });
  }

  handleRuleRepeatsEvery = (e) => {
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      every: !this.props.rule || this.props.rule.repeats !== 'yearly' ? parseInt(e.target.value, 10) : e.target.value,
    });
  }

  handleRuleRepeaOnEvery = (e) => {
    if (this.props.rule.repeats==='weekly') {
      this.props.onChange({
        ...this.props.rule,
        on: e
      });
    } else if (this.props.rule.on && this.props.rule.on.value && typeof this.props.rule.on.value !== 'number' && e.target.value !== 'day') {
      this.isRelativeKeyword = true;
      this.props.onChange({
        ...this.props.rule,
        id: this.props.rule.id,
        on: {
              type: this.props.rule.on.type,
              value: e.target.value
            }
      });
    } else if (e.target.value === 'day') {
      this.isRelativeKeyword = false;
      this.props.onChange({
        ...this.props.rule,
        id: this.props.rule.id,
        on: {
              type: e.target.value 
            }
      });
    } else {
      this.isRelativeKeyword = true;
      this.props.onChange({
        ...this.props.rule,
        id: this.props.rule.id,
        on: {
              value: e.target.value 
            }
      });
    }
  }

  handleRuleRepeaOnEveryDay = (e) => {
    this.isRelativeKeyword = true;
    if(this.props.rule && this.props.rule.on.value !== undefined) {
      this.props.onChange({
        ...this.props.rule,
        id: this.props.rule.id,
        on: { 
            value: this.props.rule.on.value, 
            type: e.target.value
            }
      });
    } else {
      this.props.onChange({
        ...this.props.rule,
        id: this.props.rule.id,
        on: { 
            type: e.target.value
            }
      });
    }
  }

  handleRuleRepeaOnEveryDayValue = (e) => {
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      on: { 
            type:this.props.rule.on.type, 
            value: parseInt(e.target.value) 
          }
    });
  }

  handleDate = (e, isStartDate) => {
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      [isStartDate ? 'startDate' : 'endDate']: e
    });
  }

  handleEndByDate = (e) => {
    this.setState({
      byDate: e.target.value
    });
    if(e.target.value==='none'){
      this.props.onChange({
        ...this.props.rule,
        id: this.props.rule.id,
        endDate: undefined,   
      });
    }
  }

  handleRuleHoursInterval = (e) => {
    let hours, hoursInterval;
    hoursInterval = this.props.rule.hours;
    if ((e.target.value === 'partial' && hoursInterval === undefined) || (hoursInterval && hoursInterval.allDay && hoursInterval.intervals === undefined)) {
      hours = {
        allDay: false,
        intervals: [
          {
            start: 0,
            end: 1440,
          }
        ]
      }
    } else {
      hours = {
        allDay: true
      }
    }
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      hours
    });
  }

  //  fn to update arrays specific values (hours intervals) using index as position
  updateArrayFn = (array, index, start, end) => {
    if (start === undefined || end === undefined) {
      return array.slice(0, index).concat(array.slice(index + 1, array.length))
    }
    return array.map((item, i) => index === i ? { start, end } : item);
  }

  handleRuleStartTime = (index, item, e) => {
    let newStartTime = this.updateArrayFn(this.props.rule.hours.intervals, index, e, item.end);
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      hours: {
        ...this.props.rule.hours,
        intervals: newStartTime
      }
    });
  }

  handleRuleEndTime = (index, item, e) => {
    let newEndTime = this.updateArrayFn(this.props.rule.hours.intervals, index, item.start, e);
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      hours: {
        ...this.props.rule.hours,
        intervals: newEndTime
      }
    });
  }

  handleRemoveHourInterval = (index) => {
    let newInterval = this.updateArrayFn(this.props.rule.hours.intervals, index);
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      hours: {
        ...this.props.rule.hours,
        intervals: newInterval
      }
    });
  }

  addPartialHour = (e) => {
    e.preventDefault();
    const newIntervals = this.props.rule.hours.intervals.concat(
      {
        start: 0,
        end: 1440,
      }
    )
    this.props.onChange({
      ...this.props.rule,
      id: this.props.rule.id,
      hours: {
        ...this.props.rule.hours,
        intervals: newIntervals
      }
    });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.cancel({
      id: this.props.rule.id,
      cancel: true
    });
  }

  handleSaveException = (e) => {
    e.preventDefault();
    // For saved values in api we will set showActions to true, so it will display the action list (Copy/Delete)
    this.props.onSave({
      ...this.props.rule,
    });
  }

  render() {
    const datePickerStyle = {
      width: '165px',
      backgroundColor: '#FFFFFF'
    };
    const datePickerErroredStyle = {
      width: '165px',
      backgroundColor: '#FFFFFF',
      border: '1px solid red',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px inset, rgba(0, 0, 0, 0.05) 0px -1px 0px inset'
    };

    return (
      <OutsideWrapper disabled={this.props.disabled}>
        <TopBar disabled={this.props.disabled}>
        {this.props.rule.type === undefined &&
          <Icon />
        }
        {this.props.rule.type === 'blackout-recurring-exceptions' &&
          <BlackoutRecurringExceptionSVG size={40} />
        }
        {this.props.rule.type === 'blackout-one-time-exceptions' &&
          <OneTimeBlackoutExceptionSVG size={40} />
        }
        {this.props.rule.type === 'one-time-extended-hours' &&
          <OneTimeExtendedHoursSVG size={40} />
        }
        {this.props.rule.type === 'recurring-hours' &&
          <RegularHoursSVG size={40} />
        }
          <Name
            type="text"
            title={this.props.rule && this.props.rule.name}
            error={this.props.error && this.props.error.name}
            name="name"
            value={this.props.rule.name}
            onChange={this.handleRuleName}
            placeholder="(Name)"
            disabled={this.props.disabled}
          />
          <div 
            style={{float: 'right', marginTop: '2px'}}
            ref={this.actionsMenuRef}>
            {!this.props.viewOnly && !this.props.showActions &&
              <Fragment>
                <CancelButton
                  buttonType="secondary"
                  onClick={this.handleCancel}
                >
                  Cancel
                </CancelButton>
                <SaveButton 
                  buttonType="primary"
                  disabled={this.props.disabled || !this.props.saveException} //  Prop that validates if the form has all required fields in parent to save the rule
                  onClick={this.handleSaveException}
                >
                  Save Exception
                </SaveButton>
              </Fragment>
            }
            {!this.props.viewOnly && this.props.showActions && 
              <Fragment>
                <img
                  onClick={this.showMenu} 
                  src={dotsIcon}
                  style={{width:'35px', height:'35px', cursor:'pointer', float: 'right'}} 
                  alt="ruleActions"
                />
                  {this.state.showMenu ? (
                  <Actions>
                    {Object.entries(this.props.actions).map(([label, f]) =>
                      <Fragment>
                        <ActionItem
                          key={`${this.props.rule ? this.props.rule.id : label}`}
                          onClick={(e) => {
                            f(this.props.rule);
                            this.showMenu(e);
                          }}
                        >
                          {label}
                        </ActionItem>
                      </Fragment>
                    )}
                  </Actions>) : (null)}
              </Fragment>
            }
          </div>
        </TopBar>
        <Content>
          <Column>
            <Row>
              <Label htmlFor="type">Type</Label>
              <Select
                name="type"
                error={this.props.error && this.props.error.type}
                value={(this.props.rule && this.props.rule.type)||""}
                onChange={this.handleRuleType}
                disabled={this.props.disabled}>
                  <Fragment>
                    <option disabled hidden value="">
                      Select
                    </option>
                    {types.map((ruleType) =>
                      <option 
                        key={ruleType.value} 
                        value={ruleType.value}
                      >
                          {ruleType.label}
                      </option>
                    )}
                  </Fragment>
              </Select>
            </Row>
            <Row>
              <Label htmlFor="description" compress>Description</Label>
              <TextArea 
                style={{marginLeft: '5px'}}
                name="description"
                error={this.props.error && this.props.error.description}
                value={this.props.rule && this.props.rule.description}
                onChange={this.handleRuleDescription}
                placeholder="Text..."
                disabled={this.props.disabled}
              />
            </Row>
          </Column>
          <Column
            isMiddleContainer
          >
            <Row>
              <Label htmlFor="repeats">Repeats</Label>
              <Select
                name="repeats"
                error={this.props.error && this.props.error.repeats}
                compress
                disabled={this.props.disabled || (this.props.rule.type && this.props.rule.type.includes('one-time'))}
                value={(this.props.rule && this.props.rule.repeats)||""}
                onChange={this.handleRuleRepeats}>
                  <Fragment>
                    <option disabled hidden value="">
                      Select
                    </option>
                    {repeats.map((ruleRepeat) =>
                      <Fragment>
                        <option 
                          key={ruleRepeat.value} 
                          value={ruleRepeat.value}>
                            {ruleRepeat.label}
                        </option>
                        {this.props.rule.type && this.props.rule.type.includes('one-time') && 
                          <option 
                            key='none' 
                            value='none'>
                            None
                          </option>
                        }
                      </Fragment>
                    )}
                  </Fragment>
              </Select>
              {(!this.props.rule.type || !this.props.rule.type.includes('one-time')) && 
                <Label htmlFor="ruleRepeatsEvery" compress>Every</Label>}
              {(!this.props.rule || 
                (this.props.rule && this.props.rule.repeats !== 'yearly') && 
                (!this.props.rule.type || !this.props.rule.type.includes('one-time'))) && 
                <Input 
                  name="every"
                  error={this.props.error && this.props.error.every}
                  disabled={this.props.disabled}
                  onChange={this.handleRuleRepeatsEvery} 
                  value={(this.props.rule && this.props.rule.every)||""}
                  width="45px" 
                  compress
                />
              }
              {this.props.rule && this.props.rule.repeats === 'daily' && 
                (!this.props.rule.type || !this.props.rule.type.includes('one-time')) &&
                <Label compress>day(s)</Label>
              }
              {this.props.rule && this.props.rule.repeats === 'weekly' &&
                (!this.props.rule.type || !this.props.rule.type.includes('one-time')) && 
                <Label compress>week(s)</Label>
              }
              {this.props.rule && this.props.rule.repeats === 'monthly' &&
                (!this.props.rule.type || !this.props.rule.type.includes('one-time')) && 
                <Label compress>month(s)</Label>
              }
              {this.props.rule && this.props.rule.repeats === 'yearly' &&
                (!this.props.rule.type || !this.props.rule.type.includes('one-time')) && (
                <Select
                  name="every"
                  error={this.props.error && this.props.error.every}
                  compress
                  value={(this.props.rule && this.props.rule.every)||""}
                  onChange={this.handleRuleRepeatsEvery}
                  disabled={this.props.disabled}
                >
                  <Fragment>
                    <option disabled hidden value="">
                      Select
                    </option>
                    {repeatsYearlyMonthsInterval.map((ruleRepeatYearlyMonthInterval) => 
                      <option 
                        key={ruleRepeatYearlyMonthInterval.value} 
                        value={ruleRepeatYearlyMonthInterval.value}
                      >
                        {ruleRepeatYearlyMonthInterval.label}
                      </option>
                    )}
                  </Fragment>
                </Select>
              )}
            </Row>
            <Row
              height={30}>
              {(!this.props.rule.type || !this.props.rule.type.includes('one-time')) && 
                (!this.props.rule.repeats || this.props.rule.repeats !== 'daily') &&
                <Label htmlFor="on">On</Label>}
              {(this.props.rule && this.props.rule.repeats !=='monthly' && this.props.rule.repeats !== 'yearly') &&
                (!this.props.rule.type || !this.props.rule.type.includes('one-time')) &&
                (!this.props.rule.repeats || this.props.rule.repeats !== 'daily') &&
                <WeekdayPicker
                  id={this.props.rule && this.props.rule.id}
                  name="on"
                  error={this.props.error && this.props.error.on && this.props.error.on.type === undefined}
                  readOnly={
                    this.props.disabled || 
                    (this.props.rule && 
                      this.props.rule.repeats !== 'weekly')}
                  onClick={this.handleRuleRepeaOnEvery}
                  activeDays={(this.props.rule && Array.isArray(this.props.rule.on) && this.props.rule.on)||[]} 
                />
              }
              {(!this.props.rule || (this.props.rule.repeats ==='monthly' || this.props.rule.repeats === 'yearly')) &&
                (!this.props.rule.type || !this.props.rule.type.includes('one-time')) && 
                (!this.props.rule.repeats || this.props.rule.repeats !== 'daily') && (
                <Fragment>
                  <Select
                    name="onType"
                    error={this.props.error && this.props.error.on && 
                      ((this.props.rule && this.props.rule.on && this.props.rule.on.type === 'day' && this.props.error.on.type) || 
                      this.props.error.on.value)}
                    compress
                    value={(this.props.rule && 
                            this.props.rule.on &&
                            ((this.props.rule.on.value !== undefined && this.props.rule.on.value) ||
                              (this.props.rule.on.type !== undefined && this.props.rule.on.type === 'day' && this.props.rule.on.type)
                            ))
                        ||""}
                    onChange={this.handleRuleRepeaOnEvery}
                    disabled={this.props.disabled}
                  >
                      <Fragment>
                        <option disabled hidden value="">
                          Select
                        </option>
                        {repeatsOn.map((repeatOn) => 
                          <option 
                            key={repeatOn.value} 
                            value={repeatOn.value}>
                              {repeatOn.label}
                          </option>
                        )}
                      </Fragment>
                  </Select>
                  {this.props.rule && 
                    (this.props.rule.repeats === 'monthly' || this.props.rule.repeats === 'yearly') && this.props.rule.on && this.props.rule.on.value &&
                    typeof this.props.rule.on.value === 'string' && (this.props.rule.on === undefined || this.props.rule.on.type !== 'day' || this.isRelativeKeyword === undefined || this.isRelativeKeyword) &&
                    <Select
                      name="onValue"
                      error={this.props.error && this.props.error.on && this.props.error.on.type}
                      compress
                      disabled={this.props.disabled || (!this.props.rule || !this.props.rule.on)}
                      value={(this.props.rule && 
                        this.props.rule.on && this.props.rule.on.value !== undefined && this.props.rule.on.type !== undefined &&
                        (typeof this.props.rule.on.value === 'string' && this.props.rule.on.type || this.props.rule.on.value))
                    ||""}
                      onChange={this.handleRuleRepeaOnEveryDay}
                    >
                      <Fragment>
                        <option disabled hidden value="">
                          Select
                        </option>
                        {repeatsOnDay.map((repeatOnDay) => 
                          <option
                            key={repeatOnDay.value}
                            value={repeatOnDay.value}
                          >
                            {repeatOnDay.label}
                          </option>
                        )}
                      </Fragment>
                    </Select>
                  }
                  {this.props.rule && ((this.props.rule.repeats === 'yearly' || this.props.rule.repeats === 'monthly') && 
                   this.props.rule.on && this.props.rule.on.type === 'day' && typeof this.props.rule.on.value !== 'string'  && (this.isRelativeKeyword !== undefined || !this.isRelativeKeyword)) &&
                    <Input
                      type='number'
                      name="onValue"
                      error={this.props.error && this.props.error.on && this.props.error.on.value}
                      disabled={this.props.disabled || (!this.props.rule || !this.props.rule.on || !this.props.rule.on.type)}
                      width="100px"
                      value={(this.props.rule && this.props.rule.on && this.props.rule.on.value)||""}
                      onChange={this.handleRuleRepeaOnEveryDayValue}
                    />
                  }
                </Fragment>
              )}
            </Row>
            <Row>
              <Label htmlFor="startDate">Start</Label>
              <DatePicker
                name="startDate"
                onClick={(e) => this.handleDate(e, true)}
                selectedDay={this.props.rule && this.props.rule.startDate}
                customStyle={this.props.error && this.props.error.startDate ? datePickerErroredStyle : datePickerStyle}
                localeTimeZone="us"
                format="LL"
                disabled={this.props.disabled}
              />
              <Label 
                htmlFor="endDate" 
                compress 
                style={{marginLeft: '15px'}}
              >
                End
              </Label>
              <Select
                name="byDate"
                error={this.props.error && this.props.error.byDate}
                onChange={this.handleEndByDate} 
                disabled={this.props.disabled || 
                    (this.props.rule.type !== undefined && 
                    (this.props.rule.type === 'one-time-extended-hours' || 
                    this.props.rule.type==='blackout-one-time-exceptions'))
                  }
                value={this.state.byDate}
                compress
              >
                <option value="none">None</option>
                <option value="by">By</option>
              </Select>
              {this.state.byDate !== 'none' &&
              <DatePicker
                name="endDate"
                placeholder={
                  (this.props.rule.type !== undefined && 
                    (this.props.rule.type === 'one-time-extended-hours' || 
                    this.props.rule.type==='blackout-one-time-exceptions') || '') ||
                    (this.state.byDate !== undefined && this.state.byDate === 'none' || '')
                  }
                onClick={(e) => this.handleDate(e)} 
                selectedDay={this.props.rule && this.props.rule.endDate}
                customStyle={this.props.error && this.props.error.endDate ? datePickerErroredStyle : datePickerStyle}
                minDate={this.props.rule && this.props.rule.startDate}
                localeTimeZone="us"
                format="LL"
                disabled={(
                  (this.props.disabled) ||
                  (this.state.byDate==='none') || 
                  (this.props.rule.startDate === undefined) || 
                  (this.props.rule && !this.props.rule.startDate) ||
                  (this.props.rule.type !== undefined && 
                    (this.props.rule.type === 'one-time-extended-hours' || 
                    this.props.rule.type==='blackout-one-time-exceptions')))
                }
              />}
            </Row>
          </Column>
          <Column divider>
            <Row>
              <Label alignLeft>Hours</Label>
              <Input 
                type="radio"
                key={`allDayDuration${this.props.rule ? this.props.rule.id : ''}`}
                name={`allDayDuration${this.props.rule ? this.props.rule.id : ''}`}
                checked={(this.props.rule && this.props.rule.hours && this.props.rule.hours.allDay)||false}
                value="all" 
                onChange={this.handleRuleHoursInterval}
                disabled={this.props.disabled}
              />
              <Label alignLeft>All Day</Label>
              <Input
                type="radio" 
                key={`partialDayDuration${this.props.rule ? this.props.rule.id : ''}`}
                name={`partialDayDuration${this.props.rule ? this.props.rule.id : ''}`}
                checked={(this.props.rule && this.props.rule.hours && this.props.rule.hours.allDay === false)||false}
                value="partial"
                onChange={this.handleRuleHoursInterval}
                disabled={this.props.disabled} 
              />
              <Label alignLeft htmlFor={`partialDayDuration${this.props.rule ? this.props.rule.id : ''}`}>Partial Day</Label>
              {this.props.rule && this.props.rule.hours && this.props.rule.hours.allDay === false && 
                <AddButton 
                  buttonType="secondary"
                  onClick={this.addPartialHour}
                  disabled={this.props.disabled}
                >
                  <PlusIconSVG 
                    size={13}
                    plusIconType='secondary'
                    disabled={this.props.disabled}
                    />
                </AddButton>
              }
            </Row>
            {this.props.rule && this.props.rule.hours && this.props.rule.hours.intervals && !this.props.rule.hours.allDay && 
              this.props.rule.hours.intervals.map((item, index) => 
              <Row key={`timePickerRow${index}`}>
                <div
                  key={`startTimeContainer${index}`}
                  style={{display: 'flex'}}
                >
                  <Label
                    key={`startTime${index}`}
                    alignLeft
                  >
                    Start Time
                  </Label>
                  <Timepicker
                    key={`startTimePicker${index}`}
                    error={this.props.error && this.props.error.hours && this.props.error.hours.intervals && this.props.error.hours.intervals[index].start}
                    minutesOnDay={item.start}
                    twelveHoursMode
                    hoursStep={1}
                    minutesStep={5}
                    onChange={(e) => this.handleRuleStartTime(index, item, e)}
                    disabled={this.props.disabled}
                  />
                </div>
                <div 
                  key={`endTimeContainer${index}`} 
                  style={{display: 'flex'}}
                >
                  <Label 
                    key={`endTime${index}`}
                  >
                    End Time
                  </Label>
                  <Timepicker
                    key={`endTimePicker${index}`}
                    error={this.props.error && this.props.error.hours && this.props.error.hours.intervals && this.props.error.hours.intervals[index].end}
                    minutesOnDay={item.end}
                    twelveHoursMode
                    hoursStep={1}
                    minutesStep={5}
                    onChange={(e) => this.handleRuleEndTime(index, item, e)}
                    disabled={this.props.disabled}
                  />&nbsp;&nbsp;
                    {!this.props.disabled &&
                      this.props.rule &&
                      this.props.rule.hours &&
                      this.props.rule.hours.intervals &&
                      this.props.rule.hours.intervals.length > 1 &&
                      <CloseIcon
                        key={`timePickerCloseIcon${index}`}
                        onClick={(e) => this.handleRemoveHourInterval(index, item, e)}
                        closeIconType="secondary"
                        size={20}
                      />
                    }
                </div>
              </Row>
            )}
          </Column>
        </Content>
      </OutsideWrapper>
    )
  }
}

BusinessHoursRule.propTypes = {
  onChange: PropTypes.func.isRequired,
  rule: PropTypes.object.isRequired,
  actions: PropTypes.object,
  cancel: PropTypes.func,
  saveException: PropTypes.bool,
  onSave: PropTypes.func,
  showActions: PropTypes.bool,
  viewOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.object
}