import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { useLocalStorage } from '../../components/useLocalStorage'
import EditorBox from '../../components/EditorBox'
import { useScreenshot } from 'use-react-screenshot';

const MuseEditorPage = () => {

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");


  const cadreRef = useRef(null);
  const [image, takeScreenshot] = useScreenshot();

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

  const handleScreenshot = () => {
    takeScreenshot(cadreRef.current);
  };


  
  return (
    <Layout>
      <Button onClick={handleScreenshot}>Screenshot</Button>
      {image && <Screenshot src={image} alt="screenshot" />}
      <Container>
      <TopWrapper>
        <ScreenWrap>
          <Cadre ref={cadreRef}>
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
  height: 40px; 
  width: 130px; 
  background: red; 
  border-radius: 100px; 
  position: fixed; 
  top: 100px; 
  left: 100px;
  cursor: pointer;
`;

const Screenshot = styled.img`
  position: fixed; 
  left: 10px;
  bottom: 150px;
  width: 240px;
  height: auto; 
  border-radius: 10px;
`;