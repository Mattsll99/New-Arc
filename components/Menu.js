import React, { useState } from 'react'
import styled from 'styled-components'
import Payment from './Payment'
import { UserButton } from "@clerk/nextjs";

const Menu = () => {

  const [plans, setPlans] = useState(false)

  const handlePlans = () => {
    setPlans(true)
  }

  const closePlans = () => {
    setPlans(false)
  }

  return (
    <Container>
      <UserButton afterSignOutUrl="/"/>
    </Container>
  )
}

export default Menu

const Container = styled.div`
  height: 100%;
  width: 130px; 
  position: fixed; 
  top: 0; 
  left:0;
  border-right: solid 1px #989898;
  //z-index: 2;
  background: #2E2E2E;
  display: flex; 
  flex-direction: column;
  align-items: center;
  //background: red;
`;

const Wrap = styled.div`
  height: 100vh; 
  width: 100vw; 
  background: green;
  position: fixed;
  top: 0;
  left: 0;
`; 

const Button = styled.div`
  height: 30px; 
  width: 90%; 
  //background: red;
  margin-top: 200px;
  border-radius: 3px;
  display: flex; 
  flex-direction: row; 
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #646464;
  }
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