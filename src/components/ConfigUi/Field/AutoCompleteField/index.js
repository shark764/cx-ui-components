/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * AutoCompleteField
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { Input } from '../StyledInputs';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const NoSuggestion = styled.div`
  border: 1px solid #ddd;
  color: #999;
  padding: 0.5rem;
`;
const SuggestionsDropdown = styled.ul`
  background-color: white;
  border: 1px solid #ddd;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 267px;
  overflow-y: auto;
  padding-left: 0;
  position: absolute;
  z-index: 11;
  width: ${props => (props.suggestedDropDownWidth ? props.suggestedDropDownWidth : '351px')};
`;
const SuggestionItem = styled.li`
  padding: 0.5rem;
  z-index: 11;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #fff;
    background-color: #0097cf;
  }

  &.suggestion {
  }

  &.suggestion-active {
    color: #fff;
    background-color: #0097cf;
  }
`;

class AutoCompleteInput extends Component {
  constructor({ input: { value } }) {
    super();
    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      value,
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.onClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClick, false);
  }

  componentDidUpdate() {
    const { activeSuggestion, filteredSuggestions } = this.state;
    if (this.scrollContainer !== null) {
      // Access to DOM element, so we can move scroll since
      // React refs access just to Component
      const scrollContainerNode = ReactDOM.findDOMNode(this.scrollContainer);
      if (scrollContainerNode !== null) {
        // Move scroll according to suggestion's height
        scrollContainerNode.scrollTop =
          (scrollContainerNode.clientHeight / filteredSuggestions.length) * (activeSuggestion - 1);
      }
    }
  }

  // Event fired when the input value is changed
  onChange = ({ currentTarget: { value } }) => {
    const { suggestions } = this.props;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase().trim()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      value: value.length > 0 ? value : ' ',
    });
  };

  // Event fired when the user clicks on a suggestion
  // onmousedown is executed before onblur, so value is not changed
  onMouseDown = ({ currentTarget: { innerText } }) => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      value: innerText,
    });
  };

  // Event fired when user clicks anywhere in DOM
  onClick = ({ target }) => {
    if (this.wrapper.contains(target)) {
      // User click inside component, do nothing
      return;
    }
    // If user clicks outside of the component, hide Dropdown
    this.setState({ showSuggestions: false });
  };

  // Event fired when the field receives the focus
  onFocus = ({ currentTarget: { value } }) => {
    const { suggestions } = this.props;
    // Show suggestions according to what is
    // currently in the input
    // Show all suggestions by default if input
    // is empty
    const filteredSuggestions =
      value.trim().length > 0
        ? suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase().trim()) > -1)
        : [...suggestions];
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      value: value.length > 0 ? value : ' ',
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = ({ keyCode }) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input
    // and close the suggestions
    if (keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        value: filteredSuggestions[activeSuggestion],
      });
    } else if (keyCode === 38) {
      // User pressed the up arrow, decrement the index
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (keyCode === 40) {
      // User pressed the down arrow, increment the index
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onMouseDown,
      onFocus,
      onKeyDown,
      state: { activeSuggestion, filteredSuggestions, showSuggestions, value },
      props: {
        input,
        id,
        className,
        label,
        labelHelpText,
        placeholder,
        disabled,
        meta: { touched, error, warning },
      },
    } = this;

    const fieldProps = { label, labelHelpText, touched, error, warning };
    const inputProps = {
      id,
      className,
      placeholder,
      disabled,
      value,
      onChange,
      onKeyDown,
      onFocus,
    };

    return (
      <FieldWrapper inputName={input.name} {...fieldProps}>
        <div
          ref={element => {
            this.wrapper = element;
          }}
        >
          <Input type="text" {...input} {...inputProps} autoComplete="off" hasError={touched && !!error} />
          {showSuggestions &&
            value &&
            (filteredSuggestions.length ? (
              <SuggestionsDropdown
                ref={element => {
                  this.scrollContainer = element;
                }}
                suggestedDropDownWidth={this.props.suggestedDropDownWidth}
              >
                {filteredSuggestions.map((suggestion, index) => (
                  <SuggestionItem
                    className={index === activeSuggestion ? 'suggestion-active' : 'suggestion'}
                    key={suggestion}
                    onMouseDown={onMouseDown}
                    title={suggestion}
                  >
                    {suggestion}
                  </SuggestionItem>
                ))}
              </SuggestionsDropdown>
            ) : (
              <NoSuggestion>
                <em>No suggestions were found</em>
              </NoSuggestion>
            ))}
        </div>
      </FieldWrapper>
    );
  }
}

export default function AutoCompleteField(props) {
  return <ReduxFormField {...props} component={AutoCompleteInput} />;
}

AutoCompleteInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  labelHelpText: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  suggestions: PropTypes.instanceOf(Array),
  meta: PropTypes.object,
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
  suggestedDropDownWidth: PropTypes.string,
};

AutoCompleteField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelHelpText: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  suggestions: PropTypes.instanceOf(Array),
};

AutoCompleteField.defaultProps = {
  disabled: false,
  suggestions: [],
};
