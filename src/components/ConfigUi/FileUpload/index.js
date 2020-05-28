/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * FileUpload
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
  padding-bottom: 10px;
  font-size: 14px;
`;

const Label = styled.span`
  width: 150px;
  vertical-align: middle;
  padding-right: 10px;
`;

function FileUpload(props) {
  return (
    <Wrapper className={props.className}>
      <Label>{props.label ? props.label : 'Upload'}</Label>
      <input
        className={props.className}
        type='file'
        name={props.name}
        accept={props.acceptedFileType}
        onChange={props.onFileSelect}
        onClick={(event) => {
          event.target.value = null
        }}
        disabled={props.disabled}
      />
    </Wrapper>
  );
}

FileUpload.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onFileSelect: PropTypes.func,
  acceptedFileType: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default FileUpload;
