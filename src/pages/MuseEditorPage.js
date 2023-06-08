import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { useLocalStorage } from '../../components/useLocalStorage'
import EditorBox from '../../components/EditorBox'
import { useScreenshot } from 'use-react-screenshot';
import html2canvas from 'html2canvas';

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

  const handleCaptureScreenshot = () => {
    html2canvas(document.querySelector('#capture')).then((canvas) => {
      // Convert the canvas to an image
      const screenshotDataUrl = canvas.toDataURL();
      
      // Create a link and download the image
      const link = document.createElement('a');
      link.href = screenshotDataUrl;
      link.download = 'screenshot.png';
      link.click();
    });
  };

  const deploy = () => {
    //1. Prendre le screenshot
    //2. Save le html, css, et js
    //3. Sauver screen et code 
  }

  
  return (
    <Layout>
      <Button>Deploy</Button>
      <Container>
      <TopWrapper>
        <ScreenWrap>
          <Cadre >
          <iframe
          id="capture"
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

const Screenshot = styled.img`
  position: fixed; 
  left: 10px;
  bottom: 150px;
  width: 240px;
  height: auto; 
  border-radius: 10px;
`;