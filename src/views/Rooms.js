import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import { Switch, Route } from 'Components/Router';

import RoomList from 'Components/RoomList';
import Room from 'Views/Room';
import Header from 'Components/Header';

const Main = styled('main')``;

const Rooms = ({ className, match: { url } }) => (
  <section className={className}>
    <Header />
    <Main>
      <Switch>
        <Route component={Room} path={`${url}/:id/stats`} />
        <Route component={RoomList} path={url} />
      </Switch>
    </Main>
  </section>
);

Rooms.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default styled(Rooms)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  ${Header} {
    grid-row: 1;
    grid-column: 1 / span 12;
    position: fixed;
    width: 100%;
    z-index: 2;
  }

  ${Main} {
    grid-row: 2;
    grid-column: 1 / span 12;
    margin-top: 5.6rem;
    z-index: 1;
  }
`;
