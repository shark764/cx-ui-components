/*
 * Copyright © 2015-2019 Serenova, LLC. All rights reserved.
 */

/**
 *
 * PopoverDialog
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Transparent mask to catch click outside of dialog
const ScreenMask = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  z-index: 2;
`;
const PopoverWrapper = styled.div`
  width: 100px;
  min-width: 100px;
  border-radius: 8px;
  background-color: #1d3239;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.29);
  margin: 10px;
  color: white;
  z-index: 3;
  position: absolute;
  ${props => props.size && `width: ${props.size}px;`};
`;
const Triangle = styled.span`
  position: absolute;
  width: 0px;
  height: 0px;
  top: 27px;
  z-index: 4;
  border-width: 9px;
  border-style: solid;
  border-color: #45aad7 transparent transparent #45aad7;
  border-image: initial;
  transform: rotate(45deg);
  box-shadow: -6px -6px 11px -4px rgba(0, 0, 0, 0.29);
  border-radius: 3px;
  left: ${props =>
    typeof props.arrowLeftOffsetPx !== 'undefined' ? props.arrowLeftOffsetPx : Math.round(props.widthPx / 5)}px;
`;

function PopoverDialog(props) {
  return (
    <Fragment>
      {props.isVisible && (
        <Fragment>
          <ScreenMask onClick={props.hide} />
          <Triangle arrowLeftOffsetPx={props.arrowLeftOffsetPx} widthPx={props.widthPx} />
          <PopoverWrapper id={props.id} className={props.className} size={props.widthPx}>
            {props.children}
          </PopoverWrapper>
        </Fragment>
      )}
    </Fragment>
  );
}

PopoverDialog.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  widthPx: PropTypes.number.isRequired,
  arrowLeftOffsetPx: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  isVisible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default PopoverDialog;
