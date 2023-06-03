import React from 'react'
import styled from 'styled-components'

const DiscoverPage = () => {
  return (
    <Container>
      <Top>
        <Screen></Screen>
      </Top>
      <Body>
        <Cover>
          <Icon src='../assets/cadena.png'/>
          <Text>Unlock the code</Text>
        </Cover>
      </Body>
    </Container>
  )
}

export default DiscoverPage

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  background: #2E2E2E;
  border-radius: 10px;
  padding: 10px;
  display: flex; 
  flex-direction: column;
  position: relative;
  //padding: 20px;
`;

const Top = styled.div`
  height: 70%; 
  width: 100%;
  //padding: 5px;
`; 

const Body = styled.div`
  height: 30%; 
  width: 100%;
`;

const Screen = styled.div`
  height: 100%; 
  width: 100%; 
  background: #FFFFFF;
  border-radius: 5px;
`; 

const Cover = styled.div`
  height: 29%; 
  width: 100%;
  position: absolute; 
  bottom: 0; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  border-bottom-right-radius: 5px; 
  border-bottom-left-radius: 5px;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  background: rgba( 255, 255, 255, 0.15 );
//box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 18.5px );
  -webkit-backdrop-filter: blur( 18.5px );
  //border-radius: 10px;
  //border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const Icon = styled.img`
  height: 40px; 
  width: 40px; 
  background: transparent;
`;

const Text = styled.text`
  font-size: 14px; 
  font-weight: 400; 
  color: #FFFFFF;
  margin-top: 10px;
`;