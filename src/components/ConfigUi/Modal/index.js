import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ClickMask from '../ClickMask';

const GrayClickMask = styled(ClickMask)`
  background-color: gray;
  opacity: 0.8;
  z-index: 11;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 10%;
  width: 80%;
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 40px;
  z-index: 11;
  overflow: auto;
  left: 0;
  right: 0;
  ${props =>
    props.selectedSubEntityId === 'addItemToList' &&
    css`
      height: 80%;
      margin: 0 auto;
      display: flex;
      display: flex;
      flex-direction: column;
    `} ${props =>
    props.selectedSubEntityId !== 'addItemToList' &&
    css`
      max-width: 800px;
      max-height: 80%;
      margin: 5% auto;
    `};
`;

export default function Modal(props) {
  return (
    <Fragment>
      <GrayClickMask onClick={props.onMaskClick} />
      <ModalWrapper
        className={props.className}
        selectedSubEntityId={props.selectedSubEntityId}
      >
        {props.children}
      </ModalWrapper>
    </Fragment>
  );
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onMaskClick: PropTypes.func,
  selectedSubEntityId: PropTypes.string
};
