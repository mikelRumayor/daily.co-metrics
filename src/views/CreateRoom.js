import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Button from 'Components/Button';
import Form, { Input } from 'Components/Form';
import { Redirect } from 'Components/Router';

import Services from 'Services/rooms';

const Layout = styled('div')``;
const Title = styled('h2')``;

const CreateRoom = ({ className }) => {
  const [roomId, createRoom] = useState(false);

  const hadleSubmit = async values => {
    const { id } = await Services.create(values);
    createRoom(id);
  };

  return (
    <>
      {!!roomId && <Redirect to={`/live/${roomId}`} />}
      <Form className={className} onSubmit={hadleSubmit}>
        <Title>Create a room</Title>
        <Layout>
          <Input label="room name" name="name" />
          <Input
            label="privacy"
            name="privacy"
            options={['public', 'private']}
            type="select"
          />
        </Layout>
        <Button type="submit">create</Button>
      </Form>
    </>
  );
};

CreateRoom.propTypes = {
  className: PropTypes.string,
};

export default styled(CreateRoom)`
  ${Layout} {
    margin: 3.2rem 0;

    ${Input} {
      margin: 1.2rem 0;
    }
  }
`;
