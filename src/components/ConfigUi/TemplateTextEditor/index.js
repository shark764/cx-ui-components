import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import { Editor, EditorState, ContentState, CompositeDecorator } from 'draft-js';
import 'draft-js/dist/Draft.css';

injectGlobal`
  .public-DraftEditor-content {
    max-height: 200px;
    overflow: auto;
  }
`;

const TemplateSpan = props => {
  return (
    <span style={{ color: 'rgb(190, 195, 17)' }} data-offset-key={props.offsetKey}>
      {props.children}
    </span>
  );
};

export default class TemplateTextEditor extends React.Component {
  templateStrategy = (contentBlock, callback, contentState) => {
    if (this.props.templates.length) {
      const templateRegex = new RegExp(`{{{(${this.props.templates.join('|')})+}}}`, 'g');
      const text = contentBlock.getText();
      let matchArr, start;
      while ((matchArr = templateRegex.exec(text)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
      }
    }
  };

  constructor(props) {
    super(props);

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: this.templateStrategy,
        component: TemplateSpan,
      },
    ]);

    this.state = {
      editorState: this.props.value
        ? EditorState.createWithContent(ContentState.createFromText(this.props.value), compositeDecorator)
        : EditorState.createEmpty(compositeDecorator),
    };
  }

  onChange = editorState => {
    this.props.onChange(editorState.getCurrentContent().getPlainText());
    this.setState({ editorState });
  };

  render() {
    return (
      <Editor
        {...this.props}
        editorState={this.state.editorState}
        onChange={this.onChange}
        readOnly={this.props.disabled === true}
      />
    );
  }
}

TemplateSpan.propTypes = {
  offsetKey: PropTypes.string,
  children: PropTypes.any,
};

TemplateTextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
};
