import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useAuthorized from 'Hooks/useAuthorized';
import useData from 'Hooks/useData';

import Loader from 'Components/Loader';
import StatProvider from 'Components/StatProvider';
import Unauthorized from 'Components/Unauthorized';

import rooms from 'Services/rooms';

/*
 View component that wraps Steroided Video call component with token based authentication.
 If the room is private the provided token needs to be authorized. If that is the case
 the Video with the real time stats provider is mounted.
*/
const Live = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const data = useData(rooms.getById, id);
  const token = useAuthorized();

  if (!data) return <Loader />;
  const { url, privacy } = data;

  if (!token && privacy === 'private') return <Unauthorized />;

  return (
    <StatProvider
      className={className}
      id={id}
      url={token ? `${url}?t=${token}` : url}
    />
  );
};

Live.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default styled(Live)`
  height: 100vh;
`;
