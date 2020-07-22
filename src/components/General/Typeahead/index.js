/* TODO:
* Test it on storybook
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import SearchIconSVG from '../../Icons/SearchIconSVG';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';

const listRef = React.createRef();

const Input = styled.input`
  box-sizing: border-box;
  height: 36px;
  width: ${props => props.listWidth}px;
  background-color: ${props => (props.noBackground ? 'transparent' : props.disabled ? '#efefef' : 'white')};
  padding: 2px 35px 0 20px;
  color: ${props => (props.noBackground ? '#ccc' : 'initial')};
  border: 1px solid lightgray;
  border-radius: 3px;
  font-size: 17px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  display: inline-block;
  position: absolute;
  &:focus {
    border: 2px solid skyblue;
    outline: 0;
  }
  &:hover:not(:focus) {
    border: 1px solid darkgray;
  }
`;

const SuggestionsContainer = styled.div`
  border: 1px solid silver;
  margin-top: 15px;
  width: ${props => props.width}px;
  border-radius: 3px;
  padding: 1px;
  position: absolute;
  z-index: 1;
`;

const Suggestion = styled.div`
  background: ${props => (props.index % 2 ? '#ededed;' : '#fff;')};
  font-size: 17px;
  font-family: 'Arial';
`;

const Item = styled.div`
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  ${props => (props.isActiveSuggestion ? `background: #00487e !important; color: #fff;` : '')} &:hover {
    color: #000;
    background: #00dfff7d !important;
  }
`;

const SearchIconWrapper = styled(SearchIconSVG)`
  width: 17px;
  height: 17px;
  vertical-align: middle;
  position: relative;
  left: ${props => props.inputWidth - 36}px;
  opacity: 0.4;
  margin-top: 9px;
`;

const NoSuggestionsMessage = styled.div`
  height: 28px;
  color: silver;
  font-size: 17px;
  font-family: 'Arial';
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;
  background: white;
`;

export default class Typeahead extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: props.selectedOption ? props.selectedOption.label : '',
      hasFocus: false,
      suggestions: props.options.map(option => {
        return Object.assign(option, { active: props.selectedOption && option.value === props.selectedOption.value });
      }),
      timerId: undefined,
      activeSuggestion: props.selectedOption
        ? props.options.findIndex(option => props.selectedOption && option.value === props.selectedOption.value)
        : 0,
      keyboardShortcuts: fromEvent(window, 'keydown')
        .pluck('keyCode')
        .map(code => {
          if (code === 39 || code === 40) {
            // increment with arrow key down
            this.changeActiveSuggestion(true);
          } else if (code === 37 || code === 38) {
            // decrement with arrow key up
            this.changeActiveSuggestion(false);
          } else if (code === 13 || code === 9) {
            if (this.state.suggestions[this.state.activeSuggestion]) {
              this.selectOption(this.state.suggestions[this.state.activeSuggestion]);
            }
          }
        })
        .subscribe(),
      outsideClick: fromEvent(document, 'click')
        .map(({ target }) => {
          if (this.containerRef.current.contains(target) || !this.state.hasFocus) {
            return;
          }
          this.resetActive(true);
        })
        .subscribe(),
    };

    this.containerRef = React.createRef();
  }

  componentWillUnmount() {
    this.state.keyboardShortcuts.unsubscribe();
    this.state.outsideClick.unsubscribe();
  }

  selectOption = option => {
    const index = this.props.options.findIndex(({ value }) => value === option.value);
    this.setState({
      inputValue: option.label,
      hasFocus: false,
      suggestions: this.props.options.map((o, i) => {
        return Object.assign(o, { active: o.value === option.value });
      }),
      activeSuggestion: index,
    });
    this.props.onSelectedOptionChange(option);
  };

  resetActive = isHiding => {
    const newSuggestions = isHiding
      ? this.props.options.map(option => {
          return Object.assign(option, { active: false });
        })
      : [...this.state.suggestions].map(option => {
          return Object.assign(option, { active: false });
        });

    const index =
      this.props.selectedOption && isHiding
        ? newSuggestions.findIndex(({ value }) => value === this.props.selectedOption.value)
        : 0;

    if (newSuggestions.length > 0) {
      newSuggestions[index].active = true;
    }

    this.setState((state, props) => ({
      activeSuggestion: index,
      suggestions: newSuggestions,
      hasFocus: !isHiding,
      inputValue:
        props.selectedOption && isHiding && props.selectedOption.label !== state.inputValue
          ? props.selectedOption.label
          : state.inputValue,
    }));
  };

  changeActiveSuggestion = increment => {
    const newSuggestions = [...this.state.suggestions];
    const currentIndex = this.state.activeSuggestion;
    let newIndex = increment ? currentIndex + 1 : currentIndex - 1;

    if (newSuggestions[newIndex] === undefined && increment) {
      newIndex = 0;
    } else if (newSuggestions[newIndex] === undefined && !increment) {
      newIndex = this.state.suggestions.length - 1;
    }

    if (!newSuggestions[currentIndex].active) {
      newSuggestions[currentIndex].active = true;
      newIndex = currentIndex;
    } else {
      newSuggestions[currentIndex].active = false;
      newSuggestions[newIndex].active = true;
    }

    this.setState({
      activeSuggestion: newIndex,
      suggestions: newSuggestions,
    });

    if (newSuggestions.length > 0) {
      listRef.current.scrollToItem(newIndex);
    }
  };

  hasFocus = () => {
    this.setState({
      hasFocus: true,
    });
  };

  updateSuggestions = () => {
    if (this.state.timerId) {
      clearTimeout(this.state.timerId);
    }

    const suggestionTimerId = setTimeout(() => {
      const compareVal = this.state.inputValue.toLowerCase().trim();
      const suggestions = this.props.options.filter(option => option.label.toLowerCase().indexOf(compareVal) > -1);
      this.setState({
        activeSuggestion: 0,
        suggestions,
        timerId: undefined,
      });
      this.resetActive(false);
      if (suggestions.length > 0) {
        listRef.current.scrollToItem(0);
      }
    }, 300);
    this.setState({ timerId: suggestionTimerId });
  };

  onChange = ({ currentTarget: { value } }) => {
    this.setState({ inputValue: value.length > 0 ? value : '' });
    this.updateSuggestions();
  };

  ItemRenderer = props => {
    const { label, active } = props.data[props.index];
    return (
      <Suggestion index={props.index} style={props.style}>
        <Item
          isActiveSuggestion={active}
          onClick={() => {
            this.selectOption(props.data[props.index]);
          }}
        >
          {label}
        </Item>
      </Suggestion>
    );
  };

  render() {
    const suggestionListHeight = this.state.suggestions.length * 28;
    const initialOffset = this.state.activeSuggestion * 28;
    return (
      <div
        style={{
          width: `${this.props.listWidth}px`,
        }}
        ref={this.containerRef}
        className={this.props.className}
        data-automation={this.props['data-automation']}
      >
        <Input
          disabled={this.props.disabled}
          value={this.state.inputValue}
          placeholder={!this.props.disabled ? this.props.placeholder : undefined}
          onFocus={this.hasFocus}
          onChange={this.onChange}
          listWidth={this.props.listWidth}
          noBackground={this.props.noBackground}
          data-automation={this.props['data-automation']}
        />
        <SearchIconWrapper searchIconType="primary" inputWidth={this.props.listWidth} />
        {this.state.hasFocus && (
          <SuggestionsContainer width={this.props.listWidth}>
            {this.state.suggestions.length > 0 && (
              <List
                ref={listRef}
                height={this.props.listHeight > suggestionListHeight ? suggestionListHeight : this.props.listHeight}
                itemCount={this.state.suggestions.length}
                itemSize={28}
                itemData={this.state.suggestions}
                width={this.props.listWidth}
                initialScrollOffset={initialOffset}
              >
                {this.ItemRenderer}
              </List>
            )}
            {this.state.suggestions.length === 0 && (
              <NoSuggestionsMessage>{this.props.noSuggestionsMessage}</NoSuggestionsMessage>
            )}
          </SuggestionsContainer>
        )}
      </div>
    );
  }
}

Typeahead.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  noSuggestionsMessage: PropTypes.string.isRequired,
  listHeight: PropTypes.number.isRequired,
  listWidth: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  onSelectedOptionChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.object,
  className: PropTypes.string,
  'data-automation': PropTypes.string,
  noBackground: PropTypes.bool,
};
