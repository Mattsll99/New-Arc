import React from 'react'
import styled from 'styled-components'

const AIChat = () => {
  return (
    <Container>
      <Cover>
        <Wrapper>
          <Button>Ask</Button>
        </Wrapper>
      </Cover>
    </Container>
  )
}

export default AIChat

const Container = styled.div`
  height: 100%; 
  width: 40%; 
  //background: red;
  position: absolute;
  right: 0; 
  top: 0;
  //background: red;
  z-index: 3;
  //padding: 10px;
  background: rgba( 255, 255, 255, 0.05 );
//box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12px );
-webkit-backdrop-filter: blur( 12px );
//border-radius: 10px;
//border: 1px solid rgba( 255, 255, 255, 0.18 );  
margin-top: 50px;
`;

const Cover = styled.div`
  height: 40px; 
  width: 95%; 
  position: absolute; 
  top: 10px;
  border: solid 1px #989898;
  border-radius: 5px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
`;

const Wrapper = styled.div`
  height: 100%; 
  width: 100%; 
  position: relative; 
  padding: 10px;
`; 

const Button = styled.div`
  height: 80%; 
  width: 60px;
  position: absolute;
  right: 3px;
  background: #448FFF;
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  border-radius: 3px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  color: #ffffff;
  font-weight: 300;
`;