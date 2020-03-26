import styled, { theme } from '@styling';

export default styled('button')`
  ${theme('--font-small')}
  ${theme('--font-weight-demi')}
  background-color: ${theme('--color-secondary')};
  border-radius: 1.6rem;
  color: ${theme('--color-light')};
  min-width: 6rem;
  padding: 0.8rem 1.2rem;
  text-decoration: none;

  &:active {
    color: ${theme('--color-light')};
    background-color: ${theme('--color-primary')};
  }

  &[disabled] {
    color: ${theme('--color-light')};
    background-color: ${theme('--color-primary')};
  }
`;
