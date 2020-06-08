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
 * Note: If the theme changes, all of the children are completely re-mounted (not just re-rendered)
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

  render() {
    let customTheme = {...defaultTheme};

    if (this.props.theme) {
      if(Object.keys(this.props.theme).length === 0) {
        customTheme = defaultTheme;
      } else {
        Object.keys(this.props.theme).forEach((key) => {
          if (customTheme[key]) {
            customTheme[key] = this.props.theme[key];
          }
        });
      }
    } 

    return <ThemeProvider key={JSON.stringify(customTheme)} theme={customTheme}>{this.props.children}</ThemeProvider>;
  }
}

RootStyles.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.any,
};

export default RootStyles;
