import React, { useState } from 'react'
import styled from 'styled-components'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import axios from 'axios';
import Signup from '../../components/Signup';
import Signin from '../../components/Signin';
import { MendableSearchBar } from "@mendable/search"
import { useAuth } from "@clerk/nextjs";


const AdeniPage = () => {

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const [repoUrl, setRepoUrl] = useState("")
  const [code, setCode] = useState('')
  //const [userId, setUserId] = useState("")
  const [snippet, setSnippet] = useState("")
  const [test, setTest] = useState("")
  const [auth, setAuth] = useState(false)
  const [instance, setInstance] = useState(false)

  let content;

  const handleEditorDidMount = (editor) => {
    editor.onMouseDown((event) => {
      // Check if the target element is an HTML element
      if (event.target?.element?.tagName) {
        const textContent = event.target.element.innerText;
        content = textContent
        //console.log(textContent)
        setSnippet(textContent);
        setTest("Testing")
        setCode(editor.innerText);
      }
    });
  };

  const getContentContext = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get_content_context', {
        params: {
          document: code,
          snippet: snippet
        }
      });
      const lines = response.data.lines;
      // Do something with the lines of code
      console.log(lines);
    } catch (error) {
      console.error('Error getting content context:', error);
    }
  };

  const handleContext = () => {
    getContentContext();
  }

  const getScriptFunctions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get_script_function', {
        params: {
          document: code
        }
      });
      const result = response.data
      console.log(result)
    } catch (error) {
      console.error('Error getting the script function: ', error)
    }
  }

  const handleScriptFunction = () => {
    getScriptFunctions()
    console.log(code)
  }

  console.log(code)

  //I. Function to store a repository: 
    //1. check if the user has an id
      //If not creates a new user_instance
    //2. Store the repository

  //II. Function to get the repository organization 

  //III. Function to retrieve the piece of code with the name and the state

  //IV. Function to get the code context

  //V. Function to create a chat instance 

  // Function to store a repository
  const storeRepository = async () => {
    // Check if the user has an ID
    if (!userId) {
      await createUserInstance();
    }

    // Send a POST request to the API endpoint
    try {
      await axios.post('http://localhost:8000/store_repository', {
        url: repoUrl,
        owner_id: userId
      });
      console.log('Repository stored successfully');
    } catch (error) {
      console.error('Error storing repository:', error);
    }
  };

  // Function to create a new user instance
  const createUserInstance = async () => {
    try {
      await axios.post('http://localhost:8000/create_user_instance');
      console.log('User instance created successfully');
    } catch (error) {
      console.error('Error creating user instance:', error);
    }
  };

  //Besoin d'une session clerk
    //Accéder au mail de l'utilisateur
    //Mail puis accès à son instance d'utilisateur mail => id => ...
    const style = { darkMode: true, accentColor: "#448FFF", language: "en"}

  const handleInstance = () => {
    setInstance(true)
  }

  console.log(userId)
  
  return (
    <Container>
      {
        instance === true && userId === null &&
        <Signup />
      }
      <LeftSection>
        <TopLeft>Adeni</TopLeft>
        <BottomLeft>
          <BottomWrapper>
            <Plan>Pro</Plan>
            <Remain><Big>1/3</Big>URL</Remain>
          </BottomWrapper>
        </BottomLeft>
      </LeftSection>
      <CenterSection>
        <TopCenter>
          <InputCover>
            <Input  placeholder="Repository URL:" onChange={(e) => setRepoUrl(e.target.value)} onClick={handleInstance}/>
            <InputButton src="../assets/blue-arrow.png" onClick={handleScriptFunction}/>
          </InputCover>
        </TopCenter>
      </CenterSection>
      <RightSection>
        <TopRight>
          <Editor  color="blue" height="100%" theme='vs-dark' language="python" defaultValue="// Welcome" value={code} onMount={handleEditorDidMount} onChange={(e) => setCode(e.target.value)}/>
        </TopRight>
          <WrapperAI>
          <MendableSearchBar style={style}/>
          </WrapperAI>
      </RightSection>
    </Container>
  )
}

export default AdeniPage

const Container  = styled.div`
  height: 100vh; 
  width: 100vw; 
  display: flex; 
  flex-direction: row;
`;

const WrapperAI = styled.div`
  position: absolute; 
  bottom: 10px; 
  right: 10px;
  z-index: 7;
  padding: 5px; 
  border-radius: 15px; 
  background: #ffffff;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const LeftSection = styled.div`
  height: 100%; 
  width: 180px; 
  //background: red;
  border-right: solid 1px #989898;
  display: flex; 
  flex-direction: column;
  position: relative;
`; 

const TopLeft = styled.div`
  width: 100%; 
  height: 60px; 
  background: #1E1E1E; 
  border-bottom: solid 1px #989898;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
  font-weight: 300;
`; 

const BottomLeft = styled.div`
  position: absolute; 
  bottom: 10px; 
  height: 70px; 
  width: 90%;
  background: #4A4A4A;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  border-radius: 7px;
  //border: solid 1px #989898;
`;

const BottomWrapper = styled.div`
  height: 100%; 
  width: 100%; 
  position: relative; 
  padding: 8px;
`; 

const Plan = styled.div`
  position: absolute; 
  top: 8px; 
  right: 8px;
  padding: 5px; 
  display: inline-block; 
  background: #448FFF;
  font-size: 12px;
  font-weight: 300;
  border-radius: 4px;
  cursor: pointer;
`;

const Remain = styled.text`
  color: #ffffff;
  position: absolute; 
  bottom: 0;
  font-size: 12px;
`;

const Big = styled.text`
  font-size: 30px;
  margin-right: 5px;
`;


const CenterSection  = styled.div`
  height: 100%; 
  width: 250px; 
  //background: blue;
  border-right: solid 1px #989898;
`; 

const TopCenter = styled.div`
  widht: 100%; 
  height: 60px; 
  border-bottom: solid 1px #989898;
  padding: 10px;
`;

const InputCover = styled.div`
  height: 100%; 
  width: 100%; 
  //background: red;
  border-radius: 4px;
  //border: solid 1px #989898;
  padding: 4px;
  display: flex;
  flex-direction: row;
  background: #4A4A4A;
  position: relative; 
  align-items: center;
`;

const Input = styled.input`
  height: 90%; 
  width: 80%;
  border: none;
  background: none;
  outline: none;
  margin-left: 5px;
`;

const InputButton = styled.img`
  height: 28px; 
  width: 28px; 
  position: absolute; 
  right: 7px; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  background: #448FFF; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: #ffffff;
  border-radius: 3px;
  cursor: pointer;
`;


const RightSection = styled.div`
  height: 100%;
  flex: 1;
  //background: green;
`;

const TopRight = styled.div`
  width: 100%; 
  height: 100%;
`;

const BottomRight = styled.div`
  width: 100%; 
  height: 30%;
  background: #121212;
  border-top: solid 1px #989898;
  padding: 10px;
`;

const Entry = styled.text`
  font-size: 14px; 
  font-weight: 300; 
  color: #ffffff;
`;

const Cover = styled.div`
  padding: 3px; 
  border-radius: 3px; 
  height: auto; 
  width: auto; 
  background: #448FFF; 
  display: inline-block; 
  align-items: center; 
  justify-content: center;
`; 

const Wrapper = styled.div``;

//<BottomRight>
  //        <Entry>Ask anything about <Cover>{snippet}</Cover> :</Entry>
    //      <Wrapper></Wrapper>
      //  </BottomRight>