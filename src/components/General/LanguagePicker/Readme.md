```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
initialState = {
    selectedLocale: 'en-US'
};

<div style={{ padding: '5em 0' }}>
<LanguagePicker
    onLanguageChange={(value) => setState({ selectedLocale: value })}
    selectedLocale={state.selectedLocale}
    languageOptions={[
        { value: 'en-US', label: 'English (US)' },
        { value: 'de-DE', label: 'Deutsche (Deutschland)' },
        { value: 'en-GB', label: 'English (Great Britain)' },
        { value: 'es-ES', label: 'Español (España)' }, // Castilian Spanish - Grande!!
        { value: 'fr-CA', label: 'Français (Canada)' },
        { value: 'fr-FR', label: 'Français (France)' },
        { value: 'pl-PL', label: 'Polski (Polska)' },
        { value: 'pt-BR', label: 'Português (Brasil)' },
        { value: 'cs-CZ', label: 'Čeština (Czech Republic)' },
        { value: 'fi-FI', label: 'Suomi (Suomessa)' }, // Standard Finnish
        { value: 'it-IT', label: 'Italiano (Italia)' },
        { value: 'ja-JP', label: '日本語 (日本)' }, // Standard Japanese
        { value: 'ko-KR', label: '한국어 (한국)' }, // Standard Korean
        { value: 'nb-NO', label: 'Norsk (Norge)' }, // Standard Norwegian
        { value: 'nl-NL', label: 'Nederlands (Nederland)' },
        { value: 'sv-SE', label: 'Svenska (Sverige)' }, // Standard Swedish
        { value: 'zh-CN', label: '简体中文 (中国)' }, // Simplified Chinese
        { value: 'zh-TW', label: '繁體中文 (中文 - 台灣)' } // Traditional Chinese - Taiwan
    ]}
    color='#ccc'
/>

<StyleGuideSpacerDiv />
</div>
```