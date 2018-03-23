/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import FontAwesomeIcon from '../FontAwesomeIcon';

const ActionButton = styled(Button)`
  padding: 7px 8px;
  margin-right: 7px;
`;

export default function SidePanelTableActions({ row, updateSubEntity, deleteSubEntity}) {
  return (
    <Fragment>
      <ActionButton title={!row.deleting ? `Update ${row.key}` : undefined} onClick={() => updateSubEntity(row.key)} disabled={row.deleting}>
        <FontAwesomeIcon name="edit" />
      </ActionButton>
      <ActionButton title={!row.deleting ? `Delete ${row.key}` : `Deleting ${row.key}`} onClick={() => deleteSubEntity(row.key)} disabled={row.deleting}>
        <FontAwesomeIcon name="times" />
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
