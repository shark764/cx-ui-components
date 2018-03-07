/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * InteractionDetails
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  twelveHourTime,
  twentyFourHourTime,
  twelveHourTimeFromDate,
  twentyFourHourTimeFromDate,
  fullDateString,
} from '../../../utils/time.js';

const SubComponentWrapper = styled.div`
  padding: 20px 80px;
`;
const InteractionDetailsItem = styled.div`
  margin-bottom: 25px;
`;
const InteractionDetailsHeader = styled.h4`
  color: grey;
  border-bottom: 1px solid #8080802e;
  max-width: 50%;
`;
const Info = styled.div`
  font-size: 11pt;
  margin-top: 8px;
`;
const GreenStatus = styled.b`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #00800091;
  display: inline-block;
  margin-right: 20px;
`;
const GreyStatus = styled.b`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #8080805c;
  display: inline-block;
  margin-right: 20px;
`;
const UnOrderedList = styled.div`
  padding-left: 0px;
  margin-top: 5px;
  list-style-type: none;
`;
const Duration = styled.p`
  margin: 7px 5px 12px 40px;
  font-size: 11pt;
`;
const Monitor = styled.p`
  display: inline-block;
  margin: 7px;
`;

export default function InteractionDetails(props) {
  const startTime = props.twelveHourFormat
    ? twelveHourTime(props.data.startTimestamp)
    : twentyFourHourTime(props.data.startTimestamp);
  const startDate = fullDateString(props.data.startTimestamp);
  const activeParticipantsArray = props.data.agentName.split(', ');
  activeParticipantsArray.pop();
  const lastParticipant = activeParticipantsArray.pop();

  return (
    <SubComponentWrapper>
      <InteractionDetailsItem>
        <InteractionDetailsHeader>
          Interactions Details
        </InteractionDetailsHeader>
        <Info>
          {props.data.direction === 'inbound'
            ? `Inbound ${props.data.channel} interaction from ${
                props.data.customer
              } started at ${startTime} on ${startDate}.`
            : `Outbound ${props.data.channel} interaction to ${
                props.data.customer
              } started at ${startTime} on ${startDate}.`}
        </Info>
        <Info>
          {props.data.direction === 'inbound'
            ? `Customer reached ${
                props.data.contactPoint
              } and was directed through the ${props.data.flowName} flow.`
            : null}
        </Info>
      </InteractionDetailsItem>

      <InteractionDetailsItem>
        <InteractionDetailsHeader>Active Participants</InteractionDetailsHeader>
        <Info>
          {activeParticipantsArray.length === 0
            ? `${props.data.agentName.replace(
                ',',
                ''
              )} is handling this interaction.`
            : `${activeParticipantsArray.join(
                ', '
              )} and ${lastParticipant} are active participants on this interaction.`}
        </Info>
      </InteractionDetailsItem>

      <InteractionDetailsItem>
        {props.data.monitoring.length > 0 && (
          <InteractionDetailsHeader>
            Interaction Monitors
          </InteractionDetailsHeader>
        )}
        {props.data.monitoring.length > 0 && (
          <UnOrderedList>
            {props.data.monitoring.map(({agentId, endTimestamp, agentName, bargedIn, startTimestamp}) => (
              <Fragment key={agentId}>
                {endTimestamp === null ? <GreenStatus /> : <GreyStatus />}

                <Monitor>
                  {`${agentName} ${
                    endTimestamp === null
                      ? `is currently monitoring this interaction and ${
                          bargedIn ? '' : 'has not'
                        } participated in the conversation.`
                      : `previously monitored this interaction and ${
                          bargedIn ? '' : 'has not'
                        } participated in the conversation.`
                  }`}
                </Monitor>

                <Duration>
                  {endTimestamp === null
                    ? `${
                        props.twelveHourFormat
                          ? twelveHourTimeFromDate(startTimestamp)
                          : twentyFourHourTimeFromDate(startTimestamp)
                      } - Now`
                    : `${
                        props.twelveHourFormat
                          ? twelveHourTimeFromDate(startTimestamp)
                          : twentyFourHourTimeFromDate(startTimestamp)
                      } - ${
                        props.twelveHourFormat
                          ? twelveHourTimeFromDate(endTimestamp)
                          : twentyFourHourTimeFromDate(endTimestamp)
                      }`}
                </Duration>
              </Fragment>
            ))}
          </UnOrderedList>
        )}
      </InteractionDetailsItem>
    </SubComponentWrapper>
  );
}

InteractionDetails.propTypes = {
  twelveHourFormat: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    monitoring: PropTypes.arrayOf(
      PropTypes.shape({
        agentId: PropTypes.string.isRequired,
        agentName: PropTypes.string.isRequired,
        bargedIn: PropTypes.bool.isRequired,
        endTimestamp: PropTypes.string,
        startTimestamp: PropTypes.string.isRequired,
      })
    ),
    startTimestamp: PropTypes.string.isRequired,
    agentName: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    contactPoint: PropTypes.string.isRequired,
    flowName: PropTypes.string.isRequired,
  }),
};
