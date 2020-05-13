/*
 * Copyright © 2015-2020 Serenova, LLC. All rights reserved.
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import styled from 'styled-components';
import Toast from '../../Toast';
import FileUpload from '../../FileUpload';

const Image = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 250px;
  height: auto;
`;

class UploadFile extends React.Component {
  uploadFile = event => {
    const file = event.target.files[0];
    const { acceptedFileType, maxFileSize, toastError, input: { name } } = this.props;
    if (file) {
      if (file.size > maxFileSize || acceptedFileType.indexOf(file.type) === -1) {
        Toast.error(toastError);
      } else {
        this.props.uploadFile(file, name);
        this.props.input.onChange(URL.createObjectURL(file));
      }
    }
  };
  render() {
    const { label, acceptedFileType, disabled, fileType, input: { name, value } } = this.props;
    return (
      <Fragment>
        <FileUpload
          name={name}
          label={label}
          acceptedFileType={acceptedFileType}
          onFileSelect={this.uploadFile}
          disabled={disabled}
        />
        {fileType === 'image' && <Image src={value} />}
      </Fragment>
    );
  }
}

export default function FileUploadField(props) {
  return <ReduxFormField {...props} component={UploadFile} />;
}

FileUploadField.propTypes = {
  name: PropTypes.string.isRequired
};

UploadFile.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  toastError: PropTypes.string.isRequired,
  uploadFile: PropTypes.func,
  fileType: PropTypes.oneOf(['image']),
  input: PropTypes.object.isRequired,
  maxFileSize: PropTypes.number.isRequired,
  acceptedFileType: PropTypes.string.isRequired
};
