import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useDeepCompareEffect from 'Hooks/useDeepCompareEffect'

import Video from 'Providers/video';
import Services from 'Services/rooms';
import useData from 'Hooks/useData';

const Live = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [isReady, setReady]  = useState(false);
  const element = useRef();
  const frame = useRef();
  const data = useData(Services.getById, { id });

  useDeepCompareEffect(() => {
    if(data) {
      const { url } = data
      frame.current = Video.wrap(element.current, {});
      frame.current.join({ url });
      setReady(true)
    }
   }, [data, element, frame, setReady]);

   useEffect(() => {
    let interval 
    if(isReady) {
      interval = setInterval(async () => {
        const { stats: { latest } = {} } = await frame.current.getNetworkStats()
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [element, frame, isReady]);

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
