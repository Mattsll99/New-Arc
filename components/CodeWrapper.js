import React, { useState } from 'react'
import styled from 'styled-components'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { HuggingFaceInference } from "langchain/llms/hf";

const CodeWrapper = ({prompt, bool}) => {

  const [code, setCode] = useState('')
  //const [prompt, setPrompt] = useState('')

  async function makeRequest() {
    const model = new HuggingFaceInference({
      model: "bigcode/starcoderplus",
      maxTokens: 256,
      apiKey: "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", // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
    });
  //const template = "<|system|>\n<|end|>\n<|user|>\n{query}<|end|>\n<|assistant|>"
  //const formattedPrompt = template.replace("{query}", prompt);
  const res = await model.call(prompt);
  setCode(res);
  console.log({ res });
  }

  if (bool === true) {
    makeRequest();
    bool = false;
  }

  return (
    <Container>
      <Editor height="90%" theme='vs-dark' language="python" defaultValue="// Welcome" value={code}/>
      <Button>Run</Button>
    </Container>
  )
}

export default CodeWrapper

const Container = styled.div`
  width: 100%; 
  height: 500px;
  background: #1D1D1D;
  border-radius: 20px;
  position: relative;
  //overflow: hidden;
`;

const Button = styled.div`
  position: absolute; 
  bottom: -20px;
  right: 10px;
  background: #448FFF;
  height: 30px; 
  width: 70px; 
  border-radius: 100px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-weight: 300;
  cursor: pointer;
`;