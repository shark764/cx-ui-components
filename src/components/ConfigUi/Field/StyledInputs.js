import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid;
  border-color: ${props => (props.hasError ? 'red' : 'transparent')};
  background-color: ${props => (props.disabled ? '#efefef' : 'inherit')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'text')};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset,
    0 -1px 0 rgba(0, 0, 0, 0.05) inset;

  &::placeholder {
    color: #404040;
  }

  &:focus {
    outline: 0;
    border-color: #3498db;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

export const CustomInput = Input.withComponent('div').extend`
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;
