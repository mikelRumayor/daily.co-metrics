import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useData from 'Hooks/useData';

import StatProvider from 'Components/StatProvider';

import rooms from 'Services/rooms';

const Live = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const data = useData(rooms.getById, id);
  if (!data) return false;

  const { url } = data;

  return <StatProvider className={className} id={id} url={url} />;
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
