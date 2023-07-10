import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import AIChat from './AIChat';


const Completion = () => {

  const [code, setCode] = useState('')
  const [ai, setAI] = useState(false)
  

//Find the corresponding HTML element

    const handleEditorDidMount = (editor) => {
    editor.onMouseDown((event) => {
      // Check if the target element is an HTML element
      if (event.target?.element?.tagName) {
        const textContent = event.target.element.innerText;
        console.log(textContent);
      }
    });
  };

  return (
    <Container>

      <Editor height="100%" width="100%" theme='vs-dark' language="python" defaultValue="// Welcome" value={code} onMount={handleEditorDidMount}/>
    </Container>
  )
}

export default Completion

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  background: #232323;
  //padding: 40px;
  font-size: 14px;
  font-weight: 300;
  display: flex; 
  position: relative;
`;

const Text = styled.text`
  font-size: 14px;
  font-weight: 300;
  color: #ffffff; 
`;

const Button = styled.div`
  height: 40px; 
  width: 100px; 
  position: absolute; 
  right: 30px; 
  bottom: -20px;
  border-radius: 100px;
  background: #448FFF;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 16px; 
  font-weight: 300;
  cursor: pointer;
`;