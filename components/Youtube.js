import React, { useState } from "react";
import styled from "styled-components";
import FlappyBird from "./FlappyBird";

const Youtube = () => {
  const [inputValue, setInputValue] = useState("");

  const [show, setShow] = useState(false)

  const [wait, setWait] = useState(false)

  const displayGame = () => {
    setWait(true);
    setShow(false);
    setTimeout(() => {
      setShow(true);
      setWait(false)
    }, 5000);
  };


  return (
    <Container>
      <Wrapper>
        <Wrap>
          <Logo src="../assets/red-manette.png" />
          <Title>What game do you want to generate?</Title>
        </Wrap>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button onClick={displayGame}>Validate</Button>
      </Wrapper>
      <SecWrapper>
        {show == true && <FlappyBird />}
        {wait == true &&
          <WaitWrapper>Building your game</WaitWrapper>
        }
      </SecWrapper>
    </Container>
  );
};


export default Youtube;

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WaitWrapper = styled.div`
  height: 100%; 
  width: 100%; 
  background: #434343;
  display: flex; 
  justify-content: center; 
  align-items: center;
  font-size: 30px; 
  color: #FFFFFF;
`;

const SecWrapper = styled.div`
  background: #FFFFFF;
  height: 700px; 
  width: 1000px;
  position: absolute; 
  z-index: 3;
  top: 30px; 
  right: 40px;
  border-radius: 30px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  overflow: hidden; 
  border: solid: 5px #FFFFFF;
`;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  height: 23px;
  width: auto;
`;

const Title = styled.text`
  font-size: 15px;
  font-weight: 300;
  margin-left: 10px;
  color: #7e7e7e;
`;

const Input = styled.input`
  margin-top: 20px;
  width: 80%;
  height: 35px;
  border-radius: 5px;
  decoration: none;
  border: none;
  padding: 5px;
  font-size: 15px;
`;

const Button = styled.div`
  height: 40px;
  width: 120px;
  border-radius: 5px;
  background: #797979;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    color: #1f1f1f;
  }
`;