import React from 'react'
import styled from 'styled-components'

const DeployButton = () => {
  return (
    <Container>Deploy</Container>
  )
}

export default DeployButton

const Container = styled.div`
  height: 35px; 
  width: 120px; 
  background: #448FFF;
  position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  margin-top: 320px;
  border-radius: 100px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
`;