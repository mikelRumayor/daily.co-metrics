import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useData from 'Hooks/useData';

import Link from 'Components/Link';

import meetings from 'Services/meetings';

/*
  LinkWithToken component is used for private rooms with the purpose of generating valid links
*/
const LinkWithToken = ({ className, children, fields, to, ...props }) => {
  // useData hook retrieves the meeting token from the service provided to be resolved asyncronouly
  const token = useData(meetings.createToken, fields);
  return (
    <Link {...props} className={className} to={`${to}?token=${token}`}>
      {children}
    </Link>
  );
};

LinkWithToken.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  fields: PropTypes.object,
  to: PropTypes.string,
};

export default styled(LinkWithToken)``;
