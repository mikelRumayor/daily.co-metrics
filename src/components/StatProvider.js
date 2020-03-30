import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import useDeepCompareEffect from 'Hooks/useDeepCompareEffect';

import Video from 'Components/Video';

import services from 'Services/stats';

const StatProvider = ({ id, ...props }) => {
  const [provider, setProvider] = useState();
  const participantId = useRef();

  const handleLoad = useCallback(
    video => {
      setProvider(video);
    },
    [setProvider],
  );

  useDeepCompareEffect(() => {
    let interval;

    if (provider) {
      provider
        .on('joined-meeting', ({ participants }) => {
          if (!participantId.current) {
            const participantsIds = Object.keys(participants);
            participantId.current = participantsIds[participantsIds.length - 1];
          }
        })

        .on('network-connection', evt => {
          if (evt.session_id) {
            interval = setInterval(async () => {
              const {
                stats: { latest } = {},
              } = await provider.getNetworkStats();
              services.send(id, participantId.current, latest);
            }, 1000);
          }
        })
        .on('participant-left', () => {
          clearInterval(interval);
        });
    }
    return () => clearInterval(interval);
  }, [id, provider, participantId]);

  return <Video {...props} onLoad={handleLoad} />;
};

StatProvider.propTypes = {
  id: PropTypes.string,
};

export default StatProvider;
