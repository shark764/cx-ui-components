import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DropdownButton from '../DropdownButton';
import ClickMask from '../ClickMask';

const StackingContextReset = styled.div`
  position: relative;
`;

const SubMenuDiv = styled.div`
  position: absolute;
  background: white;
  padding: 2px;
  right: -2px;
  top: 37px;
  z-index: 3;
  min-width: 260px;
  box-shadow: 0px 0px 2px 0px rgba(42, 45, 41, 0.63);
`;
const SubMenuTopArrow = styled.div`
  border-width: 9px;
  border-style: solid;
  border-color: #fff transparent transparent #fff;
  border-image: initial;
  transform: rotate(45deg);
  border-radius: 3px;
  box-shadow: -2px -2px 2px -2px rgba(42, 45, 41, 0.63);
  width: 0px;
  height: 0px;
  z-index: 4;
  position: absolute;
  right: 11px;
  top: 29px;
`;

class CustomDropdownMenu extends React.Component {
  render() {
    return (
      <StackingContextReset>
        <DropdownButton
          type={this.props.type}
          open={this.props.currentVisibleSubMenu === this.props.menuType}
          onClick={() => {
            this.props.setSubMenuVisibility(this.props.menuType);
          }}
          className={this.props.className}
        >
          {this.props.currentFilter}
        </DropdownButton>
        {this.props.currentVisibleSubMenu === this.props.menuType && (
          <Fragment>
            <ClickMask
              onClick={() => this.props.setSubMenuVisibility('none')}
            />
            <SubMenuTopArrow />
            <SubMenuDiv>{this.props.children}</SubMenuDiv>
          </Fragment>
        )}
      </StackingContextReset>
    );
  }
}

CustomDropdownMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  setSubMenuVisibility: PropTypes.func.isRequired,
  currentVisibleSubMenu: PropTypes.string.isRequired,
  menuType: PropTypes.string.isRequired,
};

export default CustomDropdownMenu;
