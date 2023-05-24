import React, { useState } from 'react'
import styled from 'styled-components'

const Darkmode = () => {

  const [darkModeOn, setDarkModeOn] = useState(false)

  const handleDarkMode = () => {
    setDarkModeOn(true)
  }

  const handleLightMode = () => {
    setDarkModeOn(false)
  }

  return (
    <Container>
      <Left darkModeOn={darkModeOn} onClick={handleDarkMode}>
        <Image src="../assets/lune-jaune.png"/>
      </Left>
      <Right darkModeOn={darkModeOn} onClick={handleLightMode}>
      <Image src="../assets/soleil-jaune.png"/>
      </Right>
    </Container>
  )
}

export default Darkmode

const Container = styled.div`
  height: 40px; 
  width: 95%; 
  background: transparent;
  border: solid 1px #4A4A4A;
  position: absolute; 
  bottom: 10px;
  border-radius: 5px;
  padding: 3px;
  display: flex; 
  flex-direction: row;
`;

const Left = styled.div`
  height: 100%; 
  width: 50%;
  border-radius: 5px;
  background: ${props => (props.darkModeOn ? '#4a4a4a' : 'transparent')};
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #4A4A4A;
  }
`;

const Right = styled(Left)`
  background: ${props => (props.darkModeOn ? 'transparent' : '#4a4a4a')};
`;

const Image = styled.img`
  height: 20px; 
  width: 20px; 
  background: transparent;
`;