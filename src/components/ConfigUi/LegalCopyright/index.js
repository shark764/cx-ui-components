import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LegalContainer = styled.div`
  color: white;
  text-align: center;
`;

const Copyright = styled.div`
  margin-bottom: 1em;
`;

const Legal = styled.div`
  font-size: 13px;
`;

const Link = styled.a`
 color: white;
`;

export default function LegalCopyright(props) {

  return (
    <LegalContainer>
      <Copyright automation="serenova_copyright">
        {props.messages && props.messages.copyright}
      </Copyright>
      <Legal automation="serenova_legal">
        <span>{props.messages && props.messages.legal}</span>
        <Link href='https://legal.cxengagelabs.net/cxengage-legal/index.html'>
          {props.messages && props.messages.legalLabel}
        </Link>
      </Legal>
    </LegalContainer>
  );
}

LegalCopyright.contextTypes = {
  messages: PropTypes.object
};
