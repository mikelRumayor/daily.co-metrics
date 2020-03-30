import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import useDeepCompareEffect from 'Hooks/useDeepCompareEffect';

import Video from 'Components/Video';

import services from 'Services/stats';

const StatProvider = ({ id, ...props }) => {
  const [provider, setProvider] = useState();

  const handleLoad = useCallback(
    video => {
      setProvider(video);
    },
    [setProvider],
  );

  useDeepCompareEffect(() => {
    let interval;
    
    if (provider) {
      provider.on('network-connection', (evt) => {
        if(evt.session_id) {
          interval = setInterval(async () => {
            const { stats: { latest } = {} } = await provider.getNetworkStats();
            services.send(id, latest);
          }, 15000);
        }
      }).on('participant-left', (evt) => {
        clearInterval(interval)
      });

    }
    return () => clearInterval(interval);
  }, [id, provider]);

  return <Video {...props} onLoad={handleLoad} />;
};

StatProvider.propTypes = {
  id: PropTypes.string,
};

export default StatProvider;
