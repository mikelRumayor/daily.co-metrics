import React from 'react';
import styled from '@styling';

const Loader = ({ className }) => (
  <aside className={className}>
    <img src="http://help.presentations2go.eu/LTI/lib/Spinner.gif" />
  </aside>
) 

export default styled(Loader)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;