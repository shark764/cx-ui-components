import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List } from 'immutable';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import ClickMask from '../../ClickMask';
import DropdownButton from '../../DropdownButton';

const SubMenuDiv = styled.div`
  position: absolute;
  background: white;
  width: 100%;
  padding: 20px;
  top: 37px;
  z-index: 3;
  font-size: 13px;
  box-shadow: 0px 0px 2px 0px rgba(42, 45, 41, 0.63);
`;
const SubMenuItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const SubMenuItemLabel = styled.label`
  margin-left: auto;
`;

class CheckboxInputField extends Component {
  state = {
    isSubMenuOpen: false,
  };
  updateSubMenuDisplay = () => {
    this.setState({ isSubMenuOpen: !this.state.isSubMenuOpen });
  };
  updateFieldValues = item => {
    if (this.props.input.value === '') {
      // if none of the checkboxes are checked:
      return this.props.input.onChange(List([item.name]));
    } else {
      // Remove the unchecked item from the list (if the user is unchecking the checkbox) or
      // push the checked item to the list (if the user is checking the checkbox):
      const updatedItems = !this.props.input.value.find(a => a === item.name)
        ? this.props.input.value.push(item.name)
        : this.props.input.value.filter(a => a !== item.name);
      return this.props.input.onChange(updatedItems);
    }
  };
  // dropDownText changes based on the values users selects:
  dropDownText = () => {
    const { value } = this.props.input;
    if (value === '' || value.size === 0) {
      return this.props.dropDownText;
    } else {
      return value.size > 1 ? value.join(', ') : value.get(0);
    }
  };
  render() {
    const { value } = this.props.input;
    return (
      <Fragment>
        {this.state.isSubMenuOpen && <ClickMask onClick={this.updateSubMenuDisplay} />}
        <FieldWrapper label={this.props.label}>
          <DropdownButton
            type="button"
            size={10}
            buttonType={this.props.buttonType}
            open={this.state.isSubMenuOpen}
            data-automation={this.props['data-automation']}
            onClick={this.updateSubMenuDisplay}
            disabled={this.props.disabled}
          >
            {this.dropDownText()}
          </DropdownButton>
          {this.state.isSubMenuOpen && (
            <SubMenuDiv>
              {this.props.items.map((item, index) => {
                return (
                  <SubMenuItem key={index}>
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={value !== '' && value.find(a => a === item.name) !== undefined}
                      onChange={() => this.updateFieldValues(item)}
                    />
                    <SubMenuItemLabel>{item.label}</SubMenuItemLabel>
                  </SubMenuItem>
                );
              })}
            </SubMenuDiv>
          )}
        </FieldWrapper>
      </Fragment>
    );
  }
}

export default function CheckboxField(props) {
  const component = props.name ? (
    <ReduxFormField {...props} component={CheckboxInputField} />
  ) : (
    <CheckboxInputField {...props} />
  );
  return component;
}

CheckboxField.propTypes = {
  name: PropTypes.string,
};

CheckboxInputField.propTypes = {
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
  dropDownText: PropTypes.string,
  items: PropTypes.array.isRequired,
  meta: PropTypes.object,
  'data-automation': PropTypes.string,
};

CheckboxField.defaultProps = {
  buttonType: 'checkboxField',
};
