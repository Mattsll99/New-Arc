import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const PlansPage = () => {

  const [yearlyOn, setYearlyOn] = useState(false)

  const handleYearlyPage = () => {
    setYearlyOn(true)
  }

  const handleMonthlyPage = () => {
    setYearlyOn(false)
  }

  return (
    <Layout>
      <Container>
      <Top>
        <Title>Choose a Plan</Title>
        <Wrapper>
          <Left yearlyOn = {yearlyOn} onClick={handleMonthlyPage}>Monthly billing</Left>
          <Right yearlyOn = {yearlyOn} onClick={handleYearlyPage}>Annual billing</Right>
        </Wrapper>
      </Top>
      <Body>
        <Column>
          <Up>
            <Subtitle>Free</Subtitle>
            <Offer>$0</Offer>
          </Up>
          <Bottom></Bottom>
        </Column>
        <Column>
          <Up>
            <Subtitle>Discovery</Subtitle>
            <Offer>$199</Offer>
          </Up>
          <Bottom></Bottom>
        </Column>
        <Column>
          <Up>
            <Subtitle>Designer</Subtitle>
            <Offer>$399</Offer>
          </Up>
          <Bottom></Bottom>
        </Column>
        <Column style={{borderRight: "none"}}>
         <Up>
            <Subtitle>Pro</Subtitle>
            <Offer>$599</Offer>
         </Up>
          <Bottom></Bottom>
        </Column>
      </Body>
    </Container>
    </Layout>
  )
}

export default PlansPage

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  background: #2E2E2E;
  border-radius: 10px;
  padding: 10px;
  display: flex; 
  flex-direction: column;
`;

const Top = styled.div`
  height: 25%; 
  width: 100%;
  position: relative;
`;

const Body = styled.div`
  height: 75%; 
  width: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  //justify-content: space-between;
  padding-top: 40px; 
  padding-bottom: 40px;
`;

const Title = styled.text`
  font-size: 40px; 
  font-weight: 100; 
  color: #FFFFFF; 
  position: absolute; 
  top: 20px; 
  left: 20px;
`;

const Wrapper = styled.div`
  height: 45px; 
  width: 280px; 
  position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  bottom: 20px;
  border: solid 1px #6A6A6A;
  border-radius: 5px;
  display: flex; 
  flex-direction: row; 
  padding: 3px;
`; 

const Left = styled.div`
  height: 100%; 
  width: 50%; 
  //background: #FFFFFF;
  border-radius: 3px;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 13px;
  //color: #6A6A6A;
  background: ${props => (props.yearlyOn ? 'transparent' : '#448FFF')};
  color: ${props => (props.yearlyOn ? '#6A6A6A' : '#FFFFFF')};
`; 

const Right = styled(Left)`
  background: ${props => (props.yearlyOn ? '#448FFF' : 'transparent')};
  color: ${props => (props.yearlyOn ? '#FFFFFF' : '#6A6A6A')};
`;

const Column = styled.div`
  height: 100%; 
  width: 25%;
  border-right: solid 1px black;
  display: flex; 
  flex-direction: column;
  padding-left: 10px; 
  padding-right: 10px;
`;

const Up = styled.div`
  height: 50%; 
  width: 100%;
  border-bottom: solid 1px black; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

const Bottom = styled.div`
  height: 50%; 
  width: 100%;
`;

const Subtitle = styled.text`
  font-size: 20px; 
  color: black;
  font-weight: 400;
`;

const Offer = styled.text`
  color: black;
  margin-top: 30px;
  font-size: 45px; 
  font-weight: 500;
`;