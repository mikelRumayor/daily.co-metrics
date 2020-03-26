import React from 'react';
import styled from '@styling';

import Button from 'Components/Button';
import Link from 'Components/Link';
import { Switch, Route } from 'Components/Router';

const Actions = styled('aside')``;

const Rooms = ({className, match: { url } }) => (
  <div className={className}>
    <Switch>
      <Route path={`${url}/add`} component={() => <h1>dfd</h1>} />
      <Route path="/">
        <Actions>
          <Button to={`${url}/add`} as={Link}>Add</Button>
        </Actions>
      </Route>
    </Switch>
  </div>
)

export default styled(Rooms)``;
