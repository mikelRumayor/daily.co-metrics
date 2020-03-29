import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Card from 'Components/Card';
import Stats from 'Components/Stats';
import Loader from 'Components/Loader';

import useFetcher from 'Hooks/useFetcher';

import rooms from 'Services/rooms';

const Room = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [{ data: room, loading }] = useFetcher(rooms.getById, id);

  if (loading) return <Loader />;

  return (
    <div className={className}>
      <Card {...room} />
      <Stats id={id}/>
    </div>
  );
};

Room.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default styled(Room)`
  height: 100%;
   
  ${Card} {
    margin-bottom: 6.4rem;
  }
`;
