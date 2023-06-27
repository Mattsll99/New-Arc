import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import RepoChat from '../../components/RepoChat'
import Payment from '../../components/Payment'

const ForkHome = () => {

  const [plans, setPlans] = useState(false)

  const handlePlans = () => {
    setPlans(true)
  }

  const closePlans = () => {
    setPlans(false)
  }

  return (
    <Container>
      {
        plans === true &&
        <div>
        <CloseButton></CloseButton>
        <Payment />
        </div>
      }
      <Button onClick={handlePlans}>
      <Icon src="../assets/crown.png"/>
      <Text>upgrade</Text>
      </Button>
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

const Button = styled.div`
  height: 30px; 
  width: auto; 
  //background: red;
  //margin-top: 200px;
  border-radius: 3px;
  display: flex; 
  flex-direction: row; 
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #646464;
  }
  position: absolute; 
  top: 200px; 
  left: 10px; 
  z-index: 5;

`;

const Top = styled.div`
  width: 100%; 
  height: 60px; 
  background: #1E1E1E;
`;

const Icon = styled.img`
  height: 17px; 
  width: 17px;
`;

const Text = styled.text`
  color: #ffffff;
  font-size: 15px; 
  font-weight: 300; 
  margin-left: 7px;
`;

const CloseButton = styled.div`
  height: 30px; 
  width: 100px; 
  background: #2D2D2D;
  position: fixed; 
  top: 50px; 
  left: 30px;
  z-index: 6;
  background: red;
`;