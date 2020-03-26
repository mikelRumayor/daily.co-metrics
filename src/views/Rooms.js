import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Button from 'Components/Button';
import Link from 'Components/Link';
import { Switch, Route } from 'Components/Router';

import CreateRoom from 'Views/CreateRoom';

const Actions = styled('aside')``;

const Rooms = ({ className, match: { url } }) => (
  <div className={className}>
    <Switch>
      <Route component={CreateRoom} path={`${url}/create`} />
      <Route path="/">
        <Actions>
          <Button as={Link} to={`${url}/create`}>
            Create room
          </Button>
        </Actions>
      </Route>
    </Switch>
  </div>
);

Rooms.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default styled(Rooms)`
  padding: 3.2rem;

  ${Actions} {
    text-align: right;
  }
`;
