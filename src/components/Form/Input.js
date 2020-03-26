import React from 'react';
import PropTypes from 'prop-types';
import styled, { theme } from '@styling';
import { v4 as uuid } from 'uuid';

const Label = styled('label')``;
const Field = styled('input')``;

const Input = ({ className, label, id = uuid(), ...rest }) => (
  <div className={className}>
    <Label htmlFor={id}>{label}</Label>
    <Field {...rest} />
  </div>
);

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

export default styled(Input)`
  ${theme('--font-medium')}
  display: flex;

  ${Label} {
    margin-right: 0.8rem;
    text-transform: capitalize;
  }

  ${Field} {
    border-radius: 0.4rem;
    padding: 0.4rem 0.8rem;
    text-transform: capitalize;
  }
`;
