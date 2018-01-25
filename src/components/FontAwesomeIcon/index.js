/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * FontAwesomeIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import 'font-awesome/css/font-awesome.css';

function FontAwesomeIcon(props) {
  return (
    <i
      id={props.id ? props.id : `${props.name}-icon`}
      className={`fa fa-${props.name} fa-${
        props.size ? props.size : '2'
      }x ${props.className}`}
      alt={props.alt || props.name}
      title={props.title}
    />
  );
}

FontAwesomeIcon.propTypes = {
  id: PropTypes.string,
  /** Font Awesome Icon Name */
  name: PropTypes.string.isRequired,
  /** Value from 1 - 5 */
  size: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default FontAwesomeIcon;
