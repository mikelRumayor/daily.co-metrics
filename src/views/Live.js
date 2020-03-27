import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useData from 'Hooks/useData';
import useDeepCompareEffect from 'Hooks/useDeepCompareEffect';

import Video from 'Providers/video';

import rooms from 'Services/rooms';
import stats from 'Services/stats';

const Live = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [isReady, setReady] = useState(false);
  const element = useRef();
  const frame = useRef();
  const data = useData(rooms.getById, id);

  useDeepCompareEffect(() => {
    if (data) {
      const { url } = data;
      frame.current = Video.wrap(element.current, {});
      frame.current.join({ url });
      setReady(true);
    }
  }, [data, element, frame, setReady]);

  useEffect(() => {
    let interval;
    if (isReady) {
      interval = setInterval(async () => {
        const {
          stats: { latest } = {},
        } = await frame.current.getNetworkStats();
        stats.sendStats(id, latest)
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [element, frame, id, isReady]);

  return (
    <iframe
      ref={element}
      allow="microphone; camera; autoplay"
      className={className}
      title="live video"
    />
  );
};

Live.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default styled(Live)`
  border: 0;
  height: 100%;
  width: 100%;
`;
