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
  width: 100%;
  padding: 20px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h2`
  display: inline-block;
  font-size: 21px;
  font-weight: 700;
  color: #474747;
  margin: 0;
`;

const Link = styled.a`
  margin-left: 10px;
`;

const HelpIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.accentColor};
  height: 100%;
  vertical-align: middle;
  margin-bottom: 2px;
  font-size: 20px;
`;

const PageHeaderRightSide = styled.div`
  display: inline-block;
`;

const PageHeaderLeftSide = styled.div`
  display: inline-block;
`;

function PageHeader(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <PageHeaderLeftSide>
        <Header>{props.text}</Header>
        {props.helpLink && (
          <Link href={props.helpLink} target="_blank">
            <HelpIcon
              name="question-circle"
              alt="help"
              title="question-circle"
              size={20}
            />
          </Link>
        )}
      </PageHeaderLeftSide>

      <PageHeaderRightSide>{props.children}</PageHeaderRightSide>
    </Wrapper>
  );
}

PageHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  helpLink: PropTypes.string.isRequired,
};

export default PageHeader;
