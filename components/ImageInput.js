import React, { useState } from 'react';
import styled from 'styled-components';

const ImageInput = () => {
  const [dragging, setDragging] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    // Do something with the dropped file (e.g., upload or process it)
    console.log('Dropped file:', file);

    setCompleted(true);
  };

  return (
    <Wrapper>
    <Container
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      dragging={dragging}
      completed={completed}
    >
      {completed ? 'Done' : dragging ? 'Drop the image here' : 'Drag and drop the image'}
    </Container>
    <Button>Validate</Button>
    </Wrapper>
  );
};

export default ImageInput;

const Container = styled.div`
  margin-top: 150px;
  height: 150px;
  width: 100%;
  background: #6F6F6F;
  display: flex;
  color: #A7A7A7;
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: end;
`;

const Button = styled.div`
  height: 50px; 
  width: 120px; 
  background: #6F6F6F;
  margin-top: 10px;
  display: flex; 
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  cursor: pointer; 
  &:hover {
    background: #FFFFFF; 
    color: #6F6F6F;
  }
`;