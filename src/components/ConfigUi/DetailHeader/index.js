/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * DetailHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h4`
  font-size: 14px;
  font-weight: 700;
  margin: 15px 0;
  overflow: hidden;

  &:after {
    content:"";
    display: inline-block;
    height: 0.5em;
    vertical-align: bottom;
    width: 100%;
    margin-right: -100%;
    margin-left: 10px;
    border-top: 1px solid #dadada;
}
`

function DetailHeader(props) {
  return (
    <Header
      id={props.id}
      className={props.className}
    >
      {props.text}
    </Header>
  );
}

DetailHeader.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default DetailHeader;
