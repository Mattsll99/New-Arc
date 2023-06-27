import React from 'react'
import { SignUp } from "@clerk/nextjs";
import styled from 'styled-components'

const Signup = () => {
  return (
    <Container>
      <SignUp />
    </Container>
  )
}

export default Signup

const Container = styled.div`
  height: 100vh; 
  width: 100vw; 
  background: #1E1E1E; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  position: fixed; 
  z-index: 6; 
  top: 0; 
  left: 0;
`;