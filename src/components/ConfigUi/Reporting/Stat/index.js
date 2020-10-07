import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_COLORS = { info: '#aaa', success: '#54b84f', warning: '#f58c00', error: 'red' };

const Label = styled.h3`
  font-size: 1.5em;
`;

const Value = styled.p`
  font-size: 3em;
  margin: 0.25em auto;
  color: ${({ color, componentType }) => color || DEFAULT_COLORS[componentType]};
`;

const Wrapper = styled.div`
  padding: 0.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

function Stat({ label, value, componentType = 'info', color }) {
  return (
    <Wrapper className={`stat stat--${componentType}`}>
      <Label className="stat__label">{label}</Label>
      <Value className="stat__value" color={color} componentType={componentType}>
        {value}
      </Value>
    </Wrapper>
  );
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  componentType: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  color: PropTypes.string,
};

export default Stat;
