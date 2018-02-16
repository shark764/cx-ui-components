VoiceIconSVG example:

```js
const mainStyle = {
  display: 'inline-block',
  marginRight: '20px',
};

<div>
  <VoiceIconSVG style={ mainStyle } />
  <VoiceIconSVG color="white" style={ Object.assign({ background: 'black' }, mainStyle) } />
  <VoiceIconSVG type="callback" style={ mainStyle } />
</div>
```
