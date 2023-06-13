import React, { useState } from 'react'
import styled from 'styled-components'
import "codemirror/lib/codemirror.css";
import {Controlled as ControlledEditor} from 'react-codemirror2-react-17'
import 'codemirror/theme/material.css'
//https://dev.to/ayseboogie/building-a-code-editor-within-nextjs-3nnc
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
//import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import Authform from './Authform';
//import { checkSession } from '@/pages/api/SessionUtils';

let languageLoaded = false; 
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  require("codemirror/mode/xml/xml"); 
  require("codemirror/mode/css/css"); 
  require("codemirror/mode/javascript/javascript"); 
  languageLoaded = true;
}


const EditorBox = (props) => {

  

  //const supabase = createClient(
    //'https://pkfnxbrdgdesmjgqltcv.supabase.co',
    //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrZm54YnJkZ2Rlc21qZ3FsdGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMTIwOTksImV4cCI6MjAwMTg4ODA5OX0.eS0tpxoOHxwXI_BnzMNVMlD4AAFIU6AGesCbwuYzKTM',
  //)

//const [connected, setConnected] = useState(false)
//const [displayLogin, setDisplayLogin] = useState(true)
const [codeInit, setCodeInit] = useState(false)
const [isLogged, setIsLogged] = useState(null)
//const [session, setSession] = useState(null)



//supabase.auth.onAuthStateChange(async (event, newSession) => {
  //if (event === "SIGNED_OUT") {
    //setDisplayLogin(true);
    //setSession(null);
  //} else {
    //setDisplayLogin(false);
    //setSession(newSession);
  //}
//});

  //const [isLogged, setIsLogged] = useState(null)

  const {language, editorTitle, value, onChange} = props;

  const handleLog = () => {
    if (supabase.auth.user() !== null) {
      setIsLogged(supabase.auth.user());
    }
  }

  function handleChange(editor, data, value) {
    onChange(value)
  }

  const initializeCode = () => {
    setCodeInit(true)
  }

  //const user = Auth.useUser();
  //console.log(user.session)
  //console.log(supabase.auth.session.id)

  //console.log(supabase.auth.user)


  //const text = session.user
  //console.log(text)

  //async function checkSession() {
    //const { data, error } = await supabase.auth.session();
    //if (error) {
      //console.error('Error fetching session:', error);
      //return;
    //}
  
    //if (data && data.user) {
      //setIsLogged(true);
    //} else {
      //setIsLogged(false);
    //}
  //}

  return (
    
      
    <Container>
      <Top onClick={initializeCode}>
        <Cover>
        <Title>{editorTitle}</Title>
        </Cover>
      </Top>
      <ControlledEditor 
        onClick={initializeCode}
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true, 
          lint: true, 
          mode: language, 
          theme:"material",
          lineNumbers: true,
          indentWithTabs: false, // Set to true if you want to use tabs for indentation
          indentUnit: 2, // Number of spaces for each indentation level
        }}
      />
    </Container>
    
  )
}

export default EditorBox

const Container = styled.div`
  height: 100%;
  width: 32%;
  background: #101010
  overflow: hidden;
  border: solid 1px #4D4D4D;
  border-radius: 5px;
  overflow: scroll;
  position: relative;
`;

const CodeCover = styled.div`
  height: 100%; 
  width: 100%;
  background: red;
  background: transparent;
`; 

const Wrapper = styled.div``;

const Top = styled.div`
  height: 50px; 
  width: 100%; 
  background: transparent;
  display: flex; 
  align-items: center;
  border-bottom: solid 1px #4D4D4D;
  //position: absolute; 
  //top: 0;
  //z-index: 4;
  //padding-left: 5px;
`;

const Title = styled.text`
  font-size: 18px;
  //margin-left: 20px;
  font-weight: 300;
`;

const Cover = styled.div`
  margin-left: 10px;
  height: 80%; 
  display: flex;
  //width: fit-content;
  width: auto;
  padding-left: 10px; 
  padding-right: 10px;
  align-items: center; 
  justify-content: center;
  //padding-left: 5px;
  //padding-right: 5px;
  border-radius: 100px;
  background: #448FFF;
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

const CoverCode = styled.div`
  height: 100vh; 
  width: 100vw; 
  position: fixed; 
  letf:0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
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

//{displayLogin === true && codeInit === true && session === null && (
  //<CoverCode>
  //<AuthLayer>
    //<Auth 
      //supabaseClient={supabase}
      //appearance={{theme: ThemeSupa}}
      //theme='dark'
      //providers={['github']}
    ///>
  //</AuthLayer>
//</CoverCode>)
//}