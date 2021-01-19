import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { List, fromJS } from 'immutable';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import PlusIconSVG from '../../../Icons/PlusIconSVG';
import CloseIconSVG from '../../../Icons/CloseIconSVG';

const ActionButton = styled.button`
  background-color: #f9f9f9;
  border: 1px solid #cccccc;
  border-radius: 4px;
  color: #07487a;
  cursor: pointer;
  font-size: 14px;
  margin-top: -2px;
  padding: 3px 10px;
  min-height: 26px;
  margin-top: 2px;
  float: right;
  :hover {
    box-shadow: inset 0px 1px 2px rgba(175, 175, 175, 0.4);
  }
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: gray;
      & .PlusIconSVG {
        cursor: not-allowed;
        fill: gray;
      }
      & .PlusIconSVG .icon {
        cursor: not-allowed;
        fill: gray;
      }
    `};
`;

const RemoveButton = styled.div`
  margin-top: 8px;
`;

const ListWrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #80808026;
  margin-top: 10px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 0px;
`;

const ListItemText = styled.span`
  background: white;
  border: 1px solid #8080804a;
  margin: 5px 0;
  padding: 5px 20px;
  border-radius: 3px;
  color: grey;
  width: 80%;
`;

const StyledSelect = styled.select`
  width: 84%;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CapacityRuleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const VoiceContainer = styled.div`
  flex-basis: 25%;
  display: flex;
  border: 1px solid #07487a;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
`;

const GroupsContainer= styled.div`
  flex-basis: 75%;
`;

const VoiceItem = styled.p`
  background-color: #07487a;
  color: white;
  padding: 3px 8px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const InteractionInputWrapperDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  margin-top: 10px;
`;

const Label = styled.label`
  flex-shrink: 0;
  display: inline-block;
  width: 150px;
  margin-top: 5px;
  padding-right: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
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

const GroupWrapper = styled.div`
  display:flex;
  flex-direction: row;
  padding: 3px;
  margin-bottom: 3px;
  border: 1px solid #48484820;
  box-sizing: border-box;
`;

const RemoveGroup = styled.div`
  margin: 6px 8px;
  align-content: flex-end
`;

const RemoveVoiceButton = styled.span`
  margin-left: 5px;
`;

const AddGroupWrapper = styled.div`
  margin-bottom: 5px;
`;

class CapacityRuleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListItemsList: new Array(props.input.value.get('groups') ? props.input.value.get('groups').size : 0).fill('')
    };
  };

  changeSelect = (i, value) =>  this.setState(({ currentListItemsList: prevCurrentListItemsList }) => {
    prevCurrentListItemsList.splice(i, 1, value)
    return {
      currentListItemsList: prevCurrentListItemsList
    }
  });

  removeVoice = () => this.props.input.onChange(this.props.input.value.set('voice', false))

  handleAddItem = (i) => {
    if (this.state.currentListItemsList[i]) {
      if (this.state.currentListItemsList[i] === 'voice') {
        this.props.input.onChange(this.props.input.value.set('voice', true))
      } else {
        this.props.input.onChange(
          !this.props.input.value.get('groups').get(i) || 
          !this.props.input.value.getIn(['groups', i, 'channels']) || 
          !this.props.input.value.getIn(['groups', i, 'channels']).size ||
          !this.props.input.value.getIn(['groups', i, 'channels', 0]) ? 
            this.props.input.value.setIn(['groups', i, 'channels'], List([this.state.currentListItemsList[i]])) : 
            this.props.input.value.updateIn(['groups', i, 'channels'], channels => channels.push(this.state.currentListItemsList[i]))
        );
      }
    }
    this.changeSelect(i, "");
  };

  removeListItem = (listIndex, listItemIndex) => this.props.input.onChange(
    this.props.input.value.deleteIn(['groups', listIndex, 'channels', listItemIndex])
  );

  changeGroupInteractionsNumber = (index, value) => this.props.input.onChange(
    this.props.input.value.setIn(['groups', index, 'interactions'], value)
  );

  addGroup = () => this.props.input.onChange(
    this.props.input.value.updateIn(['groups'], groups => groups.push(fromJS({
      channels: [''],
      interactions: ""
    })))
  );

  removeGroup = index => this.props.input.onChange(
    this.props.input.value.deleteIn(['groups', index])
  );

  render() {
    const {
      props: {
        meta: { 
          error,
          warning,
          touched 
        },
        input: {
          value
        },
        disabled,
        options,
        messages: {
          selectPlaceholder,
          numInteractionsLabel,
          numInteractionsPlaceholder,
          addGroupPopover,
          removeItem,
          removeGroup
        }
      },
      state: {
        currentListItemsList
      }  
    } = this;

    const fieldWrapperProps = {
      label: 'whatever',
      touched,
      hideLabel: true,
    };

    return (
      <Wrapper>
        <AddGroupWrapper>
          <ActionButton
            className="add-group"
            data-automation="addGroup"
            onClick={(e) => {
              e.preventDefault();
              this.addGroup();
            }}
            disabled={disabled}
            title={addGroupPopover}
          >
            <PlusIconSVG size={12} />
          </ActionButton>
        </AddGroupWrapper>
        <CapacityRuleContainer>
          <VoiceContainer>
            {value && value.get('voice') && (
              <VoiceItem>
                {options.find(({ value }) => value === 'voice').label}
                {!disabled && 
                  <RemoveVoiceButton
                    className="remove-voice-channel"
                    data-automation="removeLVoiceChannel"
                    onClick={this.removeVoice}
                    title={removeItem}
                  >
                    <CloseIconSVG 
                      size={11} 
                      closeIconType="secondary"
                    />
                  </RemoveVoiceButton>
                }
              </VoiceItem>
            )}
          </VoiceContainer>
          <GroupsContainer>
            {value && value.get('groups') && value.get('groups').size > 0 && value.get('groups').map((group, i) => 
              <GroupWrapper>
                {!disabled &&
                  <RemoveGroup 
                    onClick={() => this.removeGroup(i)} 
                    title={removeGroup}>
                    <CloseIconSVG size={12} closeIconType="secondary" />
                  </RemoveGroup>
                }
                <FieldWrapper 
                  {...fieldWrapperProps} 
                  error={error && error[i] && error[i].message}
                  warning={warning && warning[i]}
                >
                  <StyledSelect
                    value={currentListItemsList[i]}
                    onChange={({ target: { value }}) => this.changeSelect(i, value)}
                    disabled={disabled}
                    hasError={touched && error && error[i] && error[i].isSelectedValueInvalid}
                    key={i}
                  >
                    {!currentListItemsList[i] && 
                      <option disabled hidden value="">
                        {selectPlaceholder || '-- Please select --'}
                      </option>
                    }
                    {options && options.length && 
                      options.filter(({ value: optionValue }) =>
                        (optionValue === 'voice' && !value.get('voice')) ||
                        (optionValue !== 'voice' && (!group.get('channels') || !group.get('channels').size || 
                          !group.get('channels').some(channel => channel === optionValue))))
                        .map(({ value: optionValue, label }, index) => 
                          <option key={index} value={optionValue}>{label}</option>)}
                  </StyledSelect>
                  <ActionButton
                    className="channel-item-add-button"
                    data-automation="channelItemAddButton"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleAddItem(i);
                    }}
                    disabled={!currentListItemsList[i] || disabled}
                  >
                    <PlusIconSVG size={12} />
                  </ActionButton>
                  {group.get('channels') && group.get('channels').size > 0 && group.getIn(['channels', 0]) && (
                      <ListWrapper>
                        {group.get('channels').map((channel, index) => 
                          <ListItem>
                              <ListItemText className="channel-item-text">
                              {options.find(({ value }) => value === channel).label}
                              </ListItemText>
                              {!disabled && 
                                <RemoveButton
                                className="list-item-remove-button"
                                data-automation="removeListItemButton"
                                onClick={() => this.removeListItem(i, index)}
                                title={removeItem}
                                >
                                  <CloseIconSVG closeIconType="secondary" size={12} />
                                </RemoveButton>
                              }
                          </ListItem>
                        )}
                      </ListWrapper>
                  )}
                  <InteractionInputWrapperDiv>
                    <Label htmlFor='interaction'>{numInteractionsLabel}: *</Label>
                    <Input 
                      value={group.get('interactions')}
                      placeholder={numInteractionsPlaceholder}
                      onChange={(e) => this.changeGroupInteractionsNumber(i, e.target.value)}
                      name={'interactions'}
                      disabled={disabled}
                      hasError={error && error[i] && error[i].isInteractionsNumberInvalid}
                    />
                  </InteractionInputWrapperDiv>
              </FieldWrapper>
            </GroupWrapper>
            )}
          </GroupsContainer>
        </CapacityRuleContainer>
      </Wrapper>
    );
  }
}

export default function CapacityRuleField(props) {
  return <ReduxFormField {...props} component={CapacityRuleComponent} />;
}

CapacityRuleField.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.array.isRequired,
  messages: PropTypes.object.isRequired
};

CapacityRuleField.defaultProps = {
  disabled: false,
};


CapacityRuleComponent.propTypes = {
  input: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  options: PropTypes.array.isRequired,
  messages: PropTypes.object.isRequired
};