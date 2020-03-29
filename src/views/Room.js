import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';
import useData from 'Hooks/useData';

import services from 'Services/stats'

const Room = ({
  className,
  match: {
    params: { id },
  }}
) => {
  const stats = useData(services.get, id) || []

  console.log(stats, services.get)
  
  return (
    <div className={className}>
      <ResponsiveContainer width="99%" aspect={2}>
        <LineChart width={600} height={300} data={stats}>
          <Line type="monotone" dataKey="videoRecvBitsPerSecond" stroke="red" />
          <Line type="monotone" dataKey="videoSendBitsPerSecond" stroke="green" />
         <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timestamp" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="99%" aspect={2}>
        <LineChart width={600} height={300} data={stats}>
          <Line type="monotone" dataKey="videoRecvPacketLoss" stroke="red" />
          <Line type="monotone" dataKey="videoSendPacketLoss" stroke="green" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timestamp" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
};

Room.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default styled(Room)`
`;
