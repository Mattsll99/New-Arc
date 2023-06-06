import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Darkmode = () => {

  const [darkModeOn, setDarkModeOn] = useState(true)
  const [backgroundColor, setBackgroundColor] = useState('#1d1d1d')

  const handleDarkMode = () => {
    setDarkModeOn(true)
    setBackgroundColor("#1d1d1d")
  }

  const handleLightMode = () => {
    setDarkModeOn(false)
    setBackgroundColor("#FEFDE7")
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', backgroundColor);
  }, [backgroundColor]);

  return (
    <DarkContainer>
      <DarkLeft darkModeOn={darkModeOn} onClick={handleDarkMode}>
        <Image src="../assets/lune-jaune.png"/>
      </DarkLeft>
      <DarkRight darkModeOn={darkModeOn} onClick={handleLightMode}>
      <Image src="../assets/soleil-jaune.png"/>
      </DarkRight>
    </DarkContainer>
  )
}

export default Darkmode

const DarkContainer = styled.div`
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

const DarkLeft = styled.div`
  height: 100%; 
  width: 50%;
  border-radius: 5px;
  background: ${props => (props.darkModeOn ? '#4a4a4a' : 'transparent')};
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;

const DarkRight = styled(DarkLeft)`
  background: ${props => (props.darkModeOn ? 'transparent' : '#4a4a4a')};
`;

const Image = styled.img`
  height: 20px; 
  width: 20px; 
  background: transparent;
`;