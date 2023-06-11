import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
//import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'


const Profile = () => {

  const supabase = createClient(
    'https://pkfnxbrdgdesmjgqltcv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrZm54YnJkZ2Rlc21qZ3FsdGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMTIwOTksImV4cCI6MjAwMTg4ODA5OX0.eS0tpxoOHxwXI_BnzMNVMlD4AAFIU6AGesCbwuYzKTM'
  )

  const [connected, setConnected] = useState(false)

  supabase.auth.onAuthStateChange(async (event) => {
    if (event ==="SIGNED_OUT") {
      setConnected(false)
    }
    else {
      setConnected(true)
    }
  })

  //useEffect(() => {
    //setUser(supabaseUser);
  //}, [supabaseUser]);

  //const connected = user !== null;

  
  //const [connected, setConnected] = useState(false); // State to track user connection status

  return (
      <Container>
        <Wrapper>
          <Pin connected={connected}></Pin>
          <Status>{connected ? 'Connected' : 'Not Connected'}</Status>
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
  //position: relative;
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

const Status = styled.text`
  margin-left: 20px;
  font-size: 14px;
`;

const Pin = styled.div`
  height: 9px; 
  width: 9px; 
  border-radius: 18px;
  position: absolute; 
  top: 5px; 
  left: 5px; 
  background: ${(props) => (props.connected ? '#40bb14' : '#ff5959')};
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