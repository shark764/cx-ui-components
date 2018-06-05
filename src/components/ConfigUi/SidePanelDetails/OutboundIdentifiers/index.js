/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * OutboundIdentifiersDetailsPanel
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Detail from '../../Detail';
import DetailHeader from '../../DetailHeader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function OutboundIdentifiersDetailsPanel({
  children,
  userHasUpdatePermission,
  id,
  className,
  item: { name, value, flowId, channelType, description },
}) {
  return (
    <Wrapper id={id} className={className}>
      <DetailHeader text="Details" />
      {userHasUpdatePermission ? (
        children
      ) : (
        <Fragment>
          <Detail label="Name" value={name} />
          <Detail label="Value" value={value} />
          <Detail label="Flow Id" value={flowId} />
          <Detail label="Channel Type" value={channelType} />
          <Detail label="Description" value={description} />
        </Fragment>
      )}
    </Wrapper>
  );
}

OutboundIdentifiersDetailsPanel.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  item: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    flowId: PropTypes.string,
    channelType: PropTypes.sting,
    description: PropTypes.string,
  }),
  userHasUpdatePermission: PropTypes.bool,
  children: PropTypes.any,
};
