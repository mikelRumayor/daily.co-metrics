import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from 'recharts';
import useData from 'Hooks/useData';

import services from 'Services/stats';

const Room = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const stats = useData(services.get, id) || [];

  return (
    <div className={className}>
      <ResponsiveContainer aspect={2} width="99%">
        <LineChart data={stats} height={300} width={600}>
          <Line dataKey="videoRecvBitsPerSecond" stroke="red" type="monotone" />
          <Line
            dataKey="videoSendBitsPerSecond"
            stroke="green"
            type="monotone"
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timestamp" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer aspect={2} width="99%">
        <LineChart data={stats} height={300} width={600}>
          <Line dataKey="videoRecvPacketLoss" stroke="red" type="monotone" />
          <Line dataKey="videoSendPacketLoss" stroke="green" type="monotone" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timestamp" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
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

export default styled(Room)``;
