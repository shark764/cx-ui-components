import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import DatePicker from "react-day-picker/DayPickerInput";
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';


import FieldWrapper from '../FieldWrapper';

import 'react-day-picker/lib/style.css';
import './custom.css';

const parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  }
  
const formatDate = (date, format, locale) => dateFnsFormat(date, format, { locale });

const Picker = ({
    input,
    label,
    labelHelpText,
    placeholder,
    disabled,
    hideLabel,
    meta: { touched, error, warning },
    minDate,
    maxDate
    }) => {
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
                <DatePicker
                    onDayChange={date => {
                        input.onChange(date);
                        input.onBlur();
                    }}
                    inputProps={{
                        className: touched && !!error ? 'errored' : '',
                        disabled,
                    }}
                    value={input.value} 
                    placeholder={placeholder || "YYYY-MM-DD"}
                    format="YYYY-MM-DD"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    dayPickerProps={
                        {
                            disabledDays : {
                                after: maxDate,
                                before: minDate
                            }
                        }
                    }/>
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
