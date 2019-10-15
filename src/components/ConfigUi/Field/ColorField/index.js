import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { ChromePicker } from 'react-color';
import ClickMask from '../../ClickMask';

const Sample = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background: ${props => props.color};
  border: 1px solid grey;
  z-index: 4;
  :hover {
    box-shadow: 0px 0px 2px 0px rgba(42, 45, 41, 0.63);
    cursor: pointer;
  }
`;

const PickerWrapper = styled.div`
  position: absolute;
  margin-top: 35px;
  z-index: 2;
`;

const HexValue = styled.input`
  height: 32px;
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid;
  border-color: transparent;
  background-color: inherit;
  cursor: text;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset, 0 -1px 0 rgba(0, 0, 0, 0.05) inset;
  margin-left: 20px;
  position: relative;
  top: -10px;
`;

class ColorInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  handleChangeComplete = e => {
    if (e.hex) {
      this.props.input.onChange(e.hex);
    } else {
      this.props.input.onChange(e.target.value);
    }
  };

  toggleColorPicker = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    return (
      <Fragment>
        {this.state.opened && <ClickMask onClick={this.toggleColorPicker} />}
        <FieldWrapper
          inputName={this.props.input.name}
          label={this.props.label}
          touched={this.props.touched}
          error={this.props.error}
          warning={this.props.warning}
        >
          <div style={{ float: 'right' }}>
            <Sample
              className="color-picker-swatch"
              data-automation="colorPickerSwatch"
              color={this.props.input.value}
              onClick={this.toggleColorPicker}
            />
            <HexValue
              className="color-picker-text-input"
              data-automation="colorPickerTextInput"
              value={this.props.input.value}
              onChange={this.handleChangeComplete}
            />
          </div>
          {this.state.opened && (
            <PickerWrapper className="color-picker-wrapper" data-automation="colorPickerWrapper">
              <ChromePicker
                className="color-picker"
                data-automation="colorPicker"
                color={this.props.input.value}
                onChangeComplete={this.handleChangeComplete}
              />
            </PickerWrapper>
          )}
        </FieldWrapper>
      </Fragment>
    );
  }
}

export default function ColorField(props) {
  return <ReduxFormField {...props} component={ColorInput} />;
}

ColorField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ColorField.defaultProps = {
  disabled: false,
};

ColorInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
};
