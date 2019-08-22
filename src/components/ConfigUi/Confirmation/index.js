/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Confirmation
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../../constants';
import Button from '../Button';
import Modal from '../Modal';

const ConfirmationModal = styled(Modal)`
  min-width: 300px;
  max-width: 400px;
  text-align: center;
  justify-content: center;
  background-color: ${colors.lightGray};
  padding: 20px 0 10px;
`;

const MainText = styled.div`
  background: ${colors.white};
  padding: 10px 30px;
  font-size: 14px;
  white-space: normal;
`;
const SecondaryText = styled.div`
  background: ${colors.white};
  padding: 0px 30px 10px 30px;
  font-size: 14px;
  white-space: normal;
  color: #666666;
`;

const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
`;
const ConfirmCancelBtns = styled(Button)`
  width: 45%;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 3px 10px;
  position: relative;
  text-align: center;
  vertical-align: middle;
`;

function Confirmation(props) {
  return (
    <ConfirmationModal onMaskClick={props.onMaskClick} className={props.className}>
      <MainText>{props.mainText}</MainText>
      {props.secondaryText && <SecondaryText>{props.secondaryText}</SecondaryText>}

      <BtnsContainer>
        <ConfirmCancelBtns id="cancel" onClick={props.cancelBtnCallback}>
          {props.cancelBtnText}
        </ConfirmCancelBtns>
        {!props.openPopupBox && (
          <ConfirmCancelBtns id="confirm" onClick={props.confirmBtnCallback} buttonType="primary">
            {props.confirmBtnText}
          </ConfirmCancelBtns>
        )}
      </BtnsContainer>
    </ConfirmationModal>
  );
}

Confirmation.propTypes = {
  confirmBtnText: PropTypes.string,
  confirmBtnCallback: PropTypes.func,
  cancelBtnText: PropTypes.string,
  cancelBtnCallback: PropTypes.func,
  mainText: PropTypes.string,
  secondaryText: PropTypes.string,
  onMaskClick: PropTypes.func,
  openPopupBox: PropTypes.bool,
  className: PropTypes.string,
};

Confirmation.defaultProps = {
  confirmBtnText: 'Confirm',
  cancelBtnText: 'Cancel',
};

export default Confirmation;
