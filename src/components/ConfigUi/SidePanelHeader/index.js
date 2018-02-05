/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * SidePanelHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Header = styled.h1`
  color: #474747;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const SubHeader = styled.h5`
  color: #999999;
  font-size: 10px;
  padding-bottom: 4px;
`;

function SidePanelHeader(props) {
  return (
    <Wrapper
      id={props.id}
      className={props.className}
    >
      <Header>
        {props.title}
      </Header>
      {props.createdAt &&
      <SubHeader>
        {props.createdAt}
      </SubHeader>}
      {props.createdAt &&
      <SubHeader>
        {props.updatedAt}
      </SubHeader>}
    </Wrapper>
  );
}

SidePanelHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
};

export default SidePanelHeader;
