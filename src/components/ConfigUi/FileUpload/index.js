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

import Toast from '../Toast';

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
    <Wrapper id={props.id} className={props.className}>
      <Label>Upload</Label>
      <input
        id='FileUpload'
        type='file'
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
};

export default FileUpload;
