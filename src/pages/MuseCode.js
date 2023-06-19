import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CodeWrapper from '../../components/CodeWrapper'
import Logo from '../../components/Logo'
import ConsoleWrapper from '../../components/ConsoleWrapper'

const MuseCode = () => {

  const [darkModeOn, setDarkModeOn] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [code, setCode] = useState(false)

  const handleDarkMode = () => {
    setDarkModeOn(true)
    //setBackgroundColor("#1d1d1d")
  }
  

  const handleLightMode = () => {
    setDarkModeOn(false)
    //setBackgroundColor("#FEFDE7")
  }

  //Textarea !== "" && button click
  //Display the component with the completion of prompt

  const displayCode = () => {
    setCode(true)
  }

  return (
    <Container>
      <Logo />
      <Left>
      <DarkContainer>
          <DarkLeft darkModeOn={darkModeOn} onClick={handleDarkMode}>
            <Image src="../assets/lune-jaune.png"/>
          </DarkLeft>
          <DarkRight darkModeOn={darkModeOn} onClick={handleLightMode}>
            <Image src="../assets/soleil-jaune.png"/>
          </DarkRight>
        </DarkContainer>
      </Left>
      <Right>
        <Wrapper darkModeOn={darkModeOn}>
          <LeftWrapper>
            <LeftWrap>
            {prompt !== "" && code === true &&
              <CodeWrapper 
                prompt={prompt}
                bool={true}
              />
            }
            </LeftWrap>
            <Cover>
              <InputWrapper>
                <InputCover placeholder='Build a function that returns "Hello word"' value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
              </InputWrapper>
              <InputButton src="../assets/blue-arrow.png" onClick={displayCode}/>
            </Cover>
          </LeftWrapper>
          <RightWrapper>
            <RightWrap>
            <ConsoleWrapper />
            </RightWrap>
          </RightWrapper>
        </Wrapper>
      </Right>
    </Container>
  )
}

export default MuseCode

const Container = styled.div`
  height: 100vh; 
  width: 100vw; 
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  height: 100%; 
  width: 200px;
  position: relative;
  padding: 10px;
  //background:red;
`;

const Right = styled.div`
  height: 100%; 
  width: 85%; 
  display: flex; 
  //align-items: end; 
  //justify-content:end;
  padding: 10px;
  position: relative;
  //background: green;
  //overflow-y: scroll;
  //background: blue;
`;

const Wrapper = styled.div`
  height: 100%; 
  width: 100%; 
  border-radius: 20px; 
  //background: #343434;
  //position: absolute; 
  right: 0;
  background: ${props => (props.darkModeOn ? '#343434' : '#ffffff')};
  display: flex; 
  flex-direction: row;
`;

const DarkContainer = styled.div`
  height: 35px; 
  width: 100%; 
  background: transparent;
  border: solid 1px #4A4A4A;
  position: absolute; 
  bottom: 10px;
  border-radius: 100px;
  padding: 3px;
  display: flex; 
  flex-direction: row;
`;

const DarkLeft = styled.div`
  height: 100%; 
  width: 50%;
  border-radius: 100px;
  background: ${props => (props.darkModeOn ? '#4a4a4a' : 'transparent')};
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;

const DarkRight = styled(DarkLeft)`
  background: ${props => (props.darkModeOn ? 'transparent' : '#4a4a4a')};
`;

const Image = styled.img`
  height: 17px; 
  width: 17px; 
  background: transparent;
`;

const LeftWrapper = styled.div`
  height: 100%; 
  width: 50%; 
  border-right: solid 1px #5B5B5B;
  position: relative;
  padding: 20px;
`;

const LeftWrap = styled.div`
  width: 100%; 
  height: 90%;
  //background: red;
  overflow: scroll;
  border-radius: 20px;
`;

const RightWrapper = styled(LeftWrapper)`
  border: none;
  //overflow: scroll;
`;

const RightWrap = styled.div`
  height: 100%; 
  width: 100%; 
  overflow: scroll;
  border-radius: 20px;
`;

const Cover = styled.div`
  height: 40px; 
  width: 90%; 
  position: absolute; 
  bottom: 20px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  border-radius: 10px;
  background: transparent;
  border: solid 1px #5B5B5B;
  display: flex; 
  align-items: center; 
  //justify-content: center;
  //overflow: scroll;
  //position: relative;
`;


const InputCover = styled.textarea`
  //height: 10px;
  width: 100%;
  height: auto;
  background: transparent;
  border: none;
  decoration: none;
  resize: none;
  display: flex; 
  align-items: center;
  //justify-content: center;
  font-size: 14px;
  color: #FFFFFF;
  border-width:0;
  text-decoration: none;
  border-style: none;
  border-color: Transparent;
  overflow: auto;
  outline: none;
  font-weight: 300;
  //margin-top: 15px;
  //background: red;
`;

const InputWrapper = styled.div`
  height: 100%; 
  width: 90%;
  position: relative;
  padding: 10px;
  overflow: scroll;
  //background: red;
`; 

const InputButton = styled.img`
  height: 25px; 
  width: 25px; 
  position: absolute; 
  right: 10px;
  top: 0;
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  transform: rotate(-90deg);
  cursor: pointer;
  //background: red;
`;