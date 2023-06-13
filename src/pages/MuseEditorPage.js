import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { useLocalStorage } from '../../components/useLocalStorage'
import EditorBox from '../../components/EditorBox'
//import { useScreenshot } from 'use-react-screenshot';
import html2canvas from 'html2canvas';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
//import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'


const MuseEditorPage = () => {

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const ref = useRef();
  const [connected, setConnected] = useState(false)
  const [displayLogin, setDisplayLogin] = useState(false)
  const [codeInit, setCodeInit] = useState(false)
  const [session, setSession] = useState(null)

  //const supabase = createClient(
    //'https://pkfnxbrdgdesmjgqltcv.supabase.co',
    //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrZm54YnJkZ2Rlc21qZ3FsdGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMTIwOTksImV4cCI6MjAwMTg4ODA5OX0.eS0tpxoOHxwXI_BnzMNVMlD4AAFIU6AGesCbwuYzKTM',
  //)

  //function login() {
    //supabase.auth.onAuthStateChange(async (event) => {
      //if (event == 'SIGNED IN') {$
      //}
      //else {

      //}
    //})
  //}

  //supabase.auth.onAuthStateChange(async (event) => {
    //if (event ==="SIGNED_OUT") {
      //setDisplayLogin(true)
    //}
    //else {
      //setDisplayLogin(false)
    //}
  //})

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  
  
  

  const takeThumbnail = () => {
    html2canvas(ref.current).then((canvas) => {
      const dataURL = canvas.toDataURL();
      setThumbnail(dataURL);
    });
  };

  const initializeCode = () => {
    setCodeInit(true)
  }

  
  return (
    <Layout>
      
      <Button onClick={takeThumbnail}>Deploy</Button>
      <Container>
      <TopWrapper>
        <ScreenWrap>
          <Cadre>
          <iframe
          ref={ref}
          style={{borderRadius:'6px'}}
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
          allow-same-origin='true' />
          </Cadre>
        </ScreenWrap>
      </TopWrapper>
      <BottomWrapper onClick={initializeCode}>
      <EditorBox 
           onClick={initializeCode}
           language="xml"
           editorTitle="HTML"
           value={html}
           onChange={setHtml}
      />
      <EditorBox
        onClick={initializeCode}
        language="css"
        editorTitle="CSS"
        value={css}
        onChange={setCss}
      />
      <EditorBox 
        onClick={initializeCode}
         language="javascript"
         editorTitle="Javascript"
         value={js}
         onChange={setJs}

      />
      </BottomWrapper>
    </Container>
    </Layout>
  )
}

export default MuseEditorPage

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  background: #2E2E2E;
  border-radius: 10px;
  padding: 10px;
  display: flex; 
  flex-direction: column;
`;

const ThumbnailContainer = styled.div`
  height: 150px; 
  width: 235px;
  position: absolute; 
  bottom: 180px; 
  left: 10px;
`;

const ThumbnailWrapper = styled.div`
  height: 100%; 
  width: 100%; 
  position: relative;
`;

const ThumbnailCover = styled.div`
  height: 100%; 
  width: 100%; 
  position: absolute; 
  z-index: 2; 
  background: transparent;
`;

const TopWrapper = styled.div`
  height: 70%; 
  width: 100%; 
  background: transparent;
  border-bottom: solid 1px #4D4D4D
  //border-radius: 6px;
`;

const ScreenWrap = styled.div`
  height: 98%; 
  width: 100%; 
  background: #FFFFFF;
  border-radius: 6px;
`;

const BottomWrapper = styled.div`
  display: flex; 
  flex-direction: row;
  height: 30%;
  justify-content: space-between;
  padding-top: 10px;
`;

const Cadre = styled.div`
  height: 100%; 
  width: 100%;
  border-radius: 6px;
`;

const Button = styled.div`
  height: 35px; 
  width: 120px; 
  background: #448FFF;
  //position: absolute; 
  //left: 0; 
  //right: 0; 
  //margin-left: auto; 
  //margin-right: auto;
  //margin-top: 370px;
  border-radius: 100px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  position: fixed;
  margin-top: -100px;
  left: 64px;
`;

const Wrapper = styled.div`
  position: absolute; 
  bottom: 172px; 
  left: 10px; 
  background: #4A4A4A; 
  height: 200px;
  width: 235px;
  border-radius: 7px;
  padding: 5px;
`;

const Wrap = styled.div`
  height: 100%; 
  width: 100%; 
  position: relative;
  text-align: center;
`;

const ValButton = styled.div`
  position: absolute; 
  bottom: 0; 
  height: 40px; 
  width: 100%;
  background: #448FFF;
  border-radius: 5px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 13px;
  color: #FFFFFF;
`; 

const Title = styled.text`
  font-size: 11px;
  font-weight: 100;
  color: #7E7D7D;
  //border-bottom: solid 1px blue;
`;

const Icon = styled.img`
  height: 40px; 
  width: 40px; 
  position: absolute; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
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

//{displayLogin === true &&
  //<Cover>
  //<AuthLayer>
    //<Auth 
      //supabaseClient={supabase}
      //appearance={{theme: ThemeSupa}}
      //theme='dark'
      //providers={['github']}
    ///>
  //</AuthLayer>
//</Cover>
//}