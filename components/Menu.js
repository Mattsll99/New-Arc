import React, { useState } from 'react'
import styled from 'styled-components'
import Profile from './Profile'

const Menu = () => {

  const [profile, setProfile] = useState(false)

  const openProfile = () => {
    setProfile(true)
  }

  const closeProfile = () => {
    setProfile(false)
  }

  return (
    <Container>
      <a href="http://localhost:3000/DiscoveryPage">
      <Line>
        <Icon src="../assets/discover-icon.png"/>
        <Text>Discover</Text>
      </Line>
      </a>
      <a href="http://localhost:3000/MuseEditorPage">
      <Line>
      <Icon src="../assets/idee-ampoule.png"/>
      <Text>Create</Text>
      </Line>
      </a>
          
      <a href="http://localhost:3000/PlansPage">
      <Line>
      <Icon src="../assets/plus-icon.png"/>
      <Text>Get credits</Text>
      </Line>
      </a>
      {
        profile === true &&
        <ProfileCover>
          <CloseButton onClick={closeProfile}>
            <Cross src="../assets/fermer.png"/>
          </CloseButton>
          <Profile />
        </ProfileCover>
      } 
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
  //background: red;
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

const ProfileCover = styled.div`
  position: fixed; 
  height: 100vh; 
  width: 82%;
  top: 0;
  right:0;
  z-index:5;
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: rgba( 29, 29, 29, 0.25 );
  backdrop-filter: blur( 12px );
-webkit-backdrop-filter: blur( 12px );
  display: flex; 
  flex-direction: column;
`;

const CloseButton = styled.div`
  height: 40px; 
  width: 40px; 
  border-radius: 5px;
  background: #1D1D1D;
  cursor: pointer;
`;

const Cross = styled.img`
  height: 100%; 
  width: auto;
`;