/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import EditIconSVG from '../../SVGs/EditIconSVG';
import CloseIconSVG from '../../SVGs/CloseIconSVG';
import PlusIconSVG from '../../SVGs/PlusIconSVG';
import LoadingSpinner from '../../SVGs/LoadingSpinnerSVG';
import Toggle from '../Toggle';
import ConfirmationWrapper from '../Confirmation/ConfirmationWrapper';

const ActionButton = styled(Button)`
  padding: 2px 8px 5px 8px;
  margin-right: 10px;
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
  updateSubEntity,
  deleteSubEntity,
  addSubEntity,
  toggleSubEntityActive,
  itemApiPending
}) {
  return itemApiPending &&
    (row.id === itemApiPending || row.key === itemApiPending) ? (
    <RightAlign>
      <LoadingSpinner size={28} />
    </RightAlign>
  ) : (
    <ActionsWrapper>
      {!row.isDefault &&
        !row.inherited &&
        updateSubEntity && (
          <ActionButton
            className="dtpanel-action-update-item"
            title={!row.deleting ? `Update ${row.key || row.name}` : undefined}
            onClick={() => updateSubEntity(row.key || row.id)}
            disabled={row.deleting}
          >
            <EditIconSVG
              size={15}
              editIconType={row.deleting ? 'secondary' : 'primary'}
            />
          </ActionButton>
        )}
      {!row.isDefault &&
        !row.inherited &&
        deleteSubEntity && (
          <ActionButton
            className="dtpanel-action-remove-item"
            title={
              !row.deleting
                ? `Delete ${row.key || row.name}`
                : `row.deleting ${row.key || row.name}`
            }
            onClick={() =>
              deleteSubEntity(row.key || row.id, entityName, 'dissociate')
            }
            disabled={row.deleting || itemApiPending !== undefined}
          >
            <CloseIconSVG
              size={10}
              closeIconType={
                row.deleting || itemApiPending ? 'secondary' : 'primary'
              }
              disabled={row.deleting || itemApiPending !== undefined}
            />
          </ActionButton>
        )}
      {!row.isDefault &&
        !row.inherited &&
        addSubEntity && (
          <ActionButton
            className="dtpanel-action-add-item"
            title={
              !row.adding
                ? `Add ${row.key || row.name}`
                : `row.adding ${row.key || row.name}`
            }
            onClick={() =>
              addSubEntity(row.key || row.id, entityName, 'associate')
            }
            disabled={row.adding || itemApiPending !== undefined}
          >
            <PlusIconSVG
              size={10}
              disabled={row.adding || itemApiPending !== undefined}
              plusIconType={
                row.adding || itemApiPending ? 'secondary' : 'primary'
              }
            />
          </ActionButton>
        )}
      {!row.isDefault &&
        !row.inherited &&
        toggleSubEntityActive && (
          <ConfirmationWrapper
            confirmBtnCallback={() => toggleSubEntityActive(row)}
            mainText={
              row.active || row.status === 'accepted'
                ? `This will disable this ${entityName ||
                    'item'} for all associated lists.`
                : `This will enable this ${entityName ||
                    'item'} for all associated lists.`
            }
            secondaryText={'Do you want to continue?'}
          >
            <PositionedToggle
              className="dtpanel-action-toggle-active-item"
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
    deleting: PropTypes.bool
  }).isRequired,
  entityName: PropTypes.string,
  updateSubEntity: PropTypes.func,
  deleteSubEntity: PropTypes.func,
  addSubEntity: PropTypes.func,
  toggleSubEntityActive: PropTypes.func,
  itemApiPending: PropTypes.string
};
