import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import useDeepCompareEffect from 'Hooks/useDeepCompareEffect';

import Video from 'Components/Video';

import services from 'Services/stats';

/*
  StatProvider is a wrapper component to the Video component that injects events to video provider to send stats to the server.
  The frequency of sending the stats to the server is 15 seconds.
*/
const StatProvider = ({ id, ...props }) => {
  const [provider, setProvider] = useState();
  const participantId = useRef();

  // handleLoad retrieves the video provider from the Video component once the Video component is loaded.
  const handleLoad = useCallback(
    video => {
      setProvider(video);
    },
    [setProvider],
  );

  /*
    useDeepCompareEffect hook is used instead of useEffect,
    because a deep parameters comparison is needed instead of shallow.
    JSON.stringify should work but it is not recomended when the nested object,
    such as the video provider that has more than a single level.
  */
  useDeepCompareEffect(() => {
    let interval;

    if (provider) {
      provider
        // when a participant joins the call his participant id is saved into a ref
        .on('joined-meeting', ({ participants }) => {
          if (!participantId.current) {
            const participantsIds = Object.keys(participants);
            participantId.current = participantsIds[participantsIds.length - 1];
          }
        })
        /*
          When the network connection is stablished a session_id is sent. 
          This means that a peer connection is stablished beetween users.
          At that moment a timer is created to sent network stats every 15 seconds.
        */
        .on('network-connection', ({ session_id: sessionId }) => {
          if (sessionId) {
            interval = setInterval(async () => {
              const {
                stats: { latest } = {},
              } = await provider.getNetworkStats();
              services.send(id, participantId.current, latest);
            }, 15000);
          }
        })
        /*
          When the partipant left is called, 
          if the participants session id is same of the participant id then the timer needs to be removed
        */
        .on(
          'participant-left',
          ({ participant: { session_id: sessionId } }) => {
            if (sessionId === participantId.current) {
              clearInterval(interval);
            }
          },
        );
    }
    return () => clearInterval(interval);
  }, [id, provider, participantId]);

  return <Video {...props} onLoad={handleLoad} />;
};

StatProvider.propTypes = {
  id: PropTypes.string,
};

export default StatProvider;
