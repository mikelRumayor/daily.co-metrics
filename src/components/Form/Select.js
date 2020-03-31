import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
/* Sponner is a Form state management dependency that allows using the react.context */
import { useField } from 'spooner';
import styled, { theme } from '@styling';
import { v4 as uuid } from 'uuid';

const Label = styled('label')``;
const Field = styled('select')``;

const Select = ({ className, options = [], ...props }) => {
  /* useField hooks returns the context of the form that the input belongs to. 
     The only required parameter to make it work is to provider an objects such as { name: 'fieldName'}
     The onChange value provided by the useField hooks is who modifies the form context with the provided name parameter
  */
  const {
    id = uuid(),
    label,
    name,
    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {},
    value,
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

  // This useEffect forces the Select to have a default value in case that it is not provided.
  // If no value is provider the first value of the options is provided
  useEffect(() => {
    if (value === undefined) {
      const after = options[0] || '';

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
