import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../../components/Logo'
//import MonacoEditor from 'react-monaco-editor'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
//https://www.npmjs.com/package/@monaco-editor/react#editor-instance
import { HuggingFaceInference } from "langchain/llms/hf";
//https://huggingface.co/docs/api-inference/detailed_parameters
//https://huggingface.co/spaces/bigcode/bigcode-playground
//https://huggingface.co/spaces/HuggingFaceH4/starchat-playground


const HomePage = () => {

  async function makeRequest(init_prompt) {
    const model = new HuggingFaceInference({
      model: "HuggingFaceH4/starchat-beta",
      maxTokens: 500,
      apiKey: "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", // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
    });
  const res = await model.call(init_prompt);
  setCode(res);
  console.log({ res });
  }

  const handleArrowClick = () => {
    makeRequest(prompt);
  };
  
  const [darkModeOn, setDarkModeOn] = useState(false)
  const [code, setCode] = useState('')
  const [prompt, setPrompt] = useState('')

  //makeRequest('build a script that receive an url and scrape all the data from it')

  const handleDarkMode = () => {
    setDarkModeOn(true)
    //setBackgroundColor("#1d1d1d")
  }
  

  const handleLightMode = () => {
    setDarkModeOn(false)
    //setBackgroundColor("#FEFDE7")
  }

  //useEffect(() => {
    //async function fetchData() {
      //const model = new HuggingFaceInference({
        //model: "bigcode/starcoder",
        //apiKey: "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",
      //});
      //const res = await model.call('build a script that receive an url and scrape all the data from it');
      //setCode(res);
      //console.log({ res });
    //}

    //fetchData();
  //}, []); //


  return (
    <Container>
      <Menu>
        <Logo />
        <DarkContainer>
          <DarkLeft darkModeOn={darkModeOn} onClick={handleDarkMode}>
            <Image src="../assets/lune-jaune.png"/>
          </DarkLeft>
          <DarkRight darkModeOn={darkModeOn} onClick={handleLightMode}>
            <Image src="../assets/soleil-jaune.png"/>
          </DarkRight>
        </DarkContainer>
      </Menu>
      <EditorBox>
        <Top>
          <InputCover placeholder="build a script" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
          <Arrow src="../assets/green-arrow.png" onClick={handleArrowClick}/>
        </Top>
        <Wrapper>
        <Editor  color="blue" height="100%" theme='vs-dark' language="python" defaultValue="// Welcome" value={code}/>
        </Wrapper>
      </EditorBox>
      <ConsoleBox darkModeOn={darkModeOn}>
        <Button>Run</Button>
      </ConsoleBox>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  height: 100vh; 
  width: 100vw;
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
  padding: 10px;
`;

const InputCover = styled.textarea`
  //height: 10px;
  width: 95%;
  height: auto;
  background: transparent;
  border: none;
  decoration: none;
  resize: none;
  display: flex; 
  align-items: center;
  //justify-content: center;
  font-size: 14px;
  color: #FFFFFF;
  border-width:0;
  text-decoration: none;
  border-style: none;
  border-color: Transparent;
  overflow: auto;
  outline: none;
  font-weight: 300;
  //background: red;
`;

const Menu = styled.div`
  height: 100%; 
  width: 15%; 
  background: transparent;
  position: relative;
`; 

const Arrow = styled.img`
  height: 15px; 
  width: 15px;
  position: absolute; 
  right: 10px; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  transform: rotate(-90deg);
  cursor: pointer;
`;

const EditorBox = styled.div`
  height: 100%; 
  width: 42%; 
  //background: green;
  border-radius: 10px;
  //background: #2D2D2D;
  display: flex; 
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
`; 

const ConsoleBox = styled(EditorBox)`
  background: ${props => (props.darkModeOn ? '#1D1D1D' : '#ffffff')};
  position: relative;
`;

const DarkContainer = styled.div`
  height: 35px; 
  width: 100%; 
  background: transparent;
  border: solid 1px #4A4A4A;
  position: absolute; 
  bottom: 0;
  border-radius: 5px;
  padding: 3px;
  display: flex; 
  flex-direction: row;
`;

const DarkLeft = styled.div`
  height: 100%; 
  width: 50%;
  border-radius: 5px;
  background: ${props => (props.darkModeOn ? '#4a4a4a' : 'transparent')};
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;

const DarkRight = styled(DarkLeft)`
  background: ${props => (props.darkModeOn ? 'transparent' : '#4a4a4a')};
`;

const Image = styled.img`
  height: 17px; 
  width: 17px; 
  background: transparent;
`;

const Button = styled.div`
  position: absolute; 
  top: 8px; 
  left: 8px; 
  height: 40px; 
  width : 60px;
  background: #039800; 
  border-radius: 5px;
  color: #FFFFFF;
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;

const Top = styled.div`
  width: 100%; 
  height: 9%;
  //border: solid 2px #4A4A4A;
  //background: red;
  border-radius: 10px;
  position: relative;
  display: flex; 
  align-items: center;
  padding: 10px;
  background: #1D1D1D;
`;

const Wrapper = styled.div`
  width: 100%; 
  height: 90%; 
  border-radius: 10px; 
  overflow: hidden;
`; 

