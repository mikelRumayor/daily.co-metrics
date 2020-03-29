import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import useData from 'Hooks/useData';

import Link from 'Components/Link';

import meetings from 'Services/meetings';

const LinkWithToken = ({ className, children, fields, to, ...props }) => {
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
