import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List } from 'immutable';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import PlusIconSVG from '../../../Icons/PlusIconSVG';
import CloseIconSVG from '../../../Icons/CloseIconSVG';
import { Input } from '../StyledInputs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
`;

const RemoveButton = styled.div`
  margin-top: ${props => {
    if (props.type === 'urls') {
      return `5px;`;
    } else {
      return `8px;`;
    }
  }};
`;
const Grip = styled.div`
  margin-top: ${props => {
    if (props.type === 'urls') {
      return `5px;`;
    } else {
      return `8px;`;
    }
  }};
`;

const InputWrapper = styled(Input)`
  width: 84%;
`;

const ListWrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  ${props => {
    if (props.type === 'urls') {
      return `
    border: 1px solid #8080804a;
    margin-top: 30px;
    `;
    } else {
      return `
    border: 1px solid #80808026;
    margin-top: 10px;
    `;
    }
  }};
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 0px;
`;

const ListItemText = styled.span`
  background: white;
  ${props => {
    if (props.type === 'urls') {
      return `
    margin: 5px 0;
    `;
    } else {
      return `
    border: 1px solid #8080804a;
    margin: 5px 0;
    padding: 5px 20px;
    border-radius: 3px;
    color: grey;
    width: 80%;
    `;
    }
  }};
`;

class ListInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListItem: '',
    };
  }

  saveRefrence = e => this.setState({ currentListItem: e.target.value });

  addFormItem = e => {
    e.preventDefault();
    if (this.state.currentListItem.trim() !== '') {
      this.props.input.onChange(
        this.props.input.value === ''
          ? new List([this.state.currentListItem])
          : this.props.input.value.push(this.state.currentListItem)
      );
    }
    this.setState({ currentListItem: '' });
  };

  removeListItem = index => this.props.input.onChange(this.props.input.value.delete(index));

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    this.props.input.onChange(this.props.input.value.delete(source.index).insert(destination.index, draggableId));
  };

  render() {
    return (
      <FieldWrapper
        inputName={this.props.input.name}
        label={this.props.label}
        touched={this.props.touched}
        error={this.props.error}
        warning={this.props.warning}
      >
        <InputWrapper
          className="list-item-add-input"
          data-automation="listItemAddInput"
          onChange={this.saveRefrence}
          value={this.state.currentListItem}
        />
        <ActionButton className="list-item-add-button" data-automation="listItemAddButton" onClick={this.addFormItem}>
          <PlusIconSVG size={12} />
        </ActionButton>

        {this.props.input.value &&
          this.props.input.value.size > 0 && (
            <ListWrapper type={this.props.input.name}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId={this.props.input.name}>
                  {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {this.props.input.value &&
                        this.props.input.value.map((li, index) => (
                          <Draggable draggableId={li} index={index} key={li + index}>
                            {provided => (
                              <ListItem
                                innerRef={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {this.props.input.name !== 'urls' && (
                                  <Grip className="list-item-grip-icon" type={this.props.input.name}>
                                    :::
                                  </Grip>
                                )}
                                <ListItemText className="list-item-text" type={this.props.input.name}>
                                  {li}
                                </ListItemText>
                                <RemoveButton
                                  className="list-item-remove-button"
                                  data-automation="removeListItemButton"
                                  type={this.props.input.name}
                                  onClick={() => this.removeListItem(index)}
                                >
                                  <CloseIconSVG closeIconType="secondary" size={12} />
                                </RemoveButton>
                              </ListItem>
                            )}
                          </Draggable>
                        ))}
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

export default function ListField(props) {
  return <ReduxFormField {...props} component={ListInput} />;
}

ListField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ListField.defaultProps = {
  disabled: false,
};

ListInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
};
