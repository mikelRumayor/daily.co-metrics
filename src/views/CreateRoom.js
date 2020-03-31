import React, { useRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { theme } from '@styling';

import Button from 'Components/Button';
import { Redirect } from 'Components/Router';

import Form from 'Components/RoomForm';

const Input = styled('input')``;
const Background = styled('aside')``;
const Wrapper = styled('div')``;

/*
 View component that provides room creation and video calls generation
*/
const CreateRoom = ({ className, onRefetch }) => {
  const input = useRef();
  const [url, setUrl] = useState();
  const [hasRedirect, setRedirect] = useState(false);

  const hadleSubmit = useCallback(
    generatedUrl => {
      onRefetch();
      setUrl(generatedUrl);
    },
    [onRefetch],
  );

  const handleRedirect = () => {
    setRedirect(true);
  };

  const handleCopy = async () => {
    input.current.select();
    document.execCommand('copy');
  };

  return (
    <div className={className}>
      {hasRedirect && <Redirect to="/rooms" />}
      <Background onClick={handleRedirect} />
      {!url ? (
        <Form onSubmit={hadleSubmit} />
      ) : (
        <Wrapper>
          <Input ref={input} label="room url" value={url} />
          <Button onClick={handleCopy}>copy</Button>
        </Wrapper>
      )}
    </div>
  );
};

CreateRoom.propTypes = {
  className: PropTypes.string,
  onRefetch: PropTypes.func,
};

export default styled(CreateRoom)`
  display: flex;
  justify-content: center;
  padding: 1.6rem;
  position: fixed;
  width: 100%;
  height: 100%;

  ${Background} {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    width: 100vw;
    height: 100vh;
    top: 0;
  }

  ${Form}, ${Wrapper} {
    background: white;
    border-radius: 0.5rem;
    margin: 18vh auto 0;
    padding: 1.6rem;
    position: relative;
    z-index: 1;
  }

  ${Form} {
    height: 23rem;
    width: 35rem;
  }

  ${Wrapper} {
    height: 10rem;
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Input} {
      display: inline-block;
      ${theme('--font-large')}
      width: 28rem;
    }
  }
`;
