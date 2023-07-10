import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <LogoBox>Adeni</LogoBox>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px; 
  width: 100%; 
  border-bottom: solid 1px #989898;
  display: flex; 
  flex-direction: row;
  z-index: 3;
  position: fixed; 
  top: 0;
  background: #2E2E2E;
`;

const LogoBox = styled.div`
  height: 100%; 
  width: 130px; 
  background: #1E1E1E;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: #ffffff; 
  font-size: 22px; 
  font-weight: 300;
  border-right: solid 1px #989898;
`;