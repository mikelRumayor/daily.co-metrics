import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@styling';

import configuration from 'Theme';

/*
  Theme component is wrapping provider that propagates the hheme over the whole platform
*/
export const Theme = ({ children }) => (
  <ThemeProvider theme={configuration}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Theme;
