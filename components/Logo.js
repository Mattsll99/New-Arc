import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Text>
      <Text style={{ color: "#7E7E7E" }}>Arc</Text>ad
    </Text>
  );
};

export default Logo;

const Text = styled.text`
  font-size: 25px;
  font-family: poppins;
  font-weight: 700;
`;
