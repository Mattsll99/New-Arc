import React, { useState } from 'react'
import styled from 'styled-components'
import { getRepositoryOrganization } from '@/pages/api/Trees'
import axios from 'axios';
import Schema from './Schema';
import ChatBox from './ChatBox';
import CodeDisplay from './CodeDisplay';
import { BarLoader } from 'react-spinners';
import { useAuth } from "@clerk/nextjs";
import Signup from './Signup';
import Signin from './Signin';
//import Signup  from "./Signup"

const RepoChat = () => {
  
  const [repoUrl, setRepoUrl] = useState('');
  const [organization, setOrganization] = useState(null);
  const [schema, setSchema] = useState('')
  const [delay, setDelay ] = useState(false)
  const [firstCompletion, setFirstCompletion] = useState(false)
  const [secondCompletion, setSecondCompletion] = useState(false)
  const [wrapInputText, setWrapInputText] = useState('')
  const [url, setUrl] = useState(false)
  const [signup, setSignup] = useState(false)
  const [signin, setSignin] = useState(false)

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const loadedCheck = () => {
    if (!isLoaded || !userId) {
      setSignup(true)
    }
  }

  

  const fetchOrganization = async () => {
    try {
      const response = await axios.post('http://localhost:8000/get_organization', { url: repoUrl });
      setOrganization(response.data.organization);
      console.log(organization)
    } catch (error) {
      console.error('Error fetching organization:', error);
      setOrganization(null);
    }
  };

  const fetchStructure = async () => {
    try {
      const response = await axios.post('http://localhost:8000/get_organization', {url: repoUrl}); 
    } catch (error) {
      console.error("Error fetching the repo structure", error);
    }
  }

  //async function handleStructure() {
    //const structure = fetchStructure()
    //console.log(structure)
  //}

  //const handleRepo = () => {
    //getRepositoryOrganization(repoUrl)
  //}

  const handleRepoBis = async () => {
    const fromUrlToRepo = await fetchOrganization()
    console.log(fromUrlToRepo)
    setOrganization(fromUrlToRepo)
    //const organizedFiles = organizeFiles(fromUrlToRepo)
    //console.log(fromUrlToRepo)
  }

  const handleRepo = async () => {
    fetchOrganization(); 
    //const organized = organizeFiles(organization);
    //console.log(organized)
    //setSchema(organized)
    console.log(organization)
  }

  function organizeFiles(fileList) {
  const organization = {};

  if (!Array.isArray(fileList)) {
    return organization;
  }

  fileList.forEach((item) => {
    const pathParts = item.split('/');

    let currentFolder = organization;

    pathParts.forEach((part) => {
      if (!currentFolder.hasOwnProperty(part)) {
        currentFolder[part] = {};
      }
      currentFolder = currentFolder[part];
    });
  });

  setSchema(organization)
  console.log(organization)
  return organization;
}



const handleStructure = () => {
  // Add code here to clear the text inside WrapInput
  setWrapInputText('');
};

const handlePromptSystem = () => {
  handleStructure()
  if (firstCompletion === false) {
    setFirstCompletion(true)
  } else setSecondCompletion(true)
}

const handleUrl = () => {
  setUrl(true)
}



  return (
    <Container>
      {signup === true &&
        <Signup />
      }
      <Left>
        <Top>
          {url === false &&
            <InputCover onClick={loadedCheck}>
          <Input placeholder='Paste the URL to a repository' type="text" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)}/>
          <Button onClick={fetchOrganization}>Validate</Button>
          </InputCover>
          }
          {url === true &&
            <Text>Uniswap / v2-core</Text> //Get the repository name
          }
        </Top>
        <BodyCover>
        </BodyCover>
        <BottomWrapper>
        <BottomCover>
          <LoadingWrapper>
        <BarLoader
          color={'#448FFF'} 
          loading={false} 
          width={200}
          height={4}
        />
        </LoadingWrapper>
          <Wrap onClick={loadedCheck}>
            <WrapInput placeholder='Enter your prompt' value={wrapInputText} onChange={(e) => setWrapInputText(e.target.value)}/>
            <Ask onClick={handlePromptSystem}>Ask</Ask>
          </Wrap>
        </BottomCover>
        </BottomWrapper>
      </Left>
      <Right>
        <Schema />
      </Right>
    </Container>
  )
}

export default RepoChat

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  display: flex; 
  flex-direction: row;
  padding-top: 60px;
`;

const Left = styled.div`
  height: 100%; 
  width: 77%;
  border-right: solid 1px #989898;
  position: relative;
  overflow: scroll;
  /* Hide the scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
`;


const Right = styled.div`
  height: 100%; 
  width: 23%; 
  background: #1E1E1E;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  padding: 10px;
  overflow: scroll;
`;

const Text = styled.text`
  font-size: 16px; 
  font-weight: 200;
`;

const LoadingWrapper = styled.div`
  position: fixed; 
  top: 0;
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  z-index: 3;
  height: 50px; 
  width: 600px;
  background: transparent;
`;

const Top = styled.div`
  height: 50px; 
  width: 100%; 
  border-bottom: solid 1px #989898;
  display: flex; 
  align-items: center; 
  justify-content: center;
  padding: 5px;
`;

const BodyCover = styled.div`
  height: 100%; 
  width: 100%; 
  //background: red;
`;

const InputCover = styled.div`
  height: 100%; 
  width: 450px; 
  background: #646464;
  border-radius: 100px;
  position: relative;
  padding: 3px;
  display: flex; 
  align-items: center;
  padding-left: 10px;
  //background: red;
  //position: fixed;
`; 

const Input = styled.input`
  width: 70%;
  background: transparent;
  border: none;
  //font-weight: 100; 
  font-size: 16px;
  font-weight: 100;
  resize: none;
  outline: none;
`;

const BottomWrapper = styled.div`
  background: transparent;
  height: 100px; 
  width: 100%;
  position: fixed; 
  bottom: 0;
  width: 70%;
`;

const BottomCover = styled.div`
  position: absolute;
  bottom: 20px; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  height: 50px;
  width: 70%;
  border: solid 1px #989898;
  border-radius: 100px;
  background: #2E2E2E;
  //position: absolute;
  //bottom: 50px;
`;

const Wrap = styled.div`
  height: 100%; 
  width: 100%;
  position: relative;
  display: flex; 
  align-items: center;
  padding: 20px;
`;


const WrapInput = styled.input`
  width: 80%;
  background: transparent;
  border: none;
  //font-weight: 100; 
  font-size: 16px;
  font-weight: 100;
  resize: none;
  outline: none;
`;

const Ask  = styled.div`
  position: absolute; 
  right: 4px;
  height: 85%; 
  border-radius: 100px;
  width: 100px;
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  background: #448FFF;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 16px; 
  font-weight: 300; 
  color: #FFFFFF;
  cursor: pointer;
`; 

const Button = styled.div`
  position: absolute; 
  right: 3px; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  height: 90%; 
  border-radius: 100px;
  width: 120px;
  background: #448FFF;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 16px; 
  color: #FFFFFF; 
  font-weight: 300;
  cursor: pointer;
`;

//{organization ? (
  //<div>
    //<h2>Organization Structure:</h2>
    //<ul>
      //{organization.map((item, index) => (
        //<li key={index}>{item}</li>
      //))}
    //</ul>
  //</div>
//) : (
  //<p>No organization structure fetched yet.</p>
//)}


