/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import EditIconSVG from '../../SVGs/EditIconSVG';
import CloseIconSVG from '../../SVGs/CloseIconSVG';

const ActionButton = styled(Button)`
  padding: 7px 8px;
  margin-right: 7px;
`;

export default function SidePanelTableActions({ row, updateSubEntity, deleteSubEntity }) {
  return (
    <Fragment>
      <ActionButton
        title={!row.deleting ? `Update ${row.key}` : undefined}
        onClick={() => updateSubEntity(row.key)}
        disabled={row.deleting}
      >
        <EditIconSVG size={15} editIconType={row.deleting ? 'secondary' : 'primary'} />
      </ActionButton>
      <ActionButton
        title={!row.deleting ? `Delete ${row.key}` : `Deleting ${row.key}`}
        onClick={() => deleteSubEntity(row.key)}
        disabled={row.deleting}
      >
        <CloseIconSVG size={10} closeIconType={row.deleting ? 'secondary' : 'primary'} />
      </ActionButton>
    </Fragment>
  );
}

SidePanelTableActions.propTypes = {
  row: PropTypes.shape({
    key: PropTypes.string,
    deleting: PropTypes.bool,
  }).isRequired,
  updateSubEntity: PropTypes.func.isRequired,
  deleteSubEntity: PropTypes.func.isRequired,
};
