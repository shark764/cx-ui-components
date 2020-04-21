```js

initialState = {
  dateRange: new Date()
};

function handleClick(e){
  console.log("e:", e);
  setState(prevState => ({
    displayedDateRage: e,
  }));
  console.log("event: ", e);
}

console.log("MixCalendar state:", state);

<div>
  <MixCalendar
    onChange={(e) => handleClick(e)}
    currentDate={new Date("2020-01-16T00:00:01Z")}
    eventType={[
      {
        id:0,
        state:true,
        name:'Regular Hours',
        color:'#51CE90'
      },
      {
        id:1,state:true,
        name:'One-Time extended Hours',
        color:'#F1D29D'
      },
      {
        id:2,state:true,
        name:'Blackout Exceptions',
        color:'#F08695'
      },
      {
        id:3,
        state:true,
        name:'Blackout One-Time Exceptions',
        color:'#8383FD'
      }
    ]}
  />
</div>;
```