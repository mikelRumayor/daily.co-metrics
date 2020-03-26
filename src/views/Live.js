import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Video from 'Providers/Video'
import Services from 'Services/rooms';

const Live = ({ className, match: { params: { id } } }) => {
  const element = useRef();
  const frame = useRef();

  useEffect(() => {
    (async () => {
      const { url } = await Services.getById(id)
      frame.current = Video.wrap(element.current, { })
      frame.current.join({ url })
    })()
  }, [id, element])

  // setInterval(async () => {
  //   if(frame.current) {
  //     const a = await frame.current.getNetworkStats()
  //     console.log(a)
  //   }
  // }, 4000)
   
  return (
    <iframe className={className} ref={element}  allow="microphone; camera; autoplay"/>
  )
}

Live.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default styled(Live)`
  border: 0;
  height: 100%;
  width: 100%;
`;
