import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { useLocalStorage } from '../../components/useLocalStorage'
import EditorBox from '../../components/EditorBox'
//import { useScreenshot } from 'use-react-screenshot';
//import html2canvas from 'html2canvas';

const MuseEditorPage = () => {

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

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



  
  return (
    <Layout>
      <Button>Deploy</Button>
      
      <Container>
      <TopWrapper>
        <ScreenWrap>
          <Cadre>
          <iframe
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
      <BottomWrapper>
      <EditorBox 
           language="xml"
           editorTitle="HTML"
           value={html}
           onChange={setHtml}
      />
      <EditorBox 
        language="css"
        editorTitle="CSS"
        value={css}
        onChange={setCss}
      />
      <EditorBox 
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