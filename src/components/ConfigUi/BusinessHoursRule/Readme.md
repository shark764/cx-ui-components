```js

initialState = {
  rules: [
    {
      name: 'Super long name test Super long name test Super long name test (should display ellipsis) Super long name test',
      id: '123',
      startDate: new Date("2020-01-16T00:00:01Z"),
      endDate: new Date("2020-01-30T00:00:01Z"),
      repeats: 'monthly',
      hours: {
        allDay: false,
        intervals: 
          [
            {
              start: 300,
              end: 1310,
            },
            {
              start: 0,
              end: 260,
            }
          ]
      },
      on: {
        type: "day",
        value: 2
      },
      showActions: false  // Set this value to true once the rule is saved in the api},
    },
    {
      name: '',
      id: '456',
      startDate: new Date("2020-01-16T00:00:01Z"),
      hours: {
        allDay: false,
        intervals: 
          [
            {
              start: 600,
              end: 1100,
            },
            {
              start: 0,
              end: 480,
            }
          ]
      },
      showActions: true
    },
    {
      id: 'new-rule',
      startDate: new Date(),
      hours: {
        allDay: true
      },
      name: ''
    }
  ]
};

const actionsObject = {
  "Copy": () => { console.log('deleted') },
  "Delete": () => { console.log('copied') }
}

// Error object example to hightlight fields with error
const error = {
  name: true,
  type: true,
  /*description: true,
  repeats: true,
  every: true,
  on: true,  // weekdayPicker conditional
  on: {  // not weekdayPicker conditional
    type: true,
    value: true
  },
  startDate: true,
  endDate: true,
  byDate: true,*/
  hours: {
    intervals: 
    [
      {
        start: false,
        end: false
      },
      {
        start: true,
        end: true
      }
    ]
  }
}

function handleClick(e, index){
  setState(prevState => ({
    rules: prevState.rules.map((rule, i) => {
      if(i===index) {
        return e;
      } else {
        return rule;
      }
    })
  }));
  console.log("event: ", e);
}

console.log("state:", state);

<div>
  {state.rules.map((bussinessHour, index) => 
    <BusinessHoursRule
      onChange={(e) => handleClick(e, index)}
      key={index}
      rule={bussinessHour}
      actions={actionsObject}
      showActions={bussinessHour.showActions}
      error={index==1?error:null}
    />
  )}
</div>


```