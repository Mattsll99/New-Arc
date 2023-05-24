import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EditorBox from './EditorBox'
import { useLocalStorage } from './useLocalStorage'

const MuseEditor = () => {

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  //useEffect(() => {
    //const timeout = setTimeout(() => {
      //setSrcDoc(`
        //<html>
          //<body>${html}</body>
          //<style>${css}</style>
          //<script>${js}</script>
        //</html>
      //`)
    //}, 250)

    //return () => clearTimeout(timeout)
  //}, [html, css, js])


  return (
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

const Cadre = styled.div`
  height: 100%; 
  width: 100%;
  border-radius: 6px;
`;