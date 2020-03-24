```js

initialState = {
  rules: [
    {
      name: 'Test',
      id: '123',
      startDate: new Date("2020-01-16T00:00:01Z"),
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
      showActions: false  // Set this value to true once the rule is saved in the api},
    },
    {
      name: 'Test 2',
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
      id: '321'
    }
  ]
};

const actionsObject = {
  "Copy": () => {},
  "Delete": () => {}
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
    />
  )}
</div>


```