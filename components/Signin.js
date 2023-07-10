import React from 'react'
import styled from 'styled-components'
import { SignIn } from "@clerk/nextjs";

const Signin = () => {
  return (
    <Container>
      
      <SignIn/>
      
    </Container>
  )
}

export default Signin

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
  display: flex; 
  flex-direction: row; 
  background: rgba( 255, 255, 255, 0 );
//box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10px );
-webkit-backdrop-filter: blur( 10px );
//border-radius: 10px;
//border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

