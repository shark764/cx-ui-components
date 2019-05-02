import React from 'react';
// import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './message';
import styled from 'styled-components';
import urls from 'serenova-js-utils';

const Copyright = styled.div`
  color: white;
  text-align: center;
`;
const LegalTerms = styled.div`
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  margin-top: 15px;
`;
const Legal = styled.div`
  display: inline-block;
  text-align: center;
`;
const Link = styled.a`
  color: white;
  display: inline-block;
`;
const FormattedMessage = styled.div``; /**This is just till i18n is being implemented*/

export default function LegalCopyright(props) {

  return (
    <Copyright automation="serenova_copyright">
      <FormattedMessage>{messages.copyright.defaultMessage}</FormattedMessage>
      <LegalTerms automation="serenova_legal">
        <Legal>{messages.legal.defaultMessage}</Legal>
        <Link href={urls}>
          <FormattedMessage>{messages.legalLabel.defaultMessage}</FormattedMessage>
        </Link>
      </LegalTerms>
    </Copyright>
  );
}

LegalCopyright.contextTypes = {
  toolbarMode: PropTypes.bool
};
