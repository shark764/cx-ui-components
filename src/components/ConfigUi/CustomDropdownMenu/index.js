import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DropdownButton from '../DropdownButton';
import ClickMask from '../ClickMask';

const StackingContextReset = styled.div`
  position: relative;
`;

const SubMenuDiv = styled.div`
  ${props => (props.menuType === 'actionsMenu' ? 'padding: 10px;' : 'padding: 2px;')};
  ${props => (props.menuType === 'actionsMenu' ? 'min-width: 195px;' : 'min-width: 260px;')};
  position: absolute;
  background: white;
  right: -2px;
  top: 37px;
  z-index: 3;
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
          buttonType={this.props.buttonType}
          open={this.props.currentVisibleSubMenu === this.props.menuType}
          onClick={() => {
            this.props.setVisibleMenu(this.props.menuType, this.props.tableType);
          }}
          className={this.props.className}
          data-automation={this.props['data-automation']}
        >
          {this.props.currentFilter}
        </DropdownButton>
        {this.props.currentVisibleSubMenu === this.props.menuType && (
          <Fragment>
            <ClickMask onClick={() => this.props.setVisibleMenu('none', this.props.tableType)} />
            <SubMenuTopArrow />
            <SubMenuDiv menuType={this.props.menuType}>{this.props.children}</SubMenuDiv>
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
  buttonType: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  'data-automation': PropTypes.string,
  setVisibleMenu: PropTypes.func.isRequired,
  currentVisibleSubMenu: PropTypes.string,
  menuType: PropTypes.string.isRequired,
  tableType: PropTypes.string,
};

export default CustomDropdownMenu;
