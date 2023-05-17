import React from 'react'
import styled from 'styled-components'

const TextInput = () => {
  return (
    <Wrapper>
      <Container>
        <Input placeholder='Your text'/>
      </Container>
      <Button>Validate</Button>
    </Wrapper>
  )
}

export default TextInput

const Container = styled.div`
  width: 100%;
  height: 200px;
  background: #FFFFFF;
  margin-top: 150px;
  background: #6F6F6F;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  position: relative;
  align-items: end;

`;

const Input = styled.input`
  height: auto; 
  width: 100%;
  background: transparent;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
  decoration: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #A7A7A7;
  }
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