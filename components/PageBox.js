import React from 'react'
import styled from 'styled-components'

const PageBox = () => {
  //props avec screen image, name, link
  return (
    <Container>
      <Screen></Screen>
      <Bottom>
        <Profile />
        <Name>Matthias Sylla</Name>
      </Bottom>
    </Container>
  )
}

export default PageBox

const Container = styled.div`
  height: 220px; 
  width: 250px; 
  background: transparent;
  margin-top: 30px;
  border: solid 1px black;
  //border-radius: 5px;
  overflow: hidden;
  border: none;
`; 

const Screen = styled.div`
  height: 80%; 
  width: 100%; 
  background:transparent;
  border-radius: 5px;
  border: solid 1px #FFFFFF;
`;

const Bottom = styled.div`
  height: 20%; 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
  //padding-left: 5px; 
  //padding-right:5px;
`;

const Profile = styled.div`
  height: 30px; 
  width: 30px; 
  border-radius: 100px;
  border: solid 1px black;
`;

const Name = styled.text`
  font-size: 13px; 
  font-weight: 200;
  margin-left: 10px; 
  color: #FFFFFF;
`;