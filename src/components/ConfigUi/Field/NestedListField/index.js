/*
 * Copyright © 2015-2019 Serenova, LLC. All rights reserved.
 */

/**
 *
 * NestedListField
 *
 */

import React, { Component, Fragment } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Field as ReduxFormField } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button';
import { List } from 'immutable';
import EditIconSVG from '../../../Icons/EditIconSVG';
import CloseIconSVG from '../../../Icons/CloseIconSVG';
import LoadingSpinnerSVG from '../../../Icons/LoadingSpinnerSVG';
import ConfirmationWrapper from '../../Confirmation/ConfirmationWrapper';

const AddNewReasonHelpTextWrapper = styled.div`
  display: block;
  margin: 15px;
  text-align: center;
  font-size: 13px;
  font-style: italic;
`;
const AddNewReasonHelpText = styled.p`
  color: #656565;
  margin: 0px;
`;
const AddNewReasonWarningText = styled.p`
  font-weight: bold;
  color: #d72727;
  margin: 0px;
`;
const NestedListItemsContainer = styled.div`
  padding: ${props => (props.isDraggingOver ? '20px' : '5px')};
  background-color: ${props => (props.isDraggingOver ? 'rgba(0, 0, 0, 0.21)' : '#F4F5F7')};
`;
const NestedListItemWrapper = styled.div`
  border: ${props => (props.isDragging ? '5px solid rgb(170, 214, 255)' : 'none')};
  background-color: white;
  margin-bottom: 5px;
  border-radius: 2px
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  :hover {
    border: 5px solid #d7e9f5;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: none !important;
  height: 30px !important;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
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
const ReasonsContainer = styled.div`
  padding: 10px;
  background-color: ${props => (props.isDraggingOver ? 'rgba(0, 0, 0, 0.21)' : 'white')};
`;
const ReasonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px !important;
  margin-bottom: 10px;
  align-items: center;
  :hover {
    background: #d7e9f5;
  }
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${props => (props.isDragging ? 'rgb(170, 214, 255)' : 'white')};
`;
const ReasonActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 130px;
  padding: 10px;
  margin-left: auto;
`;
const ActionButton = styled(Button)`
  padding: 2px 8px 5px 8px;
  margin-right: 10px;
  margin-left: auto;
`;
const ReasonItem = styled.div`
  flex: 100 0;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const CenterWrapper = styled.div`
  text-align: center;
`;
const Warning = styled.span`
  color: orange;
`;

class NestedListInput extends Component {
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
    const reasons = this.props.input.value;

    // Re-orders individual nested list items after the drag:
    if (result.type !== 'DEFAULT') {
      // filters out nested-list items belong to the same hierarchy based on the current dragging item:
      const categoryItems = reasons.filter(reason => reason.get('categoryUUID') === result.type);

      // returns reOrdered categories items:
      const reOrderedCategoryItems = categoryItems
        .delete(source.index)
        .insert(destination.index, categoryItems.get(source.index));

      const reOrderedReasons = reasons.reduce((accumlator, currentVal) => {
        // If drag and drop is from top to down: insert reOrderedCategoryItems at the source Index element:
        if (
          source.index < destination.index &&
          currentVal.get('reasonUUID') === categoryItems.getIn([source.index, 'reasonUUID'])
        ) {
          return accumlator.push(...reOrderedCategoryItems);
        } else if (
          source.index > destination.index &&
          currentVal.get('reasonUUID') === categoryItems.getIn([destination.index, 'reasonUUID'])
        ) {
          // If drag and drop is from down to top: insert reOrderedCategoryItems at the destiantion Index element:
          return accumlator.push(...reOrderedCategoryItems);
        } else if (currentVal.get('categoryUUID') !== categoryItems.getIn([0, 'categoryUUID'])) {
          // If the current value doesnot belong to the current dragging elements hierarchy, do not reorder:
          return accumlator.push(currentVal);
        }
        return accumlator;
      }, List());

      const updatedReasons =
        this.props.selectedEntityId !== 'create'
          ? reOrderedReasons.map((reason, index) => reason.set('sortOrder', index))
          : reOrderedReasons;

      this.props.input.onChange(updatedReasons);
    } else {
      // Re-orders group of nested list items(categories) after the drag:
      const sourceItems = reasons.filter(
        reason => reason.get('categoryUUID') === this.props.reasonHeaders.getIn([source.index, 'categoryUUID'])
      );
      const destinationItems = reasons.filter(
        reason => reason.get('categoryUUID') === this.props.reasonHeaders.getIn([destination.index, 'categoryUUID'])
      );

      const sourceIndex = reasons.findIndex(
        reason => reason.get('categoryUUID') === this.props.reasonHeaders.getIn([source.index, 'categoryUUID'])
      );
      const destinationIndex = reasons.findIndex(
        reason => reason.get('categoryUUID') === this.props.reasonHeaders.getIn([destination.index, 'categoryUUID'])
      );

      const reOrderedReasons = reasons.reduce((accumlator, currentVal, index) => {
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

      const updatedReasons =
        this.props.selectedEntityId !== 'create'
          ? reOrderedReasons.map((reason, index) => reason.set('sortOrder', index))
          : reOrderedReasons;

      this.props.input.onChange(updatedReasons);
    }
  };

  render() {
    const {
      props: {
        meta: { error, warning },
      },
    } = this;
    return (
      <Fragment>
        {!this.props.input.value && this.props.selectedEntityId !== 'create' && (
          <CenterWrapper>
            <LoadingSpinnerSVG size={100} />
          </CenterWrapper>
        )}
        {this.props.input.value && this.props.input.value.size > 0 && this.props.input.value.toJS()[0].name && (
          <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
            <Droppable droppableId="nestedLists" isDropDisabled={!this.props.userHasUpdatePermission}>
              {(provided, snapshot) => (
                <NestedListItemsContainer
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.reasonHeaders.map((category, index) => {
                    let hierarchy =
                      category.get('hierarchy').size > 0 ? category.get('hierarchy').toJS()[0] : 'default';
                    return (
                      <Draggable
                        draggableId={category.get('categoryUUID')}
                        index={index}
                        key={category.get('categoryUUID')}
                        isDragDisabled={!this.props.userHasUpdatePermission}
                      >
                        {(provided, snapshot) => (
                          <NestedListItemWrapper
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            innerRef={provided.innerRef}
                            isDragging={snapshot.isDragging}
                          >
                            <HeaderContainer>
                              <CategoryGripIcon
                                title={`Drag to reorder category : ${hierarchy}`}
                                data-automation="categoryDragDropIcon"
                              >
                                ::
                              </CategoryGripIcon>
                              <HierarchyName title={hierarchy}>{hierarchy}</HierarchyName>
                              {this.props.userHasUpdatePermission && (
                                <HeaderActionsWrapper>
                                  <ActionButton
                                    className="dtpanel-action-update-item"
                                    data-automation="updateCategoryButton"
                                    title={`Update Category Name : ${hierarchy}`}
                                    onClick={() =>
                                      this.props.setSelectedSubEntityId(
                                        `updateCategoryHeader:${category.get('categoryUUID')}`
                                      )
                                    }
                                    disabled={!this.props.userHasUpdatePermission}
                                    type="button"
                                  >
                                    <EditIconSVG
                                      size={10}
                                      editIconType="primary"
                                      disabled={!this.props.userHasUpdatePermission}
                                    />
                                  </ActionButton>
                                  <ConfirmationWrapper
                                    confirmBtnCallback={() =>
                                      this.props.removeCategoryItems(category.get('categoryUUID'))
                                    }
                                    mainText={
                                      this.props.selectedEntityId !== 'create' && this.props.reasonHeaders.size === 1
                                        ? `Nested List Cannot be empty.`
                                        : `This will delete all of the nested list items in this category.`
                                    }
                                    secondaryText={
                                      this.props.selectedEntityId !== 'create' && this.props.reasonHeaders.size === 1
                                        ? 'Nested List should contain at least one category.'
                                        : 'Are you sure you want to continue?'
                                    }
                                    cancelBtnText={
                                      this.props.selectedEntityId !== 'create' && this.props.reasonHeaders.size === 1
                                        ? 'Okay'
                                        : 'Cancel'
                                    }
                                    openPopupBox={
                                      this.props.selectedEntityId !== 'create' && this.props.reasonHeaders.size === 1
                                        ? true
                                        : false
                                    }
                                  >
                                    <div style={{ marginRight: '10px' }}>
                                      <ActionButton
                                        className="dtpanel-action-remove-item"
                                        data-automation="removeCategoryButton"
                                        title={`Delete All Nested List Items in : ${hierarchy}`}
                                        disabled={!this.props.userHasUpdatePermission}
                                        type="button"
                                      >
                                        <CloseIconSVG
                                          size={8}
                                          closeIconType="primary"
                                          disabled={!this.props.userHasUpdatePermission}
                                        />
                                      </ActionButton>
                                    </div>
                                  </ConfirmationWrapper>
                                </HeaderActionsWrapper>
                              )}
                            </HeaderContainer>
                            <Droppable
                              droppableId={category.get('droppableUUID')}
                              type={category.get('categoryUUID')}
                              isDropDisabled={!this.props.userHasUpdatePermission}
                            >
                              {(provided, snapshot) => (
                                <ReasonsContainer
                                  innerRef={provided.innerRef}
                                  {...provided.droppableProps}
                                  isDraggingOver={snapshot.isDraggingOver}
                                >
                                  {this.props.input.value
                                    .filter(point => point.get('categoryUUID') === category.get('categoryUUID'))
                                    .map((reason, index) => (
                                      <Draggable
                                        draggableId={reason.get('draggableUUID')}
                                        index={index}
                                        key={reason.get('draggableUUID')}
                                        isDragDisabled={!this.props.userHasUpdatePermission}
                                      >
                                        {(provided, snapshot) => (
                                          <ReasonsWrapper
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            innerRef={provided.innerRef}
                                            isDragging={snapshot.isDragging}
                                            key={reason.get('reasonUUID')}
                                            index={index}
                                          >
                                            <ReasonItem
                                              className="list-item-grip-icon"
                                              data-automation="listItemDragDropIcon"
                                              title={`Drag to Reorder Nested List Item : ${reason.get('name')}`}
                                            >
                                              :::
                                            </ReasonItem>
                                            <ReasonItem title={reason.get('name')}>{reason.get('name')}</ReasonItem>
                                            <ReasonItem title={reason.get('contactType')}>
                                              {reason.get('contactType')}
                                            </ReasonItem>
                                            {this.props.userHasUpdatePermission && (
                                              <ReasonActionsWrapper>
                                                <ConfirmationWrapper
                                                  confirmBtnCallback={() =>
                                                    this.props.removeReasonListItem(reason.get('reasonUUID'))
                                                  }
                                                  mainText={
                                                    this.props.selectedEntityId !== 'create' &&
                                                      this.props.input.value.size === 1
                                                      ? `Nested List Cannot be empty.`
                                                      : `Deleting this item cannot be undone.`
                                                  }
                                                  secondaryText={
                                                    this.props.selectedEntityId !== 'create' &&
                                                      this.props.input.value.size === 1
                                                      ? 'Nested List should contain at least one contact.'
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
                                                    data-automation="removeListItemButton"
                                                    title={`Delete Nested List Item : ${reason.get('name')}`}
                                                    disabled={!this.props.userHasUpdatePermission}
                                                    type="button"
                                                  >
                                                    <CloseIconSVG
                                                      size={8}
                                                      closeIconType="primary"
                                                      disabled={!this.props.userHasUpdatePermission}
                                                    />
                                                  </ActionButton>
                                                </ConfirmationWrapper>
                                              </ReasonActionsWrapper>
                                            )}
                                          </ReasonsWrapper>
                                        )}
                                      </Draggable>
                                    ))}
                                  {provided.placeholder}
                                </ReasonsContainer>
                              )}
                            </Droppable>
                          </NestedListItemWrapper>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </NestedListItemsContainer>
              )}
            </Droppable>
          </DragDropContext>
        )}
        {!this.props.input.value && this.props.selectedEntityId === 'create' && (
          <AddNewReasonHelpTextWrapper>
            <AddNewReasonHelpText>Add Reason List items with the plus button above. </AddNewReasonHelpText>
          </AddNewReasonHelpTextWrapper>
        )}
        {(error && (
          <AddNewReasonHelpTextWrapper>
            <AddNewReasonWarningText>{error}</AddNewReasonWarningText>
          </AddNewReasonHelpTextWrapper>
        )) ||
          (warning && (
            <AddNewReasonHelpTextWrapper>
              <Warning>{warning}</Warning>
            </AddNewReasonHelpTextWrapper>
          ))}
      </Fragment>
    );
  }
}

export default function NestedListField(props) {
  return <ReduxFormField {...props} component={NestedListInput} />;
}

NestedListField.propTypes = {
  /** Name of the field */
  name: PropTypes.string.isRequired,
  /** Function to remove a reason from a category */
  removeReasonListItem: PropTypes.func,
  /** Immutable List object containing the categories of the list (headers)*/
  reasonHeaders: PropTypes.object,
  /** Id of the presence reason list selected */
  selectedEntityId: PropTypes.string.isRequired,
  /** Boolean to check wether or not user has permissions to update a presence reason list */
  userHasUpdatePermission: PropTypes.bool,
  /** Function to remove a category and the reasons within it */
  removeCategoryItems: PropTypes.func,
  /** Function to set the selected reason */
  setSelectedSubEntityId: PropTypes.func,
};

NestedListInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
  removeReasonListItem: PropTypes.func,
  reasonHeaders: PropTypes.object,
  selectedEntityId: PropTypes.string.isRequired,
  userHasUpdatePermission: PropTypes.bool,
  removeCategoryItems: PropTypes.func,
  setSelectedSubEntityId: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
};
