import React, { useState } from 'react'
import styled from 'styled-components'
import PageBox from './PageBox'

const Discover = () => {

  const [displayNew , setDisplayNew] = useState(false)

  const showTrending = () => {
    setDisplayNew(false)
  }

  const showNew = () => {
    setDisplayNew(true)
  }

  return (
    <Container>
      <Top>
        <Wrapper>
          <Left displayNew={displayNew} onClick={showTrending}>Trending</Left>
          <Right displayNew={displayNew} onClick={showNew}>New</Right>
        </Wrapper>
      </Top>
      <Body>
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
        <PageBox />
      </Body>
    </Container>
  )
}

export default Discover

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  background: #2E2E2E;
  border-radius: 10px;
  padding: 10px;
  display: flex; 
  flex-direction: column;
  padding: 20px;
`;

const Top = styled.div`
  height: 10%; 
  width: 100%; 
  background: #2E2E2E;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 45px; 
  width: 200px; 
  background: transparent; 
  border: solid 1px #6A6A6A;
  border-radius: 100px;
  display: flex; 
  flex-direction: row;
  padding: 3px;
`;

const Left = styled.div`
  height: 100%; 
  width: 50%; 
  background: #FFFFFF;
  border-radius: 100px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
  color: #6A6A6A; 
  font-size: 14px;
  background: ${props => (props.displayNew ? 'transparent' : '#FFFFFF')};
`; 

const Right = styled(Left)`
  background: ${props => (props.displayNew ? '#FFFFFF' : 'transparent')};
`;

const Body = styled.div`
  height: auto; 
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  //flex-direction: row;
  justify-content: space-between;
  //align-items: center;
  //padding-top: 60px;
  margin-top: 50px;
  ::-webkit-scrollbar {
    display: none;
  }
`;