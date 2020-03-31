import React from 'react';
import PropTypes from 'prop-types';
import styled, { theme } from '@styling';

import Link from 'Components/Link';
import LinkWithToken from 'Components/LinkWithToken';

const Date = styled('span')``;
const Name = styled('span')``;
const Privacy = styled('span')``;

/* 
  Card Component show rooms metadata such as name, creation date annd privacy.
  It also shows the links to go to call or see call metrics.
*/
const Card = ({
  className,
  created_at: createdAt,
  id,
  name,
  noStats,
  privacy,
}) => (
  <div className={className}>
    <Name>{name}</Name>
    <Date>Created at: {new window.Date(createdAt).toDateString()}</Date>
    <Privacy data-private={privacy === 'private'}>{privacy}</Privacy>
    {!noStats && <Link to={`/rooms/${id}/stats`}>go to stats</Link>}
    {privacy === 'public' ? (
      <Link target="blank" to={`/live/${id}`}>
        go to call
      </Link>
    ) : (
      <LinkWithToken fields={{ name }} target="blank" to={`/live/${id}`}>
        go to call
      </LinkWithToken>
    )}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  created_at: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  noStats: PropTypes.bool,
  privacy: PropTypes.string,
};

export default styled(Card)`
  box-shadow: 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  display: grid;
  padding: 1.6rem 3.2rem;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.6rem 0.8rem;

  ${Name} {
    grid-row: 1;
    grid-column: 1 / span 3;
    ${theme('--font-large')};
  }

  ${Date} {
    ${theme('--font-medium')};
    grid-row: 1;
    grid-column: 4 / span 3;
  }

  ${Privacy} {
    ${theme('--font-medium')};
    background: ${theme('--color-secondary')};
    border-radius: 1.6rem;
    color: ${theme('--color-light')};
    grid-row: 2;
    grid-column: 1;
    max-width: 8rem;
    text-align: center;
    text-transform: capitalize;

    &[data-private='true'] {
      background: ${theme('--color-alert')};
    }
  }

  ${Link} {
    ${theme('--font-medium')};
    grid-row: 3;
    text-transform: capitalize;
  }
`;
