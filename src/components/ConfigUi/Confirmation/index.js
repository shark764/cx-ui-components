/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Confirmation
 *
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../Button";
import Modal from "../Modal";

const ConfirmationModal = styled(Modal)`
  min-width: 300px;
  max-width: 400px;
  text-align: center;
  justify-content: center;
`;

const Subtext = styled.div`
  display: block;
  margin-bottom: 10px;
  font-style: italic;
`;

const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Divider = styled.div`
  width: 100%;
`

const ConfirmCancelBtns = styled(Button)`
  width: 90px;
`;

const BlueLine = styled.div`
  height: 1px;
  width: 50px;
  margin-bottom: 18px;
  background: #23cef5;
  display: inline-block;
  position: relative;
  top: 13px;
`;

const BlueQuestionMark = styled.div`
  border-radius: 50%;
  background-color: #23cef5;
  color: white;
  font-weight: bold;
  padding: 2px 3px 0px 4px;
  width: 20px;
  display: inline-block;
  margin: 10px;
`;

function Confirmation(props) {
  return (
    <ConfirmationModal
      onMaskClick={props.onMaskClick}
    >
      <div>
        <span>{props.mainText}</span>
        <Divider>
          <BlueLine />
          <BlueQuestionMark>?</BlueQuestionMark>
          <BlueLine />
        </Divider>
        <Subtext>{props.confirmSubtext}</Subtext>
      </div>

      <BtnsContainer>
        <ConfirmCancelBtns
          id="cancel"
          onClick={props.cancelBtnCallback}
        >
          {props.cancelBtnText}
        </ConfirmCancelBtns>
        <ConfirmCancelBtns
          id="confirm"
          onClick={props.confirmBtnCallback}
          buttonType="primary"
        >
          {props.confirmBtnText}
        </ConfirmCancelBtns>        
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
  confirmSubtext: PropTypes.string,
  onMaskClick: PropTypes.func
};

Confirmation.defaultProps = {
  confirmBtnText: 'OK',
  cancelBtnText: 'cancel'
}

export default Confirmation;
