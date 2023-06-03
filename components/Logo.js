import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <Text>
        <Text style={{ color: "#7E7E7E" }}>Muse</Text>Art
      </Text>
    </Wrapper>
  );
};

export default Logo;


const Wrapper = styled.div`
  margin-left: 10px;
  background: red;
  width: 100px;
  border-radius: 3px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: #1D1D1D;
`;

const Text = styled.text`
  font-size: 22px;
  //font-family: poppins;
  font-weight: 400;
  
`;
