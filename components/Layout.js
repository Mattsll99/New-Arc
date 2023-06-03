import React from 'react'
import styled from 'styled-components'
import Darkmode from './Darkmode'
import Logo from './Logo'
import Menu from './Menu'
import DeployButton from './DeployButton'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const Layout = ({children}) => {

  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <Container>

      <LeftMenu>
        <Logo />
        <Menu />
        <Darkmode />
        <DeployButton />
      </LeftMenu>
      <RightMenu>
        {children}
      </RightMenu>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  width: 100vw; 
  height: 100vh;
  display: flex; 
  flex-direction: row;
`;



const LeftMenu = styled.div`
  height: 100%; 
  width: 250px;
  background: transparent;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex; 
  flex-direction: column;
  position: relative;
  //background: #FFFFFF;
  //align-items: center;
`;

const RightMenu = styled.div`
  height: 100%; 
  width: 83%;
  background: transparent;
  display: flex; 
  flex-direction: column;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
`;

const AuthLayer = styled.div`
  height: auto; 
  padding: 10px;
  border-radius: 10px;
  width: 400px; 
  //position: absolute; 
  background: #1E1E1E;
  //z-index: 4;
`;

const Cover = styled.div`
  height: 100vh; 
  width: 100vw; 
  position: absolute; 
  z-index: 4; 
  display: flex; 
  justify-content: center; 
  align-items: center;
  background: rgba( 255, 255, 255, 0.25 );
  //box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 16.5px );
  -webkit-backdrop-filter: blur( 16.5px );
  //border-radius: 10px;
  //border: 1px solid rgba( 255, 255, 255, 0.18 );
`;


//{!session ? (
  //<Cover>
  //<AuthLayer>
    //<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
  //</AuthLayer>
  //</Cover>
//) : (
  //<p>Account page will go here.</p>
//)}