import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import video from 'Providers/video';

/*
  Video component that mounts the video over an iframe.
*/
const Video = ({ className, onLoad = () => {}, url }) => {
  const element = useRef();

  //When the iframe is mounted the video prodiver joins the call.
  useEffect(() => {
    const provider = video.wrap(element.current, {});
    provider.join({ url });
    //Once joined with the url provided the Wrapper component is notified with the video provider configured. 
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
