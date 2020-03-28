import React from 'react';
import styled from '@styling';

import useData from 'Hooks/useData';

import services from 'Services/rooms'

import Card from 'Components/Card';


const Rooms = ({ className }) => {
  const rooms = useData(services.get) || []

  return (
    <div className={className}>
      {rooms.map(room => (
        <Card key={room.id} {...room}/>
      ))}
    </div>
  )
  
}

export default styled(Rooms)``;