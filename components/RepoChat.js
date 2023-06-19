import React from 'react'
import styled from 'styled-components'
import { getRepositoryOrganization } from '@/pages/api/Trees'

const RepoChat = () => {

  const handleRepo = () => {
    getRepositoryOrganization('https://github.com/Mattsll99/New-Arc')
  }

  return (
    <Container>
      <Left>
        <Top>
          <InputCover>
          <Button>Validate</Button>
          </InputCover>
        </Top>
        <BottomCover>
          <Wrap>
            <Ask onClick={handleRepo}>Ask</Ask>
          </Wrap>
        </BottomCover>
      </Left>
      <Right></Right>
    </Container>
  )
}

export default RepoChat

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  display: flex; 
  flex-direction: row;
`;

const Left = styled.div`
  height: 100%; 
  width: 77%;
  border-right: solid 1px #989898;
  position: relative;
`;

const Right = styled.div`
  height: 100%; 
  width: 23%; 
  background: #1E1E1E;
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

const InputCover = styled.div`
  height: 100%; 
  width: 300px; 
  background: #646464;
  border-radius: 100px;
  position: relative;
  padding: 3px;
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
`;

const Wrap = styled.div`
  height: 100%; 
  width: 100%;
  position: relative;
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
`;