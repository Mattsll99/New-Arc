import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import EditorBox from './EditorBox'
import { useLocalStorage } from './useLocalStorage'


const EditorApp = () => {

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html lang="en">
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 200);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container>
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
         editorTitle="JS"
         value={js}
         onChange={setJs}
      />
      <BottomWrap>
      </BottomWrap>
    </Container>
  )
}

export default EditorApp

const Container = styled.div`
  width: 100%; 
  height: 50%;
  background: #1F1F1F;
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
  padding-left: 20px; 
  padding-right: 20px;
  padding-top: 20px; 
  padding-bottom: 20px;
`;

const BottomWrap = styled.div``;