```js
  const style = { width: 600, margin: 50 };

  initialState = {
    basicSlider: 25,
    sliderWithMarks: 0,
    sliderWithTooltip: 50,
    maxSliderValue: 0
  };

  function handleOnBeforeChange(e) {
    console.log('handleOnBeforeChange', e);
  }

  function onAfterChange(e) {
    console.log('onAfterChange', e);
  }

  <div style={style}>
    <p>Basic Slider (disabled)</p>
    <Slider
      min={0}
      max={100}
      value={state.basicSlider}
      step={25}
      disabled
    />
    <br />
    <br />
    
    <p>Slider with Marks</p>
    <Slider
      label={'SMS'}
      subLabel={`(max ${4})`}
      min={0}
      max={100}
      initialValue={0}
      value={state.sliderWithMarks}
      onChange={(e) =>  setState({
        sliderWithMarks: e
      })}
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

    <p>Slider with Tooltip and Custom Handle Style (no label)</p>
    <Slider
      min={0}
      max={100}
      initialValue={0}
      value={state.sliderWithTooltip}
      onChange={(e) =>  setState({
        sliderWithTooltip: e
      })}
      tooltip
      tooltipProps={{visible: true, placement: 'bottom'}}
      step={25}
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

    <p>Slider with Custom Tooltip</p>
    <Slider
      label={'Messaging'}
      min={0}
      max={100}
      initialValue={0}
      value={state.maxSliderValue}
      handleLabel
      step={25}
      tooltip
      tooltipText="Siuuuuuuuuuuu"
      onChange={(e) =>  setState({
        maxSliderValue: e
      })}
      onBeforeChange={handleOnBeforeChange}
      onAfterChange={onAfterChange}
    />
  </div>
;
```
