import React from 'react';
import PropTypes, { number } from 'prop-types';
import styled from 'styled-components';

const Slider = styled.div.attrs({
  style: props => ({
    right: props.rightPageOffset,
  }),
})`
  position: absolute;
  cursor: col-resize;
  display: inline-block;
  margin-right: -7px;
  width: 15px;
  z-index: 2;
  height: 100%;
`;
const SliderIcon = styled.div`
  display: inline-block;
  position: relative;
  width: 10px;
  top: 50%;
  margin-left: 2px;
  height: 34px;
  border-left: 2px solid #8080807a;
  border-right: 2px solid #8080807a;
`;

function SliderExpander(props) {
  return (
    <Slider id={props.id} rightPageOffset={props.rightPageOffset}>
      <SliderIcon id="SlidingResizerInnerIcon" />
    </Slider>
  );
}

SliderExpander.propTypes = {
  id: PropTypes.string,
  rightPageOffset: number.isRequired,
  onClick: PropTypes.func,
};

export default SliderExpander;
