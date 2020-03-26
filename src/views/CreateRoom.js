import React from 'react';
import styled from '@styling';

import { Redirect } from 'Components/Router';
import Form, { Input } from 'Components/Form';

const Actions = styled('div')``;

const CreateRoom = ({ className, match: { url } }) => (
  <Form className={className}>
    <Input label="mame" name="name" />
  </Form>
);

export default styled(CreateRoom)``;
