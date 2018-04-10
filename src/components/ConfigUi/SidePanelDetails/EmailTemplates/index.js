/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * EmailTemplatesDetailsPanel
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Detail from '../../Detail';
import DetailHeader from '../../DetailHeader';
import SidePanelTable from '../../SidePanelTable';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function EmailTemplatesDetailsPanel(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <DetailHeader text="Details" />
      {props.userHasUpdatePermission && props.children}
      {props.email === 'custom' ?
        <Fragment>
          <DetailHeader text="Available Variables" />
          <SidePanelTable
            items={props.variables}
            fields={[
              { name: 'name', label: 'Name' },
              { name: 'description', label: 'Description' }
            ]}
            pagination={false}
          />
        </Fragment> :
        <Fragment>
          <Detail
            label="Subject" value={props.inheritedSubject}
          />
          <Detail
            label="Body" value={props.inheritedBody}
          />
        </Fragment>}
    </Wrapper>
  );
}

EmailTemplatesDetailsPanel.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  userHasUpdatePermission: PropTypes.bool, // TODO CXV1-13303
  children: PropTypes.node.isRequired,
  email: PropTypes.string,
  variables: PropTypes.array.isRequired,
  inheritedSubject: PropTypes.string,
  inheritedBody: PropTypes.string,
};
