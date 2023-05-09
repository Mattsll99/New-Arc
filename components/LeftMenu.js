import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Youtube from "./Youtube";

const LeftMenu = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Youtube />
      </Wrapper>
    </Container>
  );
};

export default LeftMenu;

const Container = styled.div`
  width: 28%;
  height: 100vh;
  background: transparent;
  padding-top: 30px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  background: transparent;
  margin-top: 150px;
`;
