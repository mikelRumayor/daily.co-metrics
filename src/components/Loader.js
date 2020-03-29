import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

const Loader = ({ className }) => (
  <aside className={className}>
    <img
      alt="loader"
      src="http://help.presentations2go.eu/LTI/lib/Spinner.gif"
    />
  </aside>
);

Loader.propTypes = {
  className: PropTypes.string,
};

export default styled(Loader)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
