import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import RepoChat from '../../components/RepoChat'

const ForkHome = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Wrapper>
        <RepoChat />
      </Wrapper>
    </Container>
  )
}

export default ForkHome

const Container = styled.div`
  height: 100vh; 
  width: 100vw;
  display: flex; 
  flex-direction: column;
`;

const Wrapper = styled.div`
  //background: red;
  height: 100%; 
  width: 100%;
  //padding-top: 60px;
  padding-left: 130px;
  display: flex; 
  flex-direction: column;
`;