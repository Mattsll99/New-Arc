import React from 'react'
import styled from 'styled-components'

const Menu = () => {
  return (
    <Container>
      <Line>
        <Icon src="../assets/discover-icon.png"/>
        <Text>Discover</Text>
      </Line>
      <Line>
      <Icon src="../assets/profile-icon.png"/>
      <Text>Your profile</Text>
      </Line>
      <Line>
      <Icon src="../assets/plus-icon.png"/>
      <Text>Get credits</Text>
      </Line>
    </Container>
  )
}

export default Menu

const Container = styled.div`
  height: 260px; 
  width: 100%; 
  background: transparent;
  display: flex; 
  flex-direction: column;
  justify-content: start;
  padding-top: 80px;
  padding-left: 10px; 
  padding-right: 10px;
  border-bottom: solid 1px #4A4A4A;
`;

const Line = styled.div`
  height: 40px; 
  width: 100%;
  background: transparent;
  margin-top: 15px;
  border-radius: 5px;
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: start;
  padding-left: 5px; 
  padding-right: 5px;
  &:hover {
    background: #505050;
  }
  cursor: pointer;
`;

const Icon = styled.img`
  height: 20px; 
  width: 20px; 
  background: transparent;
`;

const Text = styled.text`
  font-size: 14px; 
  font-weight: 400; 
  color: #747474;
  margin-left: 10px;
`;

//747474