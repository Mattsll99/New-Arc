import React from 'react'
import styled from 'styled-components'

const Folder = ({padding, name}) => {
  return (
    <Container style={{paddingLeft:padding}}>
      <Icon src="../assets/folder-icon.png"/>
      <Name>{name}</Name>
    </Container>
  )
}

export default Folder

const Container = styled.div`
  //all: initial;
  height: 30px; 
  width: 100%; 
  //background: red;
  display: flex; 
  flex-direction: row;
  align-items: center; 
  justify-content: start;
  border-radius: 5px; 
  //background: red;
  padding: 10px;
  cursor: pointer; 
  &:hover {
    background: #414141;
  }
`;

const Icon = styled.img`
  height: 20px; 
  width: 20px;
  margin-left: -10px;
`; 

const Name = styled.text`
  font-size: 15px; 
  font-weight: 300;
  margin-left: 10px;
`;