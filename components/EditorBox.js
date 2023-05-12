import React, { useState } from 'react'
import styled from 'styled-components'
import "codemirror/lib/codemirror.css";
import {Controlled as ControlledEditor} from 'react-codemirror2-react-17'
import 'codemirror/theme/material.css'
//https://dev.to/ayseboogie/building-a-code-editor-within-nextjs-3nnc

let languageLoaded = false; 
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  require("codemirror/mode/xml/xml"); 
  require("codemirror/mode/css/css"); 
  require("codemirror/mode/javascript/javascript"); 
  languageLoaded = true;
}

const EditorBox = (props) => {

  const {language, editorTitle, value, onChange} = props;

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <Container>
      <Top>
        <Title>{editorTitle}</Title>
      </Top>
      <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true, 
          lint: true, 
          mode: language, 
          theme:"material",
          lineNumbers: true,
        }}
      />
    </Container>
  )
}

export default EditorBox

const Container = styled.div`
  height: 100%;
  width: 31%;
  background: #101010
  overflow: hidden;
  
`;

const Top = styled.div`
  height: 60px; 
  width: 100%; 
  background: #373B41;
  display: flex; 
  align-items: center;
`;

const Title = styled.text`
  font-size: 18px;
  margin-left: 20px;
  font-weight: 300;
`;