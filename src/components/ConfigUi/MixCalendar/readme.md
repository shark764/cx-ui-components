```js
<div>
  <MixCalendar 
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