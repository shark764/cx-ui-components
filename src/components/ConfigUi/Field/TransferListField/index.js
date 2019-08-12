/*
 * Copyright © 2015-2019 Serenova, LLC. All rights reserved.
 */

/**
 *
 * TransferListField
 *
 */

import React, { Component, Fragment } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Field as ReduxFormField } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button';
import { List } from 'immutable';
import EditIconSVG from '../../../SVGs/EditIconSVG';
import CloseIconSVG from '../../../SVGs/CloseIconSVG';
import LoadingSpinnerSVG from '../../../SVGs/LoadingSpinnerSVG';
import ConfirmationWrapper from '../../Confirmation/ConfirmationWrapper';

const AddNewContactHelpTextWrapper = styled.div`
  dispaly: block;
  margin: 15px;
  text-align: center;
  font-size: 13px;
  font-style: italic;
`;
const AddNewContactHelpText = styled.p`
  color: #656565;
  margin: 0px;
`;
const AddNewContactWarningText = styled.p`
  font-weight: bold;
  color: #d72727;
  margin: 0px;
`;
const TransferListItemsContainer = styled.div`
  padding: ${props => (props.isDraggingOver ? '15px' : '0')};
  background-color: ${props => (props.isDraggingOver ? 'rgba(0, 0, 0, 0.21)' : 'white')};
`;
const TransferListItemWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  border: ${props => (props.isDragging ? '1px solid rgb(170, 214, 255)' : 'none')};
  background-color: ${props => (props.isDragging ? 'rgb(170, 214, 255)' : 'white')};
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: none !important;
  height: 40px !important;
  max-height: 40px !important;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.03);
  :hover {
    background: #d7e9f5;
  }
`;
const CategoryGripIcon = styled.div`
  flex: 10 0;
  padding: 10px;
  color: #656565;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const HierarchyName = styled.div`
  flex: 90 0;
  padding: 10px;
  color: #656565;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const HeaderActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 280;
  padding: 10px;
  margin-left: auto;
`;
const EndpointsContainer = styled.div`
  padding: 10px;
  background-color: ${props => (props.isDraggingOver ? 'rgba(0, 0, 0, 0.21)' : 'white')};
`;
const EndpointsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px !important;
  max-height: 40px !important;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  :hover {
    background: #d7e9f5;
  }
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${props => (props.isDragging ? 'rgb(170, 214, 255)' : 'white')};
`;
const EndpointActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 130 0;
  max-width: 130px;
  padding: 10px;
  margin-left: auto;
`;
const ActionButton = styled(Button)`
  padding: 2px 8px 5px 8px;
  margin-right: 10px;
  margin-left: auto;
`;
const EndpointItem = styled.div`
  flex: 100 0;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

class TransferListInput extends Component {
  onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (destination.droppableId !== source.droppableId) {
      return;
    }
    const endpoints = this.props.input.value;

    // Re-orders individual transfer list items after the drag:
    if (result.type !== 'DEFAULT') {

      // filters out transfer-list items belong to the same hierarchy based on the current dragging item:
      const categoryItems = endpoints.filter(endpoint => endpoint.get('categoryUUID') === result.type);

      // returns reOrdered categories items:
      const reOrderedCategoryItems = categoryItems
        .delete(source.index)
        .insert(destination.index, categoryItems.get(source.index));

      const reOrderedEndpoints = endpoints.reduce((accumlator, currentVal) => {
        // If drag and drop is from top to down: insert reOrderedCategoryItems at the source Index element:
        if (
          source.index < destination.index &&
          currentVal.get('endpointUUID') === categoryItems.getIn([source.index, 'endpointUUID'])
        ) {
          return accumlator.push(...reOrderedCategoryItems);
        }
        // If drag and drop is from down to top: insert reOrderedCategoryItems at the destiantion Index element:
        else if (
          source.index > destination.index &&
          currentVal.get('endpointUUID') === categoryItems.getIn([destination.index, 'endpointUUID'])
        ) {
          return accumlator.push(...reOrderedCategoryItems);
        }
        // If the current value doesnot belong to the current dragging elements hierarchy, do not reorder: 
        else if (currentVal.get('categoryUUID') !== categoryItems.getIn([0, 'categoryUUID'])) {
          return accumlator.push(currentVal);
        }
        return accumlator;
      }, List());

      this.props.input.onChange(reOrderedEndpoints);
    }
    // Re-orders group of transfer list items(categories) after the drag:
    else {
      const sourceItems = endpoints.filter(
        endpoint => endpoint.get('categoryUUID') === this.props.endpointHeaders.getIn([source.index, 'categoryUUID'])
      );
      const destinationItems = endpoints.filter(
        endpoint => endpoint.get('categoryUUID') === this.props.endpointHeaders.getIn([destination.index, 'categoryUUID'])
      );

      const sourceIndex = endpoints.findIndex(
        endpoint => endpoint.get('categoryUUID') === this.props.endpointHeaders.getIn([source.index, 'categoryUUID'])
      );
      const destinationIndex = endpoints.findIndex(
        endpoint => endpoint.get('categoryUUID') === this.props.endpointHeaders.getIn([destination.index, 'categoryUUID'])
      );

      const reOrderedEndpoints = endpoints.reduce((accumlator, currentVal, index) => {
        if (
          currentVal.get('categoryUUID') !== sourceItems.getIn([0, 'categoryUUID']) &&
          currentVal.get('categoryUUID') !== destinationItems.getIn([0, 'categoryUUID'])
        ) {
          return accumlator.push(currentVal);
        } else if (
          currentVal.get('categoryUUID') === destinationItems.getIn([0, 'categoryUUID']) &&
          index === destinationIndex
        ) {
          const items =
            sourceIndex < destinationIndex
              ? destinationItems.concat(sourceItems)
              : sourceItems.concat(destinationItems);
          return accumlator.push(...items);
        }
        return accumlator;
      }, List());

      this.props.input.onChange(reOrderedEndpoints);
    }
  };
  render() {
    return (
      <Fragment>
        {!this.props.input.value &&
          this.props.selectedEntityId === 'create' && (
            <AddNewContactHelpTextWrapper>
              <AddNewContactHelpText>Add transfer contacts with the plus button above. </AddNewContactHelpText>
              <AddNewContactWarningText>
                You must have one or more contacts in your transfer list in order to save.
              </AddNewContactWarningText>
            </AddNewContactHelpTextWrapper>
          )}
        {!this.props.input.value && this.props.selectedEntityId !== 'create' && <LoadingSpinnerSVG size={100} />}
        {this.props.input.value &&
          this.props.input.value.size > 0 && (
            <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
              <Droppable droppableId="transferLists">
                {(provided, snapshot) => (
                  <TransferListItemsContainer
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    {this.props.endpointHeaders.map((category, index) => (
                      <Draggable
                        draggableId={category.get('categoryUUID')}
                        index={index}
                        key={category.get('categoryUUID')}
                      >
                        {(provided, snapshot) => (
                          <TransferListItemWrapper
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            innerRef={provided.innerRef}
                            isDragging={snapshot.isDragging}
                          >
                            <HeaderContainer>
                              <CategoryGripIcon title={`Drag to reorder category : ${category.get('hierarchy')}`}>
                                :::
                              </CategoryGripIcon>
                              <HierarchyName title={category.get('hierarchy')}>
                                {category.get('hierarchy')}
                              </HierarchyName>
                              <HeaderActionsWrapper>
                                <ActionButton
                                  className="dtpanel-action-update-item"
                                  title={`Update Category Name : ${category.get('hierarchy')}`}
                                  onClick={() =>
                                    this.props.setSelectedSubEntityId(
                                      `updateCategoryHeader:${category.get('categoryUUID')}`
                                    )
                                  }
                                  disabled={!this.props.userHasUpdatePermission}
                                  type="button"
                                >
                                  <EditIconSVG size={15} editIconType="primary" />
                                </ActionButton>
                                <ConfirmationWrapper
                                  confirmBtnCallback={() => this.props.removeCategoryItems(category.get('categoryUUID'))}
                                  mainText={
                                    this.props.selectedEntityId !== 'create' && this.props.endpointHeaders.size === 1
                                      ? `TransferList Cannot be empty.`
                                      : `This will delete all of the transfer list items in this category.`
                                  }
                                  secondaryText={
                                    this.props.selectedEntityId !== 'create' && this.props.endpointHeaders.size === 1
                                      ? 'TransferList should contain at least one category.'
                                      : 'Are you sure you want to continue?'
                                  }
                                  cancelBtnText={
                                    this.props.selectedEntityId !== 'create' && this.props.endpointHeaders.size === 1
                                      ? 'Okay'
                                      : 'Cancel'
                                  }
                                  openPopupBox={
                                    this.props.selectedEntityId !== 'create' && this.props.endpointHeaders.size === 1
                                      ? true
                                      : false
                                  }
                                >
                                  <div style={{ marginRight: '10px' }}>
                                    <ActionButton
                                      className="dtpanel-action-remove-item"
                                      title={`Delete All Transfer List Items in : ${category.get('hierarchy')}`}
                                      disabled={!this.props.userHasUpdatePermission}
                                      type="button"
                                    >
                                      <CloseIconSVG
                                        size={10}
                                        closeIconType="primary"
                                        disabled={!this.props.userHasUpdatePermission}
                                      />
                                    </ActionButton>
                                  </div>
                                </ConfirmationWrapper>
                              </HeaderActionsWrapper>
                            </HeaderContainer>
                            <Droppable droppableId={category.get('droppableUUID')} type={category.get('categoryUUID')}>
                              {(provided, snapshot) => (
                                <EndpointsContainer
                                  innerRef={provided.innerRef}
                                  {...provided.droppableProps}
                                  isDraggingOver={snapshot.isDraggingOver}
                                >
                                  {this.props.input.value
                                    .filter(point => point.get('categoryUUID') === category.get('categoryUUID'))
                                    .map((endpoint, index) => (
                                      <Draggable
                                        draggableId={endpoint.get('draggableUUID')}
                                        index={index}
                                        key={endpoint.get('draggableUUID')}
                                      >
                                        {(provided, snapshot) => (
                                          <EndpointsWrapper
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            innerRef={provided.innerRef}
                                            isDragging={snapshot.isDragging}
                                            key={endpoint.get('endpointUUID')}
                                            index={index}
                                          >
                                            <EndpointItem
                                              className="list-item-grip-icon"
                                              title={`Drag to Reorder Transfer List Item : ${endpoint.get('name')}`}
                                            >
                                              :::
                                            </EndpointItem>
                                            <EndpointItem title={endpoint.get('name')}>
                                              {endpoint.get('name')}
                                            </EndpointItem>
                                            <EndpointItem title={endpoint.get('contactType')}>
                                              {endpoint.get('contactType')}
                                            </EndpointItem>
                                            <EndpointActionsWrapper>
                                              <ActionButton
                                                className="dtpanel-action-update-item"
                                                title={`Update Transfer List Item : ${endpoint.get('name')}`}
                                                onClick={() =>
                                                  this.props.setSelectedSubEntityId(
                                                    `updateTransferListItem:${endpoint.get('endpointUUID')}`
                                                  )
                                                }
                                                disabled={!this.props.userHasUpdatePermission}
                                                type="button"
                                              >
                                                <EditIconSVG size={15} editIconType="primary" />
                                              </ActionButton>
                                              <ConfirmationWrapper
                                                confirmBtnCallback={() =>
                                                  this.props.removeTransferListItem(endpoint.get('endpointUUID'))
                                                }
                                                mainText={
                                                  this.props.selectedEntityId !== 'create' &&
                                                    this.props.input.value.size === 1
                                                    ? `TransferList Cannot be empty.`
                                                    : `Deleting this item cannot be undone.`
                                                }
                                                secondaryText={
                                                  this.props.selectedEntityId !== 'create' &&
                                                    this.props.input.value.size === 1
                                                    ? 'TransferList should contain at least one contact.'
                                                    : 'Are you sure you want to continue?'
                                                }
                                                cancelBtnText={
                                                  this.props.selectedEntityId !== 'create' &&
                                                    this.props.input.value.size === 1
                                                    ? 'Okay'
                                                    : 'Cancel'
                                                }
                                                openPopupBox={
                                                  this.props.selectedEntityId !== 'create' &&
                                                    this.props.input.value.size === 1
                                                    ? true
                                                    : false
                                                }
                                              >
                                                <ActionButton
                                                  className="dtpanel-action-remove-item"
                                                  title={`Delete Transfer List Item : ${endpoint.get('name')}`}
                                                  disabled={!this.props.userHasUpdatePermission}
                                                  type="button"
                                                >
                                                  <CloseIconSVG
                                                    size={10}
                                                    closeIconType="primary"
                                                    disabled={!this.props.userHasUpdatePermission}
                                                  />
                                                </ActionButton>
                                              </ConfirmationWrapper>
                                            </EndpointActionsWrapper>
                                          </EndpointsWrapper>
                                        )}
                                      </Draggable>
                                    ))}
                                  {provided.placeholder}
                                </EndpointsContainer>
                              )}
                            </Droppable>
                          </TransferListItemWrapper>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </TransferListItemsContainer>
                )}
              </Droppable>
            </DragDropContext>
          )}
      </Fragment>
    );
  }
}

export default function TransferListField(props) {
  return <ReduxFormField {...props} component={TransferListInput} />;
}

TransferListField.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

TransferListField.defaultProps = {
  disabled: false
};

TransferListInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
  selectedEntityId: PropTypes.string,
  endpointHeaders: PropTypes.object,
  userHasUpdatePermission: PropTypes.bool,
  setSelectedSubEntityId: PropTypes.func.isRequired,
  removeTransferListItem: PropTypes.func.isRequired,
  removeCategoryItems: PropTypes.func.isRequired
};