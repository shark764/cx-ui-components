import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ClickMask from '../ClickMask';

const GrayClickMask = styled(ClickMask)`
  background-color: gray;
  opacity: .8;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 25%;
  width: 50%;
  max-height: 80%;
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 40px;
  z-index: 3;
  overflow: auto;
`;

export default function Modal(props) {
  return (
    <Fragment>
      <GrayClickMask
        onClick={props.onMaskClick}
      />
      <ModalWrapper className={props.className}>
        {props.children}
      </ModalWrapper>
    </Fragment>
  );
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onMaskClick: PropTypes.func,
}
