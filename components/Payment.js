import React, { useState } from 'react'
import styled from 'styled-components'

const Payment = () => {
  
  const [annual, setAnnual] = useState(true)

  const handleAnnual = () => {
    setAnnual(true)
  }

  const handleMonthly = () => {
    setAnnual(false)
  }

  return (
    <Container>
      <Wrapper>
        <Top>
          <Cover>
            <CoverLeft active={annual} onClick={handleMonthly}>Monthly</CoverLeft>
            <CoverRight active={annual} onClick={handleAnnual}>Annual (save 40%)</CoverRight>
          </Cover>
        </Top>
        <Body>
          <Left>
            <WrapLeft>
              <Name>Starter</Name>
              <Button>Start building for free</Button>
              <Price>${annual ? '12' : '19'}/<Name>month</Name></Price>
              <Line>
                <Pin src="../assets/verif-icon.png"/>
                <Text>Unlimited access to repositories</Text>
              </Line>
              <Line>
                <Pin src="../assets/verif-icon.png"/>
                <Text>100 generations per month</Text>
              </Line>
            </WrapLeft>
          </Left>
          <Right>
            <WrapRight>
              <Call>
                <Icon src="../assets/crown.png"/>
                <Sentence>Best plan</Sentence>
              </Call>
              <Name style={{color: "#ffffff"}}>Pro</Name>
              <Price style={{color: "#ffffff"}}>${annual ? '29' : '49'}/<Name style={{color: "#ffffff"}}>month</Name></Price>
              <Line>
                <Pin src="../assets/verif-icon.png"/>
                <Text style={{color: "#ffffff"}}>Unlimited access to repositories</Text>
              </Line>
              <Line>
                <Pin src="../assets/verif-icon.png"/>
                <Text style={{color: "#ffffff"}}>Unlimited generations per month</Text>
              </Line>
              <Line>
                <Pin src="../assets/verif-icon.png"/>
                <Text style={{color: "#ffffff"}}>Priority support</Text>
              </Line>
              <Line>
                <Pin src="../assets/verif-icon.png"/>
                <Text style={{color: "#ffffff"}}>Access to latest features</Text>
              </Line>
            <Button style={{border: "none"}}>Start building for free</Button>
            </WrapRight>
          </Right>
        </Body>
      </Wrapper>
    </Container>
  )
}

export default Payment

const Container = styled.div`
  position: fixed; 
  z-index: 7; 
  top: 0; 
  left: 0; 
  height: 100vh; 
  width: 100vw;
  background: #1E1E1E;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 600px;
  width: 800px; 
  background: #ffffff; 
  border-radius: 10px;
`;

const Top = styled.div`
  height: 20%; 
  width: 100%; 
  //background: red;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Cover = styled.div`
  width: 70%; 
  height: 50%; 
  border-radius: 100px;
  border: solid 1px #7B7B7B;
  padding: 5px;
  display: flex; 
  flex-direction: row;

`;

const CoverLeft = styled.div`
  height: 100%; 
  width: 50%; 
  border-radius: 100px; 
  //background: red;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 16px; 
  color: #7B7B7B;
  font-weight: 300;
  cursor: pointer;
  background: ${(props) => (props.active ? 'transparent' : '#448FFF')};
  color: ${(props) => (props.active ? '#7B7B7B' : '#ffffff')}
`; 

const CoverRight = styled(CoverLeft)`
  //background: #448FFF;
  color: #ffffff;
  background: ${(props) => (props.active ? '#448FFF' : 'transparent')};
  color: ${(props) => (props.active ? '#ffffff' : '#7B7B7B')}
`;

const Body = styled.div`
  height: 75%; 
  width: 100%; 
  //background: red;
  display: flex; 
  flex-direction: row;
`; 

const Left = styled.div`
  height: 100%; 
  width: 50%; 
  border-right: solid 1px #7B7B7B;
  display: flex; 
  align-items: center; 
  justify-content: center;
  padding: 20px;
`; 

const Right = styled(Left)`
  border: none;
`;

const WrapLeft = styled.div`
  height: 100%; 
  width: 100%; 
  //background: red;
  border-radius: 10px;
  position: relative;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  padding-top: 40px;
`; 

const WrapRight = styled(WrapLeft)`
  background: #448FFF;
`;

const Button = styled.div`
  position: absolute; 
  bottom: 10px; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  height: 40px; 
  width: 94%; 
  border-radius: 7px;
  background: #ffffff; 
  color: #282828; 
  font-size: 16px; 
  font-weight: 300;
  border: solid 1px #4F4F4F;
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;

const Name = styled.text`
  font-size: 24px; 
  font-weight: 300; 
  color: #323232;
`;

const Call = styled.div`
  height: auto; 
  width: auto; 
  display: flex; 
  flex-direction: row;
  position: absolute; 
  top: 15px; 
  color: #ffffff;
`;

const Icon = styled.img`
  height: 22px; 
  width: 22px;
`;

const Sentence = styled.text`
  font-weight: 300;
  margin-left: 10px;
`;

const Price = styled.text`
  font-weight: 500; 
  font-size: 40px; 
  color: #1E1E1E;
  margin-top: 20px;
`; 

const Line = styled.div`
  height: auto; 
  width: 100%; 
  margin-top: 10px; 
  display: flex; 
  flex-direction: row;
  padding-left: 10px;
`;

const Pin = styled.img`
  height: 18px; 
  width: 18px;
`;

const Text = styled.text`
  font-size: 15px; 
  color: #282828;
  font-weight: 200;
  margin-left: 10px;
`;