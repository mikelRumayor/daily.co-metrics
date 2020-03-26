import React from 'react';
import PropTypes from '@prop-types';
import { ThemeProvider } from 'styled-components';

import configuration from 'Theme';

export const Theme = ({ children }) => (
  <ThemeProvider theme={configuration}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.children,
};

export default Theme;
