import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'spooner';
import styled, { theme } from '@styling';
import { v4 as uuid } from 'uuid';

const Label = styled('label')``;
const Field = styled('select')``;

const Select = ({ className, options = [], ...props }) => {
  const {
    id = uuid(),
    label,
    name,
    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {},
    value = '',
    ...rest
  } = useField(props);

  const handleBlur = () => {
    onBlur();
  };

  const handleChange = event => {
    const { value: needle } = event.target;

    event.stopPropagation();

    const after = options.find(option => option === needle) || options[0];

    onChange(after);
  };

  const handleFocus = () => {
    onFocus();
  };

  useEffect(() => {
    if (value === undefined) {
      const after = options[0] || {};

      onChange(after);
    }
  }, [onChange, options, value]);

  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Field
        {...rest}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
      >
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </Field>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default styled(Select)`
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
