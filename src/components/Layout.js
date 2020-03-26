import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';

export const Main = styled('main')``;

const Layout = ({ className, children }) => (
  <section className={className}>
    <Header />
    <Sidebar />
    <Main>{children}</Main>
  </section>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default styled(Layout)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  ${Header} {
    grid-row: 1;
    grid-column: 1 / span 12;
  }

  ${Sidebar} {
    grid-row: 2;
    grid-column: 1 / span 3;
    height: calc(100vh - 6.4rem);
  }

  ${Main} {
    grid-row: 2;
    grid-column: 4 / span 9;
  }
`;
