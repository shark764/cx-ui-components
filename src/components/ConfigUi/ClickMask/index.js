import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ClickMaskDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

function ClickMask(props) {
  return <ClickMaskDiv onClick={props.onClick} />;
}

ClickMask.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClickMask;
