/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Detail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  margin-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  font-size: 14px;
`;

const Label = styled.span`
  width: 150px;
  vertical-align: middle;
  padding-right: 10px;
  flex-shrink: 0;
`;

const Value = styled.span`
  white-space: pre-line;
`;

function Detail(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <Label>{props.label}</Label>
      <Value>{props.value}</Value>
    </Wrapper>
  );
}

Detail.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Detail;
