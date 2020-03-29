import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import Button from 'Components/Button';
import Form, { Input } from 'Components/Form';

import rooms from 'Services/rooms';
import meetings from 'Services/meetings';

const Layout = styled('div')``;
const Title = styled('h2')``;

const { APP_URI } = process.env;

const RoomForm = ({ className, onSubmit = () => {} }) => {
  const contraints = useMemo(
    () => ({
      name: {
        format: {
          message: 'Spaces are not allowed',
          pattern: /^\S*$/,
        },
      },
    }),
    [],
  );

  const hadleSubmit = async values => {
    const { id, privacy } = await rooms.create(values);

    if (privacy === 'private') {
      const token = await meetings.createToken(values);
      onSubmit(`${APP_URI}/live/${id}?token=${token}`);
    } else {
      onSubmit(`${APP_URI}/live/${id}`);
    }
  };

  return (
    <Form className={className} constraint={contraints} onSubmit={hadleSubmit}>
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
  );
};

RoomForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default styled(RoomForm)`
  ${Layout} {
    margin: 3.2rem 0;

    ${Input} {
      margin: 1.2rem 0;
    }
  }
`;
