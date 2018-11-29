import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FieldWrapperDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  padding-right: 10px;
  font-size: 14px;
`;

const Label = styled.label`
  flex-shrink: 0;
  display: inline-block;
  width: 150px;
  margin-top: 5px;
`;

const HelpText = styled.div`
  font-size: x-small;
  color: #606060;
`;

const InputWrapper = styled.div`
  flex-grow: 1;
`;

const Error = styled.span`
  color: red;
`;

const Warning = styled.span`
  color: orange;
`;

export default function FieldWrapper({ inputName, label, labelHelpText, children, touched, error, warning, hideLabel}) {
  return (
    <FieldWrapperDiv>
     {!hideLabel && <Label htmlFor={inputName}>
        {label}
        {labelHelpText && (
          <HelpText>
            {labelHelpText}
          </HelpText>
        )}
      </Label>}
      <InputWrapper>
        {children}
        {touched &&
          ((error && <Error>{error}</Error>) ||
            (warning && <Warning>{warning}</Warning>))}
      </InputWrapper>
    </FieldWrapperDiv>
  );
}

FieldWrapper.propTypes = {
  inputName: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelHelpText: PropTypes.string,
  children: PropTypes.any,
  touched: PropTypes.bool,
  hideLabel: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
};
