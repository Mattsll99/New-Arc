import React from 'react'
import styled from 'styled-components'

const Project = () => {
  const text = "Uniswap-v2-core"
  const displayedText = text.length > 14 ? text.slice(0, 14) + '..' : text;
  return (
    <Container>{displayedText}</Container>
  )
}

export default Project

const Container = styled.div`
  height: 40px; 
  width: 100%; 
  //background: green;
  border-radius: 5px;
  background: #4A4A4A;
  cursor: pointer;
  display: flex; 
  flex-direction: row; 
  align-items: center;
  justify-content: center; 
  padding: 5px;
  font-size: 14px;
  font-weight: 300;
  &:hover {
    background: #1E1E1E;
  }
`;