import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Chart from 'Components/Chart';

const Charts = styled('div')``;
const Title = styled('h3')``;

/*
  Participant component shows the charts of the metrics related to each participant.
  The measures vairables are:

    Bits per second 
    - videoRecvBitsPerSecond
    - videoSendBitsPerSecond
    
    Packets lost
    - videoRecvPacketLoss
    - videoSendPacketLoss 
*/
const Participant = ({ className, bitsPerSecond, id, lostPackets }) => (
  <div className={className}>
    <Title>Paticipant id: {id}</Title>
    <Charts>
      <Chart
        data={bitsPerSecond}
        title="Bits per second"
        yAxis="bits per second"
      />
      <Chart data={lostPackets} title="Lost packets" yAxis="packets lost" />
    </Charts>
  </div>
);

Participant.propTypes = {
  bitsPerSecond: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  id: PropTypes.string,
  lostPackets: PropTypes.arrayOf(PropTypes.object),
};

export default styled(Participant)`
  ${Charts} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
