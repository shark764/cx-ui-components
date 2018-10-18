/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * AutoCompleteField
 *
 */

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { Input } from '../StyledInputs';
import styled from 'styled-components';

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
  width: 351px;
  z-index: 1;
`;
const SuggestionItem = styled.li`
  padding: 0.5rem;
  z-index: 1;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #0097cf;
    font-weight: bold;
  }
  
  &.suggestion {
  }
  
  &.suggestion-active {
    color: #444;
    background-color: #eee;
  }
`;

class AutoCompleteInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      value: ""
    };
  }

  // Event fired when the input value is changed
  onChange = ({ currentTarget: { value } }) => {
    const { suggestions } = this.props;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      value
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = ({ currentTarget: { innerText } }) => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      value: innerText
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
        value: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (keyCode === 38 && activeSuggestion !== 0) {
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (keyCode === 40 && (activeSuggestion - 1 === filteredSuggestions.length)) {
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        value
      },
      props: {
        input,
        id,
        className,
        label,
        labelHelpText,
        placeholder,
        disabled,
        meta: { touched, error, warning }
      }
    } = this;

    const fieldProps = { label, labelHelpText, touched, error, warning };
    const inputProps = { id, className, placeholder, disabled, value, onChange, onKeyDown };

    return (
      <FieldWrapper inputName={input.name} {...fieldProps}>
        <Input
          type="text"
          {...input}
          {...inputProps}
          autoComplete="off"
          hasError={touched && !!error}
        />
        {showSuggestions && value && (
          filteredSuggestions.length ? (
            <SuggestionsDropdown>
              {filteredSuggestions.map((suggestion, index) => (
                <SuggestionItem
                  className={index === activeSuggestion ? "suggestion-active" : "suggestion"}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </SuggestionItem>
              ))}
            </SuggestionsDropdown>
          ) : (
            <NoSuggestion>
              <em>No suggestions were found</em>
            </NoSuggestion>
          )
        )}
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  suggestions: PropTypes.instanceOf(Array),
  meta: PropTypes.object,
  touched:  PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string
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
  suggestions: PropTypes.instanceOf(Array)
};

AutoCompleteField.defaultProps = {
  disabled: false,
  suggestions: []
};