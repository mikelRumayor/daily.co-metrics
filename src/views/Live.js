import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Video from 'Providers/video';
import Services from 'Services/rooms';

const Live = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const element = useRef();
  const frame = useRef();

  useEffect(() => {
    (async () => {
      const { url } = await Services.getById(id);
      frame.current = Video.wrap(element.current, {});
      frame.current.join({ url });
    })();
  }, [id, element]);

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
      id: PropTypes.string
    })
  }),
};

export default styled(Live)`
  border: 0;
  height: 100%;
  width: 100%;
`;
