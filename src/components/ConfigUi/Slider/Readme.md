```js
  const style = { width: 600, margin: 50 };

  function handleOnChange(e) {
    console.log('handleOnChange', e);
  }

  function textFormatter(v) {
    return `${v}%`;
  }

  <div style={style}>
    <p>Basic Slider (disabled)</p>
    <Slider
      min={0}
      max={100}
      initialValue={25}
      step={25}
      disabled
    />
    <br />
    <br />
    
    <p>Slider with Marks</p>
    <Slider
      min={0}
      max={100}
      initialValue={0}
      step={25}
      marks={{
        0: 0,
        25: <p style={{ color: 'green', fontSize: 20 }}>30</p>,
        50: <Button buttonType="primary" >Button Mark</Button>,
        75: <DetailsPanelMessage text="This is your final warning!" type="info" />,
        100: <DetailsPanelMessage text="End" type="error" />
      }}
      dotStyle={{ borderColor: 'orange' }}
      activeDotStyle={{ borderColor: 'black' }}
      handleStyle={{
        borderColor: '#3396FF',
        height: 25,
        width: 25,
        marginLeft: 0,
        marginTop: -13,
        backgroundColor: '#3380FF'
      }}
    />
    <br />
    <br />
    <br />

    <p>Slider with Tooltip and Custom Handle Style</p>
    <Slider
      min={0}
      max={100}
      initialValue={0}
      tooltip
      tipProps={{visible: true}}
      step={25}
      textFormatter={textFormatter}
      handleStyle={{
        borderColor: '#3396FF',
        height: 25,
        width: 25,
        marginLeft: 0,
        marginTop: -13,
        backgroundColor: '#3380FF'
      }}
    />
    <br />
    <br />

    <p>Slider with Custom Handled</p>
    <Slider
      min={0}
      max={100}
      initialValue={0}
      handleLabel
      step={25}
      textFormatter={textFormatter}
      onChange={handleOnChange}
    />
  </div>
;
```
