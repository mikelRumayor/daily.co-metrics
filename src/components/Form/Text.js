import React from 'react';
import PropTypes from 'prop-types';
/* Sponner is a Form state management dependency that allows using the react.context */
import { useField } from 'spooner';
import styled, { theme } from '@styling';
import { v4 as uuid } from 'uuid';

const Label = styled('label')``;
const Field = styled('input')``;
const Error = styled('span')``;
const Wrapper = styled('div')``;

const Text = ({ className, ...props }) => {
  /*
    useField hooks returns the context of the form that the input belongs to. 
    The only required parameter to make it work is to provider an objects such as { name: 'fieldName'}
    The onChange value provided by the useField hooks is who modifies the form context with { name: 'fieldName'}.
    Sponner uses validate.js for fields validation. Errors regarding to { name: 'fieldName'} are also provided in the context. 
  */
  const {
    error,
    id = uuid(),
    label,
    name,
    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {},
    ...rest
  } = useField(props);

  const handleBlur = () => {
    onBlur();
  };

  const handleChange = event => {
    const { value: rvalue } = event.target;

    event.stopPropagation();

    onChange(rvalue);
  };

  const handleFocus = () => {
    onFocus();
  };

  return (
    <div className={className}>
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Field
          {...rest}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </Wrapper>
      {error && <Error>{error}</Error>}
    </div>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

export default styled(Text)`
  ${theme('--font-medium')}
  height: 5.2rem;

  ${Wrapper} {
    display: flex;
  }

  ${Label} {
    margin-right: 0.8rem;
    text-transform: capitalize;
  }

  ${Field} {
    border-radius: 0.4rem;
    padding: 0.4rem 0.8rem;
  }

  ${Error} {
    color: red;
  }
`;
