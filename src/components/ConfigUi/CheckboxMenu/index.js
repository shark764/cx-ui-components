import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DropdownButton from '../DropdownButton';
import SubMenu from '../SubMenu';

const StackingContextReset = styled.div`
  position: relative;
`;

export default class CheckboxMenu extends React.Component {
  hotKeys = e => {
    if (e.altKey) {
      // 73 is i key
      if (e.which === 73) {
        this.props.toggleAllInverse && this.props.toggleAllInverse(this.props.menuType, this.props.tableType);
      }
      // 65 is a key
      if (e.which === 65) {
        this.props.allActive
          ? this.props.toggleAllOn && this.props.toggleAllOff(this.props.menuType, this.props.tableType)
          : this.props.toggleAllOff && this.props.toggleAllOn(this.props.menuType, this.props.tableType);
      }
    }
  };

  componentWillMount() {
    this.props.menuType === 'Columns' && document.addEventListener('keydown', this.hotKeys);
  }
  componentWillUnmount() {
    this.props.menuType === 'Columns' && document.removeEventListener('keydown', this.hotKeys);
  }
  render() {
    return (
      <StackingContextReset className={this.props.className}>
        <DropdownButton
          className={this.props.className}
          buttonType={this.props.buttonType}
          open={this.props.currentVisibleSubMenu === this.props.menuType}
          onClick={() => {
            this.props.setSubMenuVisibility(this.props.menuType, this.props.tableType);
          }}
          hasActiveFilter={this.props.hasActiveFilter}
          data-automation={this.props['data-automation']}
        >
          {this.props.children}
        </DropdownButton>

        {this.props.currentVisibleSubMenu === this.props.menuType && (
          <SubMenu
            items={this.props.items}
            currentVisibleSubMenu={this.props.currentVisibleSubMenu}
            setSubMenuVisibility={this.props.setSubMenuVisibility}
            menuType={this.props.menuType}
            tableType={this.props.tableType}
            allActive={this.props.allActive}
            toggleItem={this.props.toggleItem}
            toggleAllOn={this.props.toggleAllOn}
            toggleAllOff={this.props.toggleAllOff}
            toggleAllInverse={this.props.toggleAllInverse}
            selectionType={this.props.selectionType}
            oneOnRestOff={this.props.oneOnRestOff}
            updateFilter={this.props.updateFilter}
          />
        )}
      </StackingContextReset>
    );
  }
}

CheckboxMenu.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  buttonType: PropTypes.string,
  selectionType: PropTypes.string.isRequired,
  style: PropTypes.object,
  items: PropTypes.array.isRequired,
  setSubMenuVisibility: PropTypes.func.isRequired,
  oneOnRestOff: PropTypes.func,
  currentVisibleSubMenu: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  menuType: PropTypes.string.isRequired,
  tableType: PropTypes.string.isRequired,
  allActive: PropTypes.bool.isRequired,
  hasActiveFilter: PropTypes.bool,
  toggleItem: PropTypes.func.isRequired,
  toggleAllOn: PropTypes.func,
  toggleAllOff: PropTypes.func,
  toggleAllInverse: PropTypes.func,
  updateFilter: PropTypes.func,
  'data-automation': PropTypes.string,
};
