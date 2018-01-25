/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * RootStyles
 *
 * This will wrap the entire app to inject global styles
 *
 */

import React from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Sans Pro', sans-serif;
  }
`

class RootStyles extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default RootStyles;
