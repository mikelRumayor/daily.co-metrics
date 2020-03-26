import styled, { theme } from '@styling';

import { Link } from 'Components/Router';

export default styled(Link)`
  ${theme('--font-small')}
  ${theme('--font-weight-demi')}
  color: ${theme('--color-seconday')};
  text-decoration: none;
`;
