import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SuggestionsSelector from '../src/components/General/Typeahead';

const fiveHunderedThousandItems = [];
for(let i=0; i < 500000; i++) {
  fiveHunderedThousandItems.push({ label: `Option ${i}`, value: i })
};
fiveHunderedThousandItems.push({label: 'This is a hella long option so it would show ellipsis, hopefully', value: 500000 })

class TypeaheadWrapper extends React.Component {

  state = {
    value: {
      label: 'Option 3000',
      value: 3000,
    }
  };

  changeValue = (value) => {
    console.log("value", value);
    this.setState({
      value,
    });
  } 

  render() {
    return <SuggestionsSelector
    name="suggestions"
    label="Suggestions"
    placeholder="Suggestions..."
    options={fiveHunderedThousandItems}
    listWidth={350}
    listHeight={250}
    noSuggestionsMessage='No Options'
    selectedOption={this.state.value}
    onSelectedOptionChange={this.changeValue}
  />
  }
    
}

  // const tenMillionItems = [];
  // for(let i=0; i < 10000000; i++) {
  //   tenMillionItems.push({ label: `Option ${i}`, value: i })
  // };

// const oneMillionItems = [];
// for(let i=0; i < 1000000; i++) {
//   oneMillionItems.push({ label: `Option ${i}`, value: i })
// };

storiesOf('SuggestionsSelector', module)
  .add('high', () => (
    <TypeaheadWrapper/>
  ))
  // .add('medium', () => (
  //   <SuggestionsSelector
  //     name="suggestions"
  //     label="Suggestions"
  //     placeholder="suggestions..."
  //     options={oneMillionItems}
  //   />
  // ))
  // .add('low', () => (
  //   <SuggestionsSelector
  //     name="suggestions"
  //     label="Suggestions"
  //     placeholder="suggestions..."
  //     options={fiveHunderedThousandItems}
  //   />
  // ))
  
