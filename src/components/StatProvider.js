import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Video from 'Components/Video';

import services from 'Services/stats';

const StatProvider = ({ id, ...props }) => {
  const [provider, setProvider] = useState();

  const handleLoad = useCallback(
    async p => {
      setProvider(p);
    },
    [setProvider],
  );

  useEffect(() => {
    let interval 
    if (provider) {
      interval = setInterval(async () => {
        const { stats: { latest } = {} } = await provider.getNetworkStats();
        services.send(id, latest);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [id, provider]);

  return <Video {...props} onLoad={handleLoad} />;
};

StatProvider.propTypes = {
  id: PropTypes.string,
};

export default StatProvider;
