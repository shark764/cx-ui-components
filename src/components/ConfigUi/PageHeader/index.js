/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * PageHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FontAwesomeIcon from '../FontAwesomeIcon';

const Wrapper = styled.div`
  display: inline-flex;
`

const Header = styled.h2`
  font-size: 21px;
  font-weight: 700;
  color: #474747;
  margin: 0;
`

const Link = styled.a`
  margin-left: 10px;
`

const HelpIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.accentColor};
  height: 100%;
  vertical-align: middle;
  font-size: 20px;
`

function PageHeader(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <Header>
        {props.text}
      </Header>
      {props.helpLink &&
      <Link href={props.helpLink} target='_blank'>
        <HelpIcon
          name='question-circle'
          size={2}
          alt='help'
          title='question-circle'
        />
      </Link>}
    </Wrapper>
  );
}

PageHeader.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  helpLink: PropTypes.string,
};

export default PageHeader;
