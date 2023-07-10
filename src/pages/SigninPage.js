import { SignIn } from '@clerk/nextjs'
import React from 'react'
import styled from 'styled-components'

const SigninPage = () => {
  return (
    <Container>
      <SignIn />
    </Container>
  )
}

export default SigninPage

const Container = styled.div`
  position: fixed; 
  height: 100vh; 
  width: 100vw; 
  background: rgba( 255, 255, 255, 0.05 );
//box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 11px );
-webkit-backdrop-filter: blur( 11px );
//border-radius: 10px;
//border: 1px solid rgba( 255, 255, 255, 0.18 );
  display: flex;
  align-items: center; 
  justify-content:center;
`;