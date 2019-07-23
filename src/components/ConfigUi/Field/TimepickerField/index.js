import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';

import FieldWrapper from '../FieldWrapper';
import Timepicker from '../../../General/Timepicker';

const Picker = ({
    input,
    label,
    labelHelpText,
    disabled,
    hideLabel,
    meta: { touched, error, warning },
    twelveHoursMode,
    hoursStep,
    minutesStep,
    nullOption,
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
            <Timepicker
                onChange={(minutesOnDay) => input.onChange(minutesOnDay)}
                minutesOnDay={input.value} 
                disabled={disabled}
                twelveHoursMode={twelveHoursMode}
                hoursStep={hoursStep}
                minutesStep={minutesStep}
                nullOption={nullOption}/>
        </FieldWrapper>
    );
};

export const TimepickerField = (props) => 
    <ReduxFormField
        {...props}
        component={Picker}
     />;

Picker.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    labelHelpText: PropTypes.string,
    hideLabel: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    meta: PropTypes.object,
    twelveHoursMode: PropTypes.bool,
    hoursStep: PropTypes.number,
    minutesStep: PropTypes.number,
    nullOption: PropTypes.bool,
};

TimepickerField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelHelpText: PropTypes.string,
    disabled: PropTypes.bool,
    twelveHoursMode: PropTypes.bool,
    hoursStep: PropTypes.number,
    minutesStep: PropTypes.number,
    nullOption: PropTypes.bool,
};