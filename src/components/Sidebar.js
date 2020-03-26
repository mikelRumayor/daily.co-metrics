import React from 'react';
import PropTypes from 'prop-types';
import styled, { theme } from '@styling';

const Sidebar = ({ className }) => <nav className={className} />;

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default styled(Sidebar)`
  border: 0.1rem solid ${theme('--color-main')};
`;
