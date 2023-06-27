import React from 'react'
import styled from 'styled-components'

const File = ({padding, name}) => {
  return (
    <Container style={{paddingLeft: padding}}>
      <Icon src="../assets/white-file.png"/>
      <Name>{name}</Name>
    </Container>
  )
}

export default File

const Container = styled.div`
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
  //padding-left: 50px;
  cursor: pointer; 
  &:hover {
    background: #414141;
  }
`;

const Icon = styled.img`
  height: 17px; 
  width: 17px;
`; 

const Name = styled.text`
  font-size: 15px; 
  font-weight: 300;
  margin-left: 10px;
`;