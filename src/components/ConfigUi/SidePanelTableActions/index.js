/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Button';
import ViewIconSVG from '../../Icons/ViewIconSVG';
import EditIconSVG from '../../Icons/EditIconSVG';
import CloseIconSVG from '../../Icons/CloseIconSVG';
import PlusIconSVG from '../../Icons/PlusIconSVG';
import CopyIconSVG from '../../Icons/CopyIconSVG';
import LoadingSpinner from '../../Icons/LoadingSpinnerSVG';
import Toggle from '../Toggle';
import ConfirmationWrapper from '../Confirmation/ConfirmationWrapper';

const ActionButton = styled(Button)`
  padding: 2px 8px 5px 8px;
  margin-right: 10px;
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `};
`;
const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const PositionedToggle = styled(Toggle)`
  margin-top: 2px;
`;
const RightAlign = styled.div`
  text-align: right;
  margin-right: 10px;
`;

export default function SidePanelTableActions({
  row,
  entityName,
  viewSubEntity,
  updateSubEntity,
  deleteSubEntity,
  confirmDeleteSubEntity,
  addSubEntity,
  copySubEntity,
  toggleSubEntityActive,
  itemApiPending,
}) {
  return itemApiPending && (row.id === itemApiPending || row.key === itemApiPending) ? (
    <RightAlign>
      <LoadingSpinner size={28} />
    </RightAlign>
  ) : (
    <ActionsWrapper>
      {!row.isDefault &&
        !row.inherited &&
        viewSubEntity && (
          <ActionButton
            className="dtpanel-action-view-item"
            data-automation="dtpanelActionViewItem"
            title={!row.viewing ? `View` : `row.viewing ${row.key || row.name}`}
            onClick={() => viewSubEntity(row.key || row.id || row.version, row, entityName)}
            disabled={row.viewing}
          >
            <ViewIconSVG size={10} disabled={row.viewing} viewIconType={row.viewing ? 'secondary' : 'primary'} />
          </ActionButton>
        )}
      {!row.isDefault &&
        !row.inherited &&
        updateSubEntity && (
          <ActionButton
            className="dtpanel-action-update-item"
            data-automation="dtpanelActionUpdateItem"
            title={!row.deleting ? `Update` : undefined}
            onClick={() => updateSubEntity(row.key || row.id || row.version, row, entityName)}
            disabled={row.deleting}
          >
            <EditIconSVG size={15} editIconType={row.deleting ? 'secondary' : 'primary'} />
          </ActionButton>
        )}
      {!row.isDefault &&
        !row.inherited &&
        copySubEntity && (
          <ActionButton
            className="dtpanel-action-copy-item"
            data-automation="dtpanelActionCopyItem"
            title={!row.copying ? "Copy" : `row.copying ${row.key || row.name}`}
            onClick={() => copySubEntity(row.key || row.id || row.version, row, entityName)}
            disabled={row.copying}
          >
            <CopyIconSVG size={10} disabled={row.copying} copyIconType={row.copying ? 'secondary' : 'primary'} />
          </ActionButton>
        )}
      {!row.isDefault &&
        !row.inherited &&
        deleteSubEntity && (
          <ConfirmationWrapper
            confirmBtnCallback={
              confirmDeleteSubEntity
                ? () => deleteSubEntity(row.key || row.id || row.version, entityName, 'dissociate')
                : undefined
            }
            mainText={`Deleting this item cannot be undone.`}
            secondaryText={'Are you sure you want to continue?'}
          >
            <ActionButton
              className="dtpanel-action-remove-item"
              data-automation="dtpanelActionRemoveItem"
              title={!row.deleting ? `Delete ${row.key || row.name}` : `row.deleting ${row.key || row.name}`}
              onClick={() =>
                !confirmDeleteSubEntity
                  ? deleteSubEntity(row.key || row.id || row.version, entityName, 'dissociate')
                  : undefined
              }
              disabled={row.deleting || row.disableDelete}
            >
              <CloseIconSVG size={10} closeIconType={row.deleting ? 'secondary' : 'primary'} disabled={row.deleting || row.disableDelete} />
            </ActionButton>
          </ConfirmationWrapper>
        )}
      {!row.isDefault &&
        !row.inherited &&
        addSubEntity && (
          <ActionButton
            className="dtpanel-action-add-item"
            data-automation="dtpanelActionAddItem"
            title={!row.adding ? `Add ${row.key || row.name}` : `row.adding ${row.key || row.name}`}
            onClick={() => addSubEntity(row.key || row.id || row.version, entityName, 'associate')}
            disabled={row.adding || row.disableAdd}
          >
            <PlusIconSVG size={10} disabled={row.adding || row.disableAdd} plusIconType={row.adding ? 'secondary' : 'primary'} />
          </ActionButton>
        )}
      {!row.isDefault &&
        !row.inherited &&
        toggleSubEntityActive && (
          <ConfirmationWrapper
            confirmBtnCallback={() => toggleSubEntityActive(row)}
            mainText={
              row.active || row.status === 'accepted'
                ? `This will disable this ${entityName || 'item'} for all associated lists.`
                : `This will enable this ${entityName || 'item'} for all associated lists.`
            }
            secondaryText={'Do you want to continue?'}
          >
            <PositionedToggle
              className="dtpanel-action-toggle-active-item"
              data-automation="dtpanelActionToggleActiveItem"
              value={row.active}
              onChange={() => {}}
            />
          </ConfirmationWrapper>
        )}
    </ActionsWrapper>
  );
}

SidePanelTableActions.propTypes = {
  row: PropTypes.shape({
    key: PropTypes.string,
    deleting: PropTypes.bool,
  }).isRequired,
  entityName: PropTypes.string,
  viewSubEntity: PropTypes.func,
  updateSubEntity: PropTypes.func,
  copySubEntity: PropTypes.func,
  deleteSubEntity: PropTypes.func,
  confirmDeleteSubEntity: PropTypes.bool,
  addSubEntity: PropTypes.func,
  toggleSubEntityActive: PropTypes.func,
  itemApiPending: PropTypes.string,
};
