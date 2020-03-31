import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Loader from 'Components/Loader';
import Participant from 'Components/Participant';

import useFetcher from 'Hooks/useFetcher';

import service from 'Services/stats';
/*
  Stats component renders bitPerSecond and LostPackets charts per call participant.
*/
const Stats = ({ className, id }) => {
  // useFetcher hook retrieves the stats of each participant, and the loading status of the service provided to be resolved asyncronouly
  const [{ data: participants, loading }] = useFetcher(service.get, id);

  if (loading) return <Loader />;

  return (
    <div className={className}>
      {Object.keys(participants).map(participantId => {
        const bitsPerSecond = participants[participantId].map(
          ({ time, videoRecvBitsPerSecond, videoSendBitsPerSecond }) => ({
            time,
            videoRecvBitsPerSecond,
            videoSendBitsPerSecond,
          }),
        );

        const lostPackets = participants[participantId].map(
          ({ time, videoRecvPacketLoss, videoSendPacketLoss }) => ({
            time,
            videoRecvPacketLoss,
            videoSendPacketLoss,
          }),
        );

        return (
          <Participant
            key={participantId}
            bitsPerSecond={bitsPerSecond}
            id={participantId}
            lostPackets={lostPackets}
          />
        );
      })}
    </div>
  );
};

Stats.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default styled(Stats)``;
