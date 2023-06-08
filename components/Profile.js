import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
//import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'


const Profile = () => {

  return (
      <Container>
        <Wrapper>
          <ProfilePicture src="../assets/white-profile.png"/>
          <PlanCover>Free</PlanCover>
          <Button>Upgrade to Pro</Button>
        </Wrapper>
      </Container>
  )
}

export default Profile

const Container = styled.div`
  height: 100px;
  width: 95%;
  border-radius: 7px;
  background: #4A4A4A;
  position: absolute;
  bottom: 60px;
  padding: 5px;
`;

const Wrapper = styled.div`
  position: relative; 
  height: 100%; 
  width: 100%;
  background: transparent;
`;

const PlanCover = styled.div`
  position: absolute; 
  top: 0; 
  right: 0; 
  border-radius: 5px;
  padding: 4px;
  height: 30px;
  width: 70px;
  background: #448FFF;
  font-size: 14px;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const ProfilePicture = styled.img`
  height: 40px; 
  width: 40px; 
  border-radius: 80px;
  position: absolute; 
  top: 0; 
  left: 0;
  cursor: pointer;
`;

const Button = styled.div`
  height: 40px; 
  width: 100%; 
  background: transparent;
  position: absolute; 
  bottom: 0;
  border-radius: 5px;
  border: solid 1px #6B6B6B;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 14px;
  color: #ffffff;
  font-weight: 300;
  cursor: pointer;
`;