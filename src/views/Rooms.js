import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Button from 'Components/Button';
import Card from 'Components/Card';
import Link from 'Components/Link';
import { Switch, Route } from 'Components/Router';

import Rooms from 'Components/Rooms';

import CreateRoom from 'Views/CreateRoom';
import Stats from 'Views/Stats';

const Actions = styled('aside')``;

const View = ({ className, match: { url } }) => (
  <div className={className}>
    <Switch>
      <Route component={CreateRoom} path={`${url}/create`} />
      <Route component={Stats} path={`${url}/:id`} />
    </Switch>
    <Actions>
      <Button as={Link} to={`${url}/create`}>
        Create room
      </Button>
    </Actions>
    <Rooms />
  </div>
);

View.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default styled(View)`
  height: 100%;
  padding: 3.2rem;

  ${Actions} {
    text-align: right;
  }

  ${Rooms} {
    margin-top: 1.6rem;
    max-height: calc(100vh - 12.6rem);
    overflow: scroll;

    ${Card} {
      margin-bottom: 2.4rem;
    }
  }
`;
