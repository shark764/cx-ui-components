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
    eventType={
      [
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
      ]
    }
    eventList={
      [
        {
          id: 0,
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2020, 3, 0),
          end: new Date(2020, 3, 1),
          eventTypeID: 3
        },
        {
          id: 1,
          title: 'Long Event',
          start: new Date(2020, 3, 7),
          end: new Date(2020, 3, 10),
          eventTypeID: 3
        },
        {
          id: 2,
          title: 'DTS STARTS',
          start: new Date(2016, 2, 13, 0, 0, 0),
          end: new Date(2016, 2, 20, 0, 0, 0),
          eventTypeID: 0
        },

        {
          id: 3,
          title: 'DTS ENDS',
          start: new Date(2016, 10, 6, 0, 0, 0),
          end: new Date(2016, 10, 13, 0, 0, 0),
          eventTypeID: 0
        },

        {
          id: 4,
          title: 'Some Event',
          start: new Date(2020, 3, 9, 0, 0, 0),
          end: new Date(2020, 3, 10, 0, 0, 0),
          eventTypeID: 2
        },
        {
          id: 5,
          title: 'Conference',
          start: new Date(2020, 3, 11),
          end: new Date(2020, 3, 13),
          desc: 'Big conference for important people',
          eventTypeID: 3
        },
        {
          id: 6,
          title: 'Meeting',
          start: new Date(2020, 3, 12, 10, 30, 0, 0),
          end: new Date(2020, 3, 12, 12, 30, 0, 0),
          desc: 'Pre-meeting meeting, to prepare for the meeting',
          eventTypeID: 1
        },
        {
          id: 7,
          title: 'Lunch',
          start: new Date(2020, 3, 12, 10, 30, 0, 0),
          end: new Date(2020, 3, 12, 12, 30, 0, 0),
          desc: 'Power lunch',
          eventTypeID: 1
        },
        {
          id: 8,
          title: 'Meeting',
          start: new Date(2020, 3, 12, 10, 30, 0, 0),
          end: new Date(2020, 3, 12, 12, 30, 0, 0),
          eventTypeID: 1
        },
        {
          id: 9,
          title: 'Happy Hour',
          start: new Date(2020, 3, 12, 17, 0, 0, 0),
          end: new Date(2020, 3, 12, 17, 30, 0, 0),
          desc: 'Most important meal of the day',
          eventTypeID: 2
        },
        {
          id: 10,
          title: 'Dinner',
          start: new Date(2020, 3, 12, 20, 0, 0, 0),
          end: new Date(2020, 3, 12, 21, 0, 0, 0),
          eventTypeID: 3
        },
        {
          id: 11,
          title: 'Birthday Party',
          start: new Date(2020, 3, 13, 7, 0, 0),
          end: new Date(2020, 3, 13, 10, 30, 0),
          eventTypeID: 2
        },
        {
          id: 12,
          title: 'Late Night Event',
          start: new Date(2020, 3, 17, 19, 30, 0),
          end: new Date(2020, 3, 18, 2, 0, 0),
          eventTypeID: 3
        },
        {
          id: 12.5,
          title: 'Late Same Night Event',
          start: new Date(2020, 3, 17, 19, 30, 0),
          end: new Date(2020, 3, 17, 23, 30, 0),
          eventTypeID: 2
        },
        {
          id: 13,
          title: 'Multi-day Event',
          start: new Date(2020, 3, 20, 19, 30, 0),
          end: new Date(2020, 3, 22, 2, 0, 0),
          eventTypeID: 3
        },
        {
          id: 14,
          title: 'Today',
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3)),
          eventTypeID: 2
        },
        {
          id: 16,
          title: 'Video Record',
          start: new Date(2020, 3, 14, 15, 30, 0),
          end: new Date(2020, 3, 14, 19, 0, 0),
          eventTypeID: 1
        },
        {
          id: 17,
          title: 'Dutch Song Producing',
          start: new Date(2020, 3, 14, 16, 30, 0),
          end: new Date(2020, 3, 14, 20, 0, 0),
          eventTypeID: 2
        },
        {
          id: 18,
          title: 'Itaewon Halloween Meeting',
          start: new Date(2020, 3, 14, 16, 30, 0),
          end: new Date(2020, 3, 14, 17, 30, 0),
          eventTypeID: 1
        }
      ]
    }
    showMoreEventsPopup
  />
</div>;
```