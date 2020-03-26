import React from 'react';
import styled from '@styling';

import Button from 'Components/Button';
import Form, { Input } from 'Components/Form';

import rest from 'Providers/rest';

const Layout = styled('div')``
const Title = styled('h2')``

const CreateRoom = ({ className }) => {

  const hadleSubmit = async values => {
    const { id = 'd'} = await rest.create('/rooms', values)
    console.log(id)
  }

  return (
    <Form className={className} onSubmit={hadleSubmit}>
      <Title>Create a room</Title>
      <Layout>
        <Input label="room name" name="name" />
        <Input label="privacy" name="privacy" options={['public', 'private']} type='select'/>
      </Layout>
      <Button type="submit">create</Button>
    </Form>
  );
}

export default styled(CreateRoom)`

  ${Layout} {
    margin: 3.2rem 0;

    ${Input} {
      margin: 1.2rem 0;
    }
  }
`;
