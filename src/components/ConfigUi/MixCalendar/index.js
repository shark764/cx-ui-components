/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
/*for big calendar, share same .css with big Calendar*/
import { Views } from 'react-big-calendar';
import Calendar from '../BigCalendar';
/*for small calendar, share same .css with Calendar*/
import SmallCalendar from '../SmallCalendar';
import styled from 'styled-components';
import React from 'react';
/*Icons SVG*/
import PlusIconSVG from '../../Icons/PlusIconSVG';
import ArrowIcon from '../../Icons/SimpleCaretIconSVG';

/*Styled component*/
const ToolButton = styled.button`
    grid-column-start: ${props => props.CS || "none"};
    grid-row-start: 4;
    background: none;
    background-color: white;
    border: 1px solid #ccc;
    color: #373a3c;
    font-size: 14px;
    line-height: normal;
    white-space: nowrap;
    text-align: center;
    align-content: center;
    vertical-align: middle;
    &:active{
        background-image: none;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        background-color: #e6e6e6;
        border-color: #adadad;
    }
    &:focus {
        color: #373a3c;
        background-color: #e6e6e6;
        border-color: #adadad;
    }
    &:hover {
        color: #373a3c;
        background-color: #e6e6e6;
        border-color: #adadad;
    }
`;

const StyledSLabel = styled.h4`
    color:  ${props=>props.color|| "unset"};
    font-weight: ${props=>props.fontWigt|| "unset"};
    font-size: ${props=>props.fontsz|| "unset"};
    background-color: ${props=>props.bgColor|| "unset"};
    grid-column-start: ${props => props.CS || "unset"};
    grid-column-end: ${props => props.CE || "unset"};
    grid-row-start: ${props => props.RS || "unset"};
    grid-row-end: ${props => props.RE || "unset"};
    overflow: ${props => props.ovrflw || 'unset'};
    margin: ${props => props.mrgn || 'unset'};
    padding: ${props => props.paddng || 'unset'};
    text-align: ${props=>props.txtaln || 'unset'};
`;

const Styledpane = styled.div`
    color:  ${props=>props.color|| "unset"};
    background-color: ${props=>props.bgColor|| "unset"};
    width: ${props=>props.width|| 'unset'};
    height: ${props=>props.hight|| 'unset'};
    display: ${props=>props.display|| 'unset'};
    grid-template-columns: ${props=>props.TCol|| 'unset'};
    grid-template-rows: ${props=>props.TRow|| 'unset'};
    grid-column-gap: ${props=>props.Cgap|| 'unset'};
    grid-row-gap: ${props=>props.Rgap|| 'unset'};
    border: ${props=>props.border|| 'unset'};
    border-radius : ${props=>props.borderRadius|| 'unset'};
    min-width: ${props=>props.miWid|| 'unset'};
    max-width: ${props=>props.mxWid|| 'unset'};
    min-height: ${props=>props.mihigh|| 'unset'};
    max-height: ${props=>props.mxhigh|| 'unset'};
    grid-column-start: ${props => props.CS || "unset"};
    grid-column-end: ${props => props.CE || "unset"};
    grid-row-start: ${props => props.RS || "unset"};
    grid-row-end: ${props => props.RE || "unset"};
    overflow: ${props => props.ovrflw || 'unset'};
    margin: ${props => props.mrgn || 'unset'};
    padding: ${props => props.paddng || 'unset'};
`;

const StyledCheckBox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid #cacece;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
  padding: 10px;
  height: 22px;
	border-radius: 4px;
	display: inline-block;
  align-self: center;
	position: relative;
  grid-column-start: 1;
  background-color: ${props => props.bgColor || 'unset'};
  &:active, :checked:active{
      box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
  }
  &:checked {
      border: 1px solid #adb8c0;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
      color: #99a1a7;
  }
  &:checked:after {
      content: "\u2714";
      font-size: 20px;
      position: absolute;
      top: 0px;
      left: 3px;
      color: white;
  }
`;

//default EventType props
/*
EventType object should contain:
id:number,
state:boolean,
name:string,
color:string
*/

//default big calendar event props
/*
Event object should contain:
id:number,
title:string,
start:Date obj,
end:Date obj,
eventType:string
*/

//Const
const monthList = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' ,'November', 'December'];

//toolbar with view buttons
const Toolbar = props => {
  return(
    <Styledpane display="grid" hight="100px" width="232px" TCol="25% 25% 25% 25%" TRow="20% 35% 15% 30%">
      <Styledpane CS="1" CE="2" RS="2" RE="3" paddng="7px 0 0 34px" onClick={props.DeMonth}>
        <div>
          <ArrowIcon direction="left" size={20}></ArrowIcon>
        </div>
      </Styledpane>
      <StyledSLabel CS="2" CE="4" RS="2" fontsz="20px" fontWigt="400" mrgn="5px 0 0 0" txtaln="center">{monthList[props.date.getMonth()].slice(0, 3)+" "+props.date.getFullYear()}</StyledSLabel>
      <Styledpane CS="4" CE="5" RS="2" RE="3" paddng="7px 0 0 0" onClick={props.InMonth}>
        <div>
          <ArrowIcon direction="right" size={20}></ArrowIcon>
        </div>
      </Styledpane>
      <ToolButton CS="1" style={{borderRadius: "4px 0px 0px 4px"}} onClick={()=>{props.changeBCView("day")}}>Day</ToolButton>
      <ToolButton CS="2" onClick={()=>{props.changeBCView("week")}}>Week</ToolButton>
      <ToolButton CS="3" onClick={()=>{props.changeBCView("month")}}>Month</ToolButton>
      <ToolButton CS='4' style={{borderRadius:"0px 4px 4px 0px"}} onClick={()=>{props.changeBCView("year")}}>Year</ToolButton>
    </Styledpane>
  )
}

//labels
const Label = props => {
  return (
    <div key="eventTypeKey">
      <Styledpane display="grid" TCol="160px 35px">
        <StyledSLabel margin="0 0 0 -15px" paddng="10px 0 0 0" color="rgba(128, 128, 128, 0.787)" fontsz="26px" fontWigt= "400">Sections</StyledSLabel>
        <button style={{display: "none",height: "22px",margin:"15px 0 0 0",width: "fit-content",backgroundColor: "white",border: "1px solid #ccc",borderRadius: "3px"}}><PlusIconSVG size={14} plusIconType="primary"></PlusIconSVG></button>
      </Styledpane>
      <Styledpane paddng="26px 0 0 0" display="grid" width="200px">
        {props.eventType.map((obj)=>{
          return <Styledpane display="grid" TCol="22px 175px" Cgap="8px" paddng="5px 0 0 0">
          <StyledCheckBox type="checkbox" bgColor={obj.color} onChange={()=>props.handleCheckboxChange(obj.id)} defaultChecked/><label>{obj.name}</label>
          </Styledpane>
        })}
      </Styledpane>
    </div>
    )
}

//Year pane
const YearPane = props => {
    const year = props.year||new Date().getFullYear();
    let dateList = [new Date(year,1,0),new Date(year,2,0),new Date(year,3,0),new Date(year,4,0),new Date(year,5,0),new Date(year,6,0),
        new Date(year,7,0),new Date(year,8,0),new Date(year,9,0),new Date(year,10,0),new Date(year,11,0),new Date(year,12,0)]
    return <div> 
        <StyledSLabel fontWigt="400" mrgn="10px" fontsz="23px">{props.date.getFullYear()}</StyledSLabel>
        <Styledpane bgColor="white" width="fit-content" hight="700px" display="grid" RS="2" CS="1" CE="2" TCol="25% 25% 25% 25%" TRow="33% 33% 33%">
            {dateList.map((date, index)=>{
                return <Styledpane>
                <StyledSLabel color="rgb(27, 145, 255)" fontWigt="500" paddng="0 0 0 20px">{monthList[index]}</StyledSLabel>
                <SmallCalendar 
                  value={null} 
                  activeStartDate={date} 
                  showNavigation={false} 
                  onChange={props.updateTheDate}
                  calendarType="US" style={{width:"233px"}}
                />
                </Styledpane>
            })}
        </Styledpane>
    </div>
}

//MAIN
class MixCalendar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            BCtoolbar: this.props.showBCToolBar||false,
            currentDate: this.props.currentDate||new Date(),
            BCcurrentView: this.props.currentView||Views.MONTH,
            isYearView: this.props.showYearViewCurrently||false,
            EventType: this.props.eventType||[]
        }
    }
    
    handleCheckboxChange=(id)=>{
        const stateCopy = this.state.EventType.slice()
        stateCopy[id].state=!stateCopy[id].state;
        this.setState({EventType: stateCopy})
    }

    updateState=date=>{
        this.setState({currentDate: date})
        if(this.state.isYearView){
            this.changeBCView("month")
        }
    }

    DeMonth=()=>{
        var cur = this.state.currentDate
        cur.setMonth(this.state.currentDate.getMonth()-1)
        this.setState({currentDate: cur})
        this.forceUpdate()
    }

    InMonth=()=>{
        var cur = this.state.currentDate
        cur.setMonth(this.state.currentDate.getMonth()+1)
        this.setState({currentDate: cur})
    }

    //amt:positive to lighten, negative to darken
    LightenDarkenColor(col, amt) {
        var usePound = false;
        if (col[0] === "#") {
            col = col.slice(1);
            usePound = true;
        }
        var num = parseInt(col,16);
        var r = (num >> 16) + amt;
        if (r > 255) r = 255;
        else if  (r < 0) r = 0;
        var b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255) b = 255;
        else if  (b < 0) b = 0;
        var g = (num & 0x0000FF) + amt;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    }

    eventPropGetter=(event)=>{
        let borderLeft;
        let backgroundColor;
        let display='';
        if(event.eventTypeID>this.state.EventType.length){
            return
        }
        for(let index=0;index<this.state.EventType.length;index++){
            if(this.state.EventType[index].id===event.eventTypeID){
                if(!this.state.EventType[index].state){
                    display='none'
                }
                borderLeft=`5px solid ${this.state.EventType[index].color}`
                backgroundColor=this.LightenDarkenColor(this.state.EventType[index].color, 70)
            }
        }
        let newStyle={
            display:`${display}`,
            marginTop:`${event.start.getHours()}px`,
            paddingBottom:`${event.end.getHours()}px`,
            borderLeft:`${borderLeft}`,
            backgroundColor:`${backgroundColor}`
        }
        if(event.allDay){
            newStyle={
            display:`${display}`,
            marginTop: '0px',
            paddingBottom:'55px',
            borderLeft:`${borderLeft}`,
            backgroundColor:`${backgroundColor}`}
        }
        return {style: newStyle}
        
    }
    
    changeBCView=(para)=>{
        
        if(para==="month"){
            this.setState({BCcurrentView: Views.MONTH,isYearView:false,BCtoolbar:false})
        }else if(para==="day"){
            this.setState({BCcurrentView: Views.DAY,isYearView:false,BCtoolbar:true})
        }else if(para==="week"){
            this.setState({BCcurrentView: Views.WEEK, isYearView:false,BCtoolbar:true})
        }else{
            this.setState({BCcurrentView: Views.YEAR, isYearView:true,BCtoolbar:false})
        }
    }

    addNewEventType = (name, color) => {
      let stateCopy = this.state.EventType
      stateCopy.push({id:stateCopy.length, state:true, name:name, color:color})
      this.setState({EventType:stateCopy})
    }

    render(){
      return (
        <Styledpane bgColor="rgb(248, 248, 248)" width="1200px" display="grid" TCol="20% 80%" Cgap="30px" border="20px solid #f8f8f8">
          <Styledpane CS="1" RS="1" display="grid" TRow="20% 40% 40%">
            <div>
              <Toolbar 
                date={this.state.currentDate} 
                DeMonth={this.DeMonth} 
                InMonth={this.InMonth} 
                updateTheDate={this.updateState} 
                changeBCView={this.changeBCView}
              />
            </div>
          <Styledpane hight="fit-content" mihigh="250px">
            <SmallCalendar
                onChange={(date)=>this.setState({currentDate:date})}
                value={this.state.currentDate}
                calendarType="US"
                showNavigation={this.props.showNavigation||true}
                navigationLabel={
                  ({ date }) => (monthList[date.getMonth()].slice(0, 3)+" "+date.getFullYear())
                }
            />
          </Styledpane>
            <Styledpane width="max-content" color="rgba(128, 128, 128, 0.787)" mrgn="10px 0 0 0" paddng="0 0 0 20px">
              <Label
                handleCheckboxChange={this.handleCheckboxChange} 
                state={this.state} 
                eventType={this.state.EventType} 
                addNewEventType={this.addNewEventType}
              />
            </Styledpane>
          </Styledpane>
          {(!this.state.isYearView) ? 
            <Styledpane miWid="800px" CS="2" RS="1" mxhigh="610px" ovrflw="scroll">
              <Calendar
                  getNow={()=>{return this.state.currentDate}}
                  date={this.state.currentDate}
                  selectable={this.props.selectable||false}
                  toolbar={this.state.BCtoolbar}
                  events={this.props.eventList||[]}
                  step={this.props.steps||30}
                  //Only one day event so dont need to pass start&end accessor
                  startAccessor='start'
                  endAccessor='end'
                  defaultDate={new Date(2020, 1, 1)}
                  view={this.state.BCcurrentView}
                  onView={this.props.onView}
                  onNavigate={this.props.onNavigate}
                  eventPropGetter={this.props.eventPropGetter||this.eventPropGetter}
              />
            </Styledpane> : <div>
              <YearPane date={this.state.currentDate} updateTheDate={this.updateState} year={this.state.currentDate.getFullYear()}/>
            </div>
          }
      </Styledpane>
      )
    }
}

MixCalendar.propTypes = {
  showNavigation: PropTypes.bool,
  showBCToolBar: PropTypes.bool,
  eventPropGetter: PropTypes.func,
  showYearViewCurrently: PropTypes.bool,
  currentDate: PropTypes.instanceOf(Date),
  eventType: PropTypes.array.isRequired,
  eventList: PropTypes.array.isRequired,
  selectable: PropTypes.bool,
  step: PropTypes.number,
  onView:PropTypes.func,
  onNavigate:PropTypes.func
}

export default MixCalendar;
