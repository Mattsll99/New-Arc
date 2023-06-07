import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Darkmode from './Darkmode'
import Logo from './Logo'
import Menu from './Menu'
import DeployButton from './DeployButton'
//import { Auth } from '@supabase/auth-ui-react'
//import { ThemeSupa } from '@supabase/auth-ui-shared'
//import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const Layout = ({children}) => {

  //const session = useSession()
  //const supabase = useSupabaseClient()

  const [darkModeOn, setDarkModeOn] = useState(true)
  const [backgroundColor, setBackgroundColor] = useState('#1d1d1d')

  const handleDarkMode = () => {
    setDarkModeOn(true)
    //setBackgroundColor("#1d1d1d")
    localStorage.setItem("darkMode", "true");
  }

  const handleLightMode = () => {
    setDarkModeOn(false)
    //setBackgroundColor("#FEFDE7")
    localStorage.setItem("darkMode", "false");
  }

  //useEffect(() => {
    //document.documentElement.style.setProperty('--bg-color', backgroundColor);
  //}, [backgroundColor]);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkModeOn(true);
      setBackgroundColor("#1d1d1d");
    } else {
      setDarkModeOn(false);
      setBackgroundColor("#FEFDE7");
    }
  }, []);



  return (
    <Container darkModeOn={darkModeOn}>
      <LeftMenu>
        <Logo />
        <Menu />

        <DarkContainer>
      <DarkLeft darkModeOn={darkModeOn} onClick={handleDarkMode}>
        <Image src="../assets/lune-jaune.png"/>
      </DarkLeft>
      <DarkRight darkModeOn={darkModeOn} onClick={handleLightMode}>
      <Image src="../assets/soleil-jaune.png"/>
      </DarkRight>
    </DarkContainer>

        
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
  //background: ${props => (props.darkModeOn ? '#1D1D1D' : '#FEFDE7')};
  background: ${props => (props.darkModeOn ? '#1D1D1D' : '#FEFDE7')};
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

const DarkContainer = styled.div`
  height: 40px; 
  width: 95%; 
  background: transparent;
  border: solid 1px #4A4A4A;
  position: absolute; 
  bottom: 10px;
  border-radius: 5px;
  padding: 3px;
  display: flex; 
  flex-direction: row;
`;

const DarkLeft = styled.div`
  height: 100%; 
  width: 50%;
  border-radius: 5px;
  background: ${props => (props.darkModeOn ? '#4a4a4a' : 'transparent')};
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;

const DarkRight = styled(DarkLeft)`
  background: ${props => (props.darkModeOn ? 'transparent' : '#4a4a4a')};
`;

const Image = styled.img`
  height: 20px; 
  width: 20px; 
  background: transparent;
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