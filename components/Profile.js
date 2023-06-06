import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'


const Profile = ({session}) => {

 

  return (
      <Wrapper>
        <Photo src="../assets/man1.jpg"/>
        <Name>Mister Quoicoubakah</Name>
      </Wrapper>
  )
}

export default Profile

const Container = styled.div`
  position: fixed; 
  height: 100vh; 
  width: 82%;
  top: 0;
  right:0;
  z-index:5;
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: rgba( 29, 29, 29, 0.25 );
  backdrop-filter: blur( 12px );
-webkit-backdrop-filter: blur( 12px );

`;

const Wrapper = styled.div`
  height: 200px; 
  width: 400px;
  background: #1D1D1D; 
  border-radius: 10px;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  margin-top: 20px;
`;

const Photo = styled.img`
  height: 90px; 
  width: auto; 
  border-radius: 200px;
  margin-top: 20px;
`;

const Name = styled.text`
  font-size: 20px;
  font-weight: 200;
  margin-top: 20px;
`;