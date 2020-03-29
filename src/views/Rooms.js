import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useFetcher from 'Hooks/useFetcher';

import Button from 'Components/Button';
import Card from 'Components/Card';
import Link from 'Components/Link';
import { Switch, Route } from 'Components/Router';

import List from 'Components/List';

import CreateRoom from 'Views/CreateRoom';
import Stats from 'Views/Stats';

import services from 'Services/rooms';

const Actions = styled('aside')``;

const View = ({ className, match: { url } }) => {
  const [{ data: rooms = [], loading }, refetch] = useFetcher(services.get);

  return (
    <div className={className}>
      <Switch>
        <Route
          path={`${url}/create`}
          render={props => <CreateRoom {...props} refetch={refetch} />}
        />
        <Route component={Stats} path={`${url}/:id`} />
      </Switch>
      <Actions>
        <Button as={Link} to={`${url}/create`}>
          Create room
        </Button>
      </Actions>
      {loading ? 'loading' : <List data={rooms} template={Card} />}
    </div>
  );
};

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

  ${List} {
    margin-top: 1.6rem;
    max-height: calc(100vh - 12.6rem);
    overflow: scroll;

    ${Card} {
      margin-bottom: 2.4rem;
    }
  }
`;
