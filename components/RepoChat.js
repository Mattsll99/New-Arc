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
import DisplayOrgan from './DisplayOrgan';
import Completion from './Completion';
//import Organization from './RecursiveTree';
import RecursiveTree from './RecursiveTree';
import AIChat from './AIChat';

//import TreeOranization from './TreeOrganization';
//import TreeOrganization from './TreeOrganization';
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
  const [widen, setWiden] = useState(false)
  const [repoTree, setRepoTree] = useState(null)
  const [aiIsOn, setAiIsOn] = useState(false)

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const node = [{'value': 'LICENSE'}, {'value': 'test', 'nodes': [{'value': 'UniswapV2Factory.spec.ts'}, {'value': 'UniswapV2Pair.spec.ts'}, {'value': 'shared', 'nodes': [{'value': 'fixtures.ts'}, {'value': 'utilities.ts'}]}, {'value': 'UniswapV2ERC20.spec.ts'}]}, {'value': 'CITATION.cff'}, {'value': 'contracts', 'nodes': [{'value': 'UniswapV2Factory.sol'}, {'value': 'UniswapV2ERC20.sol'}, {'value': 'test', 'nodes': [{'value': 'ERC20.sol'}]}, {'value': 'libraries', 'nodes': [{'value': 'SafeMath.sol'}, {'value': 'UQ112x112.sol'}, {'value': 'Math.sol'}]}, {'value': 'UniswapV2Pair.sol'}, {'value': 'interfaces', 'nodes': [{'value': 'IERC20.sol'}, {'value': 'IUniswapV2ERC20.sol'}, {'value': 'IUniswapV2Factory.sol'}, {'value': 'IUniswapV2Pair.sol'}, {'value': 'IUniswapV2Callee.sol'}]}]}, {'value': 'README.md'}, {'value': 'yarn.lock'}, {'value': 'package.json'}, {'value': 'tsconfig.json'}]

  const loadedCheck = () => {
    if (!isLoaded || !userId) {
      setSignup(true)
    }
  }



const widenCode = () => {
  setWiden(true)
}

const shrinkCode = () => {
  setWiden(false)
}

const displayAi = () => {
  setAiIsOn(true)
}

const hideAi = () => {
  setAiIsOn(false)
}

const fetchRepositoryStructure = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/repository-structure', {
      url: repoUrl, // Replace with the actual GitHub repository URL
    });
    setRepoTree(response.data);
  } catch (error) {
    console.error('Failed to fetch repository structure:', error);
  }
};

const handleCall = async() => {
  await fetchRepositoryStructure()
}



  return (
    <Container>
      
      <Left>
        <Top>
          {url === false &&
            <InputCover onClick={loadedCheck}>
          <Input placeholder='Paste the URL to a repository' type="text" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)}/>
          <Button onClick={handleCall}>Validate</Button>
          </InputCover>
          }
          {url === true &&
            <Text>Uniswap / v2-core</Text> //Get the repository name
          }
        </Top>
        <BodyCover>
          <Completion />
          {aiIsOn === true &&
            <AIChat />
          }
        </BodyCover>
        
      </Left>
      <Right widen={widen}>
        <SizeIcon src={widen ? "../assets/icon-retrecir.png" : "../assets/icon-élargir.png"} onClick={widen ? shrinkCode : widenCode}/>
        {
          repoTree !== null &&
          <RecursiveTree nodes={repoTree}/>
        }
        <AIButton>
          <LeftButton aiIsOn={aiIsOn} onClick={hideAi}>AI Off</LeftButton>
          <RightButton aiIsOn={aiIsOn} onClick={displayAi}>AI On</RightButton>
        </AIButton>
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
  position: relative;
`;

const AIButton = styled.div`
  position: absolute; 
  bottom: 10px; 
  width: 90%; 
  height: 40px;
  //background: red;
  border-radius: 4px; 
  border: solid 1px #989898;
  display: flex; 
  flex-direction: row;
  padding: 5px;
`;

const LeftButton = styled.div`
  height: 100%; 
  width: 50%; 
  border-radius: 3px;
  //background: #448FFF;
  display: flex; 
  align-items: center; 
  justify-content: center;
  color: #ffffff;
  font-weight: 300;
  font-size: 16px;
  cursor: pointer;
  background: ${props => props.aiIsOn ? 'transparent' : '#448FFF'};
`;

const RightButton = styled(LeftButton)`
  background: ${props => props.aiIsOn ? '#448FFF' : 'transparent'};
`;

const SizeIcon = styled.img`
  height: 28px; 
  width: 28px; 
  position: absolute; 
  top: 10px; 
  left: 10px;
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  &:hover {
    background: #989898;
  }
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
  position: relative;
  //height: ${props => props.widen ? '100%' : 'auto'};
  width: ${props => props.widen ? '100%' : '23%'};
  position: ${props => props.widen ? 'absolute' : 'relative'};
  //position: absolute;
  //height: 100%; 
  //width: 100%;
  //background: red;
  padding-top: 40px;
  z-index: 5;
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
  background: #232323;
  
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


//{signup === true &&
        //<Signup />
      //}