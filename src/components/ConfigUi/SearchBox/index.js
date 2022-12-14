/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * SearchBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchIconSVG from '../../Icons/SearchIconSVG';

const Wrapper = styled.div`
  display: inline-flex;
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  height: 32px;
  width: 100%;
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset, 0 -1px 0 rgba(0, 0, 0, 0.05) inset;

  &::placeholder {
    color: #cccccc;
  }

  &:focus {
    outline: 0;
    border-color: #3498db;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

const SearchIconOuterBox = styled.div`
  width: 40px;
  height: 30px;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  vertical-align: middle;
  text-align: center;
  padding-top: 6px;
  margin: 1px 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

function SearchBox(props) {
  return (
    <Wrapper className={props.className}>
      <Input id={props.id} placeholder={props.placeholder} onChange={props.onChange} data-automation="searchBoxInput" />
      <SearchIconOuterBox>
        <SearchIconSVG searchIconType="searchBox" />
      </SearchIconOuterBox>
    </Wrapper>
  );
}

SearchBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBox;
