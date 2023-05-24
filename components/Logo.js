import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Text>
      <Text style={{ color: "#7E7E7E" }}>Muse</Text>Art
    </Text>
  );
};

export default Logo;

const Text = styled.text`
  font-size: 22px;
  //font-family: poppins;
  font-weight: 400;
  margin-left: 10px;
`;
