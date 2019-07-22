import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import DatePicker from "react-datepicker";

import FieldWrapper from '../FieldWrapper';
import { Input } from '../StyledInputs';

import "react-datepicker/dist/react-datepicker.css";
import "./custom.css";

const Picker = ({
    input,
    label,
    labelHelpText,
    placeholder,
    id,
    className,
    disabled,
    hideLabel,
    meta: { touched, error, warning },
    minDate,
    maxDate
    }) => {
        const inputProps = {
            id,
            className,
          };
        const fieldWrapperProps = {
            input: input.name,
            label,
            labelHelpText,
            touched,
            error,
            warning,
            hideLabel
          };
        
        return (
            <FieldWrapper {...fieldWrapperProps} inputName={input.name}>
                <DatePicker customInput={<Input {...input} {...inputProps} hasError={touched && !!error} />}
                    onChange={(date) => input.onChange(date)}
                    selected={input.value} 
                    placeholderText={placeholder}
                    disabled={disabled}
                    minDate={minDate}
                    maxDate={maxDate}/>
            </FieldWrapper>
        )
};

export const DatePickerField = (props) => 
    <ReduxFormField
        {...props}
        component={Picker}
        parse={value => value !== undefined ? new Date(value) : value}
     />;

Picker.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    labelHelpText: PropTypes.string,
    id: PropTypes.string,
    hideLabel: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    meta: PropTypes.object,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date)
};

DatePickerField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelHelpText: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date)
  };
