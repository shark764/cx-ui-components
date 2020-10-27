/*
 * Copyright © 2015-2020 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_COLORS = { info: '#aaa', success: '#54b84f', warning: '#f58c00', error: 'red' };

const Label = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #474747;
`;

const Value = styled.p`
  font-size: 21px;
  font-weight: 700;
  margin: 0.25em auto;
  color: ${({ color, componentType }) => color || DEFAULT_COLORS[componentType]};
`;

const Wrapper = styled.div`
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border: 1px solid lightgray;
`;

function Widget({ className, label, value, componentType = 'info', color, children }) {
  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      {children && children}
      {value && (
        <Value color={color} componentType={componentType}>
          {value}
        </Value>
      )}
    </Wrapper>
  );
}

Widget.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  componentType: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
};

export default Widget;
