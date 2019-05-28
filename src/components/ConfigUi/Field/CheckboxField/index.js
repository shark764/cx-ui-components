import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

export default class CheckboxField extends Component {
  state = {
    isSubMenuOpen: false
  };
  updateSubMenuDisplay = () => {
    this.setState({ isSubMenuOpen: !this.state.isSubMenuOpen });
  };
  render() {
    return (
      <Fragment>
        {this.state.isSubMenuOpen && <ClickMask onClick={this.updateSubMenuDisplay} />}
        <FieldWrapper label={this.props.label}>
          <DropdownButton
            type="button"
            size={10}
            buttonType={this.props.buttonType}
            className={this.props.className}
            open={this.state.isSubMenuOpen}
            onClick={this.updateSubMenuDisplay}
          >
            {this.props.dropDownText}
          </DropdownButton>
          {this.state.isSubMenuOpen && (
            <SubMenuDiv>
              {this.props.items.map((item,index) => (
                <SubMenuItem key={index}>
                  <ReduxFormField name={item.name} component="input" type="checkbox" />
                  <SubMenuItemLabel>{item.label}</SubMenuItemLabel>
                </SubMenuItem>
              ))}
            </SubMenuDiv>
          )}
        </FieldWrapper>
      </Fragment>
    );
  }
}

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  className: PropTypes.string,
  open: PropTypes.bool,
  dropDownText: PropTypes.string,
  items: PropTypes.array.isRequired
};

CheckboxField.defaultProps = {
  buttonType: 'checkboxField'
};
