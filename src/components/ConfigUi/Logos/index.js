import React from 'react';
import styled from 'styled-components';
import serenova from './Serenova.png';
import mitel from './Mitel.png';

const LogoImage = styled.img`
  width: 275px;
  margin: auto;
  display: block;
`;

export default function Logo(props) {
  /**This is to test the logo if the brand is mitel on localhost for time being till we figure out a better way to do it */
  // var url = "http://localhost:3000/#/mitel"
  const parts = window.location.hostname.split('.');
  let logo;
  if (parts[0].indexOf('mitel') !== -1) {
    logo = mitel;
  } else {
    logo = serenova;
  }

  return <LogoImage src={logo} alt="Logo" />;
}
