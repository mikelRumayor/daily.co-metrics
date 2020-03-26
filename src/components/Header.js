import React from 'react';
import PropTypes from 'prop-types';
import styled, { theme } from '@styling';

const Title = styled('h1')``;

const Header = ({ className }) => (
  <header className={className}>
    <Title>Daily.js</Title>
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
};

export default styled(Header)`
  ${theme('--font-large')};
  align-items: center;
  background: ${theme('--color-primary')};
  color: ${theme('--color-light')};
  display: flex;
  height: 6.4rem;
  padding: 0 3.2rem;
`;
