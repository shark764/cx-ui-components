/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * RootStyles
 *
 * This will wrap the entire app and do the following:
 *
 * - Set the default theme
 * - Inject global styles
 * - Import sanitize.css
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';

import { defaultTheme } from './';

import 'sanitize.css/sanitize.css';

injectGlobal`
  @import url(//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600);
  body, input, select, textarea {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
  }
`;

class RootStyles extends React.Component {

  componentWillMount() {
    if (this.props.fetchStyles) {
      this.props.fetchStyles();
    }
  }

  render() {
    let theme = defaultTheme;

    if (this.props.theme.size > 0) {
      this.props.theme.keySeq().forEach((key) => {
        if (theme[key]) {
          theme[key] = this.props.theme.get(key);
        }
      });
    }

    return <ThemeProvider key={JSON.stringify(theme)} theme={theme}>{this.props.children}</ThemeProvider>;
  }
}

RootStyles.propTypes = {
  theme: PropTypes.object,
  fetchStyles: PropTypes.func,
};

export default RootStyles;
