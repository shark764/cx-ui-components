import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { ChromePicker } from 'react-color';
import ClickMask from '../../ClickMask';
import { RenderField } from '../InputField';

const Sample = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background: ${props => props.color};
  border: 1px solid grey;
  z-index: 3;
  ${props => !props.disabled 
    ? `:hover {
        box-shadow: 0px 0px 2px 0px rgba(42, 45, 41, 0.63);
      }
      cursor: pointer;`
    : 'cursor: not-allowed;'
  }
`;

const PickerWrapper = styled.div`
  position: absolute;
  z-index: 4;
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
    if (!this.props.disabled) {
      this.setState({ opened: !this.state.opened });
    }
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
          <div style={{ display: 'flex' }}>
            <Sample
              className="color-picker-swatch"
              data-automation="colorPickerSwatch"
              color={this.props.input.value}
              onClick={this.toggleColorPicker}
              disabled={this.props.disabled}
            />
            <RenderField
              className="color-picker-text-input"
              data-automation="colorPickerTextInput"
              value={this.props.input.value}
              onChange={this.handleChangeComplete}
              componentType="input"
              hideLabel
              {...this.props}
            />
          </div>
          {this.state.opened && !this.props.disabled && (
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
