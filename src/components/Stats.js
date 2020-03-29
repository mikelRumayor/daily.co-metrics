import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Chart from 'Components/Chart';
import Loader from 'Components/Loader';

import useFetcher from 'Hooks/useFetcher';

import service from 'Services/stats';

const Room = ({
  className,
  id,
}) => {
  const [{ data: stats, loading }] = useFetcher(service.get, id);

  if (loading) return <Loader />;

  const bitsPerSecond = stats.map(
    ({ time, videoRecvBitsPerSecond, videoSendBitsPerSecond }) => ({
      time,
      videoRecvBitsPerSecond,
      videoSendBitsPerSecond,
    }),
  );

  const lostPackets = stats.map(
    ({ time, videoRecvPacketLoss, videoSendPacketLoss }) => ({
      time,
      videoRecvPacketLoss,
      videoSendPacketLoss,
    }),
  );

  return (
    <div className={className}>
      <Chart
        data={bitsPerSecond}
        title="Bits per second"
        yAxis="bits per second"
      />
      <Chart
        data={lostPackets}
        title="Packets transmision"
        yAxis="packets lost"
      />
    </div>
  );
};

Room.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

export default styled(Room)`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
