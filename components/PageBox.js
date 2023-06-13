import React from 'react'
import styled from 'styled-components'

const PageBox = ({source}) => {
  //props avec screen image, name, link
  return (
    <Container>
      <Screen>
        <Cover></Cover>
        <iframe style={{borderRadius:'6px'}} src={source}/>
      </Screen>
    </Container>
  )
}

export default PageBox

const Container = styled.div`
  //height: 220px; 
  //width: 250px;
  height: 16vw; 
  width: 24vw;
  //width: 22%; 
  background: transparent;
  margin-top: 30px;
  margin-left: 25px;
  border: solid 1px black;
  //border-radius: 5px;
  //overflow: hidden;
  border: none;
  border-radius: 5px;
  //background: red;
`; 

const Cover = styled.div`
  position: absolute; 
  height: 100%; 
  width: 100%; 
  background: transparent;
`;

const Screen = styled.div`
  height: 100%; 
  width: 100%; 
  background:transparent;
  border-radius: 5px;
  overflow: hidden;
  padding: 1px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  overflow-y: hidden;
  position: relative;
  //background: blue;
  //border: solid 1px #FFFFFF;
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