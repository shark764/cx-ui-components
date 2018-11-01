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
import Toggle from '../Toggle'

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

export default function SidePanelTableActions({row, entityName, updateSubEntity, deleteSubEntity, addSubEntity, toggleSubEntityActive}) {
  return (
    <ActionsWrapper>
      { updateSubEntity &&
        <ActionButton
          className="dtpanel-action-update-item"
          title={!row.deleting ? `Update ${row.key || row.name}` : undefined}
          onClick={() => updateSubEntity(row.key || row.id)}
          disabled={row.deleting}
        >
          <EditIconSVG size={15} editIconType={row.deleting ? 'secondary' : 'primary'} />
        </ActionButton>
      }
      { deleteSubEntity &&
        <ActionButton
          className="dtpanel-action-remove-item"
          title={!row.deleting ? `Delete ${row.key || row.name}` : `row.deleting ${row.key || row.name}`}
          onClick={() => deleteSubEntity(row.key || row.id, entityName, 'dissociate')}
          disabled={row.deleting}
        >
          <CloseIconSVG size={10} closeIconType={row.deleting ? 'secondary' : 'primary'} />
        </ActionButton>
      }
      { addSubEntity &&
        <ActionButton
          className="dtpanel-action-add-item"
          title={!row.adding ? `Add ${row.key || row.name}` : `row.adding ${row.key || row.name}`}
          onClick={() => addSubEntity(row.key || row.id, entityName, 'associate')}
          disabled={row.adding}
        >
          <PlusIconSVG size={10} closeIconType={row.adding ? 'secondary' : 'primary'} />
        </ActionButton>
      }
      { toggleSubEntityActive &&
          <PositionedToggle
            className="dtpanel-action-toggle-active-item"
            value={row.active}
            onChange={() => toggleSubEntityActive(row)} 
          />
      }
    </ActionsWrapper>
  );
}

SidePanelTableActions.propTypes = {
  row: PropTypes.shape({
    key: PropTypes.string,
    deleting: PropTypes.bool,
  }).isRequired,
  entityName: PropTypes.string,
  updateSubEntity: PropTypes.func,
  deleteSubEntity: PropTypes.func,
  addSubEntity: PropTypes.func,
  toggleSubEntityActive: PropTypes.func,
};
