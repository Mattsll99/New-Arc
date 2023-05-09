import React from "react";
import styled from "styled-components";
import FlappyBird from "./FlappyBird";

const BigBox = ({bool}) => {
  bool = false

  return <Container>
   {bool == true && <FlappyBird />}
  </Container>;
};

export default BigBox;

const Container = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 70%;
  height: 100vh;
  background: #ffffff;
  border-radius: 15px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  overflow: hidden;
`;
