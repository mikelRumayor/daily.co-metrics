import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Provider from 'Providers/video';

const Video = ({ className, onLoad = () => {}, url }) => {
  const element = useRef();

  useEffect(() => {
    const provider = Provider.wrap(element.current, {});
    provider.join({ url });
    onLoad(provider);
  }, [element, url, onLoad]);

  return (
    <iframe
      ref={element}
      allow="microphone; camera; autoplay"
      className={className}
      title="live video"
    />
  );
};

Video.propTypes = {
  className: PropTypes.string,
  onLoad: PropTypes.func,
  url: PropTypes.string,
};

export default styled(Video)`
  border: 0;
  height: 100%;
  width: 100%;
`;
