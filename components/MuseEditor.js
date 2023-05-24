import React, { useState } from 'react'
import styled from 'styled-components'
import EditorBox from './EditorBox'
import { useLocalStorage } from './useLocalStorage'

const MuseEditor = () => {

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  return (
    <Container>
      <TopWrapper>
        <ScreenWrap></ScreenWrap>
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
         editorTitle="JS"
         value={js}
         onChange={setJs}

      />
      </BottomWrapper>
    </Container>
  )
}

export default MuseEditor

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