import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ClickMask from '../ClickMask';

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

const ItemList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 4px auto;
  color: #474747;
  cursor: pointer;
`;
const AllSelector = styled.span`
  color: #474747;
`;
const Seperator = styled.div`
  margin: 10px auto;
  width: 80%;
  border-bottom: 1px solid lightgrey;
`;

class SubMenu extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.currentVisibleSubMenu === this.props.menuType && (
          <ClickMask onClick={() => this.props.setSubMenuVisibility('none')} />
        )}

        {this.props.currentVisibleSubMenu === this.props.menuType && <SubMenuTopArrow key="SubMenuTopArrow" />}
        <SubMenuDiv key="SubMenu">
          <ItemList>
            {this.props.selectionType === 'checkbox' && (
              <Fragment>
                <ListItem>
                  <input
                    type="checkbox"
                    checked={this.props.allActive}
                    onChange={() => {
                      this.props.allActive
                        ? this.props.toggleAllOff(this.props.menuType)
                        : this.props.toggleAllOn(this.props.menuType);
                    }}
                  />
                  <AllSelector>All</AllSelector>
                </ListItem>
                <Seperator />
              </Fragment>
            )}
            {this.props.items.map((item, i) => [
              <ListItem key={item.name}>
                <input
                  type={this.props.selectionType === 'checkbox' ? 'checkbox' : 'radio'}
                  onChange={() => {
                    if (this.props.selectionType === 'checkbox') {
                      this.props.toggleItem(item.name, this.props.menuType);
                    } else {
                      this.props.oneOnRestOff(item.name, this.props.menuType);
                      this.props.updateFilter(item.name);
                    }
                  }}
                  value={item.name}
                  checked={item.active}
                />
                <span>{item.name}</span>
              </ListItem>,
              item.name === 'All' && <Seperator key={`${item.name}-seperator`} />,
            ])}
          </ItemList>
        </SubMenuDiv>
      </Fragment>
    );
  }
}

SubMenu.propTypes = {
  selectionType: PropTypes.string,
  updateFilter: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  oneOnRestOff: PropTypes.func,
  setSubMenuVisibility: PropTypes.func.isRequired,
  currentVisibleSubMenu: PropTypes.string.isRequired,
  menuType: PropTypes.string.isRequired,
  allActive: PropTypes.bool.isRequired,
  toggleItem: PropTypes.func.isRequired,
  toggleAllOn: PropTypes.func.isRequired,
  toggleAllOff: PropTypes.func.isRequired,
  toggleAllInverse: PropTypes.func.isRequired,
};

export default SubMenu;
