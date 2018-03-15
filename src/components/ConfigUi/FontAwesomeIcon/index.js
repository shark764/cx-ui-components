/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * FontAwesomeIcon
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import 'font-awesome/css/font-awesome.css';

const Icon = styled.i`
  ${props => props.size && `font-size: ${props.size}px !important;`};
`;

function FontAwesomeIcon(props) {
  return (
    <Icon
      id={props.id ? props.id : `${props.name}-icon`}
      className={`fa fa-${props.name} ${props.className}`}
      alt={props.alt || props.name}
      title={props.title}
      onClick={props.onClick}
      size={props.size}
    />
  );
}

FontAwesomeIcon.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  /** Font Awesome Icon Name */
  name: PropTypes.string.isRequired,
  /** Size in pixels, example size={20} === 20px */
  size: PropTypes.number,
  alt: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default FontAwesomeIcon;
