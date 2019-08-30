import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import { ContentState } from 'draft-js';

export const convertStateFromHtml = (state) => {
    const options = {
        customInlineFn: (element, { Style }) => {
            if (element.style.color) {
                return Style('color-' + element.style.color);
            }
        }
    };
    return stateFromHTML(state, options)
};

export const convertStateToHtml = (editorState) => {
    const options = {
        inlineStyleFn: (styles) => {
            const key = 'color-';
            const color = styles.filter(value => value.startsWith(key)).first();
            if (color) {
                return {
                    element: 'span',
                    style: {
                        color: color.replace(key, ''),
                    },
                };
            }
        },
    };
    return ContentState.createFromText(stateToHTML(editorState.getCurrentContent(), options));
};