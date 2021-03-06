import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Select from './Select';
import Text from './Text';

/*
  Types denition for different kind of form Elements. Currently supported types:
    - Text,
    - Select
*/
const TYPES = {
  select: Select,
  text: Text,
};

const Input = ({ type = 'text', ...props }) => {
  const Element = TYPES[type];

  return <Element {...props} />;
};

Input.propTypes = {
  type: PropTypes.string,
};

export default styled(Input)``;
