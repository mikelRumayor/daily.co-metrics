import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

/*
  List component is used to show rooms metadata making use of the Card component
*/
const List = ({ className, data = [], template: Template }) => (
  <div className={className}>
    {data.map(row => (
      <Template key={row.id} {...row} />
    ))}
  </div>
);

List.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  template: PropTypes.node,
};

export default styled(List)``;
