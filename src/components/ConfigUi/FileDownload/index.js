/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * FileDownload
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

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

const DownloadButton = styled(Button)`
  height: 20px;
  width: 100%;
  max-width: 200px;
  padding: 1px;
`;

function FileDownload(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <Label>Download</Label>
      <DownloadButton onClick={props.onClick} disabled={props.disabled} >Start Download</DownloadButton>
    </Wrapper>
  );
}

FileDownload.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default FileDownload;
