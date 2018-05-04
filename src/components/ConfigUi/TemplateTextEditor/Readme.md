```js
const onChange = (newVal) => { console.log('TemplateTextEditor new value:', newVal) };
<div>
  <h4>Surround one of the template words (template, other-template, something-else) in the text editor below with triple curly brackets (ex. &{'{{{template}}}'}) to display as templates</h4>
  <br/>
  <TemplateTextEditor
    value="{{{template}}} with some regular text"
    templates={['template', 'other-template', 'something-else']}
    onChange={onChange}
  />
</div>
```
