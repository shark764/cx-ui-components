```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');

<div 
    style={{
        height: '600px',
    }}>
    <Typeahead
        name="suggestions"
        placeholder="Suggestions..."
        options={(() => {
            const fiveHunderedThousandItems = [];
            for(let i=0; i < 500000; i++) {
            fiveHunderedThousandItems.push({ label: `Option ${i}`, value: i })
            };
            fiveHunderedThousandItems.push({label: 'This is a really long option label so it would show ellipsis, hopefully', value: 500000 })
            return fiveHunderedThousandItems;
        })()}
        listWidth={350}
        listHeight={250}
        noSuggestionsMessage='No Options'
        onSelectedOptionChange={() => {}}
    />
    <StyleGuideSpacerDiv />
</div>
```