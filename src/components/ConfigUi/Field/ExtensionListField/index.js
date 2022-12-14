import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generateUUID } from 'serenova-js-utils/uuid';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import CloseIconSVG from '../../../Icons/CloseIconSVG';
import { Input } from '../StyledInputs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { regions } from '../../../../constants';

const RemoveButton = styled.div`
  display: inline-block;
  float: right;
  margin-left: 13px;
`;
const Grip = styled.div`
margin-top: 0px;
margin-right 14px;
display: inline-block;
cursor: ${props => props.disabled ? 'not-allowed' : 'inherit'}
`;

const InputWrapper = styled(Input)`
  width: 90%;
  margin: 5px 5%;
`;
const SmallInput = styled(Input)`
  width: 200px;
  height: 25px;
  float: right;
`;

const ListWrapper = styled.div`
  width: 100%;
  padding: 10px 0px;
`;

const StyledSelect = styled.select`
  display: inline-block;
  background: white;
  width: 90px;
  margin-bottom: 5px;
  height: 25px;
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid #80808038;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset, 0 -1px 0 rgba(0, 0, 0, 0.05) inset;

  &::placeholder {
    color: #404040;
  }

  &:focus {
    outline: 0;
    border-color: #3498db;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }
`;
const StyledRegion = styled.select`
  display: inline-block;
  background: white;
  width: 200px;
  margin-bottom: 5px;
  height: 25px;
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid #80808038;
  float: right;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset, 0 -1px 0 rgba(0, 0, 0, 0.05) inset;

  &::placeholder {
    color: #404040;
  }

  &:focus {
    outline: 0;
    border-color: #3498db;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

const ListItem = styled.div`
  margin: 10px 0px;
  padding: 15px 0px;
  background: white;
`;

const ListItemText = styled.span`
  background: white;
  display: inline-block;
  margin: 0px 10px;
`;
const PrimaryText = styled.span`
  background: white;
  display: inline-block;
  margin: 0px 10px;
  font-style: italic;
  color: #808080a8;
`;

const ErrorInExtension = styled.span`
  color: red;
  font-style: italic;
  text-align: center;
  display: inline-block;
  width: 100%;
`;

class ExtensionListInput extends Component {
  saveRefrence = ({ target: { value } }, type, index) => {
    this.props.input.onChange(this.props.input.value.setIn([index, type], value));
  };

  removeListItem = index => {
    this.props.input.onChange(this.props.input.value.delete(index));
  };

  onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const orderSwapped = this.props.input.value
      .delete(source.index)
      .insert(destination.index, this.props.input.value.get(source.index));

    this.props.input.onChange(orderSwapped);
  };

  render() {
    return (
      <FieldWrapper
        inputName={this.props.input.name}
        label={this.props.label}
        touched={this.props.touched}
        error={this.props.error}
        warning={this.props.warning}
        hideLabel
      >
        {this.props.input.value && this.props.input.value.size > 0 && (
          <ListWrapper type={this.props.input.name}>
            <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
              <Droppable droppableId={this.props.input.name} isDropDisabled={this.props.disabled}>
                {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {this.props.input.value &&
                      this.props.input.value.map((li, index) => (
                        (li.get('hide') === false) && (
                          <Draggable
                          draggableId={li.get('id') || generateUUID()}
                          index={index}
                          key={li.get('id') || generateUUID()}
                          isDragDisabled={this.props.disabled}
                        >
                          {provided => (
                            <Fragment>
                              <ListItem
                                innerRef={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Grip className="list-item-grip-icon" disabled={this.props.disabled}>:::</Grip>

                                <StyledSelect
                                  className="list-item-text"
                                  data-automation="extensionList"
                                  onChange={e => this.saveRefrence(e, 'type', index)}
                                  value={li.get('type')}
                                  disabled={this.props.disabled || li.get('type') === 'webrtc'}
                                >
                                  <option value="pstn">{this.props.extensionLabels && this.props.extensionLabels['pstn'] || 'PSTN'}</option>
                                  {li.get('type') === 'webrtc' && <option value="webrtc">{this.props.extensionLabels && this.props.extensionLabels['webrtc'] || 'WebRTC'}</option>}
                                  <option value="sip">{this.props.extensionLabels && this.props.extensionLabels['sip'] || 'SIP'}</option>
                                </StyledSelect>

                                {li.get('type') === 'webrtc' && (
                                  <ListItemText className="list-item-text"> {li.get('provider')} </ListItemText>
                                )}

                                {index === 0 && <PrimaryText className="list-item-text">{this.props.primaryText || 'primary'}</PrimaryText>}
                                <RemoveButton
                                  className="list-item-remove-button"
                                  onClick={e => (li.get('type') !== 'webrtc' || this.props.disabled) && this.removeListItem(index)}
                                >
                                  <CloseIconSVG
                                    closeIconType="secondary"
                                    size={12}
                                    disabled={li.get('type') === 'webrtc' || this.props.disabled}
                                  />
                                </RemoveButton>

                                {li.get('type') === 'webrtc' && (
                                  <StyledRegion
                                    className="list-item-text"
                                    onChange={e => this.saveRefrence(e, 'region', index)}
                                    value={li.get('region')}
                                    disabled={this.props.disabled || !this.props.canUpdateRegion}
                                  >
                                    {regions.map((region, index) => (
                                      <option key={index} value={region.value}>
                                        {region.label}
                                      </option>
                                    ))}
                                  </StyledRegion>
                                )}

                                {li.get('type') !== 'webrtc' && (
                                  <SmallInput
                                    className="list-item-text"
                                    value={this.props.input.value.getIn([index, 'value'])}
                                    onChange={e => this.saveRefrence(e, 'value', index)}
                                    placeholder={(this.props.placeholders && this.props.placeholders.extension) || "Extension"}
                                    data-automation="extensionInput"
                                    hasError={
                                      this.props.meta.error &&
                                      this.props.meta.error[index] &&
                                      this.props.meta.error[index].value
                                    }
                                    disabled={this.props.disabled}
                                  />
                                )}

                                {this.props.meta.error &&
                                  this.props.meta.error[index] &&
                                  this.props.meta.error[index].value && 
                                    <ErrorInExtension>{this.props.meta.error[index].message}</ErrorInExtension>
                                }

                                <InputWrapper
                                  className="list-item-text"
                                  value={this.props.input.value.getIn([index, 'description'])}
                                  onChange={e => this.saveRefrence(e, 'description', index)}
                                  placeholder={(this.props.placeholders && this.props.placeholders.label) || 'Label'}
                                  data-automation="extensionLabelInput"
                                  disabled={this.props.disabled || li.get('type') === 'webrtc'}
                                  hasError={
                                    this.props.meta.error &&
                                    this.props.meta.error[index] &&
                                    this.props.meta.error[index].label
                                  }
                                />

                                {this.props.meta.error &&
                                  this.props.meta.error[index] &&
                                  this.props.meta.error[index].label &&
                                    <ErrorInExtension>{this.props.meta.error[index].message}</ErrorInExtension>
                                }
                              </ListItem>
                            </Fragment>
                          )}
                        </Draggable>
                        )))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </ListWrapper>
        )}
      </FieldWrapper>
    );
  }
}

export default function ExtensionListField(props) {
  return <ReduxFormField {...props} component={ExtensionListInput} />;
}

ExtensionListField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  extensionLabels: PropTypes.object
};

ExtensionListField.defaultProps = {
  disabled: false,
};

ExtensionListInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
  extensionLabels: PropTypes.object,
  canUpdateRegion: PropTypes.bool,
  placeholders: PropTypes.object,
  primaryText: PropTypes.string
};
