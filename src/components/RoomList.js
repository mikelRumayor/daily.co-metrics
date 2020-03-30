import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useFetcher from 'Hooks/useFetcher';

import Button from 'Components/Button';
import Card from 'Components/Card';
import Link from 'Components/Link';
import List from 'Components/List';
import Loader from 'Components/Loader';
import { Route, withRouter } from 'Components/Router';

import CreateRoom from 'Views/CreateRoom';

import services from 'Services/rooms';

const Actions = styled('aside')``;

const RoomList = ({ className, match: { url } }) => {
  const [{ data: rooms = [], loading }, refetch] = useFetcher(services.get);

  return (
    <div className={className}>
      <Route
        path={`${url}/create`}
        render={props => <CreateRoom {...props} onRefetch={refetch} />}
      />
      <Actions>
        <Button as={Link} to={`${url}/create`}>
          Create room
        </Button>
      </Actions>
      {loading ? <Loader /> : <List data={rooms} template={Card} />}
    </div>
  );
};

RoomList.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default styled(withRouter(RoomList))`
  padding: 3.2rem;

  ${Actions} {
    text-align: right;
    position: fixed;
    right: 3.2rem;
    top: 8.4rem;
  }

  ${List} {
    margin-top: 1.6rem;

    ${Card} {
      margin-bottom: 2.4rem;
    }
  }
`;
