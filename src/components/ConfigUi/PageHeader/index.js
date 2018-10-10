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

import QuestionIconSVG from '../../SVGs/QuestionIconSVG';

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

const HelpIconOuterWrapper = styled.div`
  vertical-align: text-bottom;
  display: inline-block;
`;

const PageHeaderRightSide = styled.div`
  display: flex;
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
            <HelpIconOuterWrapper>
              <QuestionIconSVG alt="help" title="Help" size={20} />
            </HelpIconOuterWrapper>
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
  helpLink: PropTypes.string,
};

export default PageHeader;
