import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useAuthorized from 'Hooks/useAuthorized';
import useData from 'Hooks/useData';

import Loader from 'Components/Loader';
import StatProvider from 'Components/StatProvider';
import Unauthorized from 'Components/Unauthorized';

import rooms from 'Services/rooms';

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
      url={token ? url : `${url}?t=${token}`}
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

export default styled(Live)``;
