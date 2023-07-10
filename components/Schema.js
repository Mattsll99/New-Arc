import React, { useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown';

const Schema = () => {

  const [code, setCode] = useState(false)
  

  //Acceder au fichiers via call de props
  //Mapping file name => code
  //Position absolute pour code display de file

  const markdownContent = `
\`\`\`solidity
pragma solidity 0.5.16;

import './interfaces/IPancakePair.sol';
import './interfaces/IPancakeRouter02.sol';
import './libraries/SafeMath.sol';

contract RamenToken is IPancakePair {
    using SafeMath for uint;

    string public constant name = 'ramen';
    string public constant symbol = 'RAMEN';
    uint8 public constant decimals = 18;
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;

    bytes32 public DOMAIN_SEPARATOR;
    // keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
    bytes32 public constant PERMIT_TYPEHASH = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;
    mapping(address => uint) public nonces;

    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    constructor() public {
        uint chainId;
        assembly {
            chainId := chainid
        }
        DOMAIN_SEPARATOR = keccak256(
            abi.encode(
                keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),
                keccak256(bytes(name)),
                keccak256(bytes('1')),
                chainId,
                address(this)
            )
        );
    }

    function _mint(address to, uint value) internal {
        totalSupply = totalSupply.add(value);
        balanceOf[to] = balanceOf[to].add(value);
        emit Transfer(address(0), to, value);
    }

    function _burn(address from, uint value) internal {
        balanceOf[from] = balanceOf[from].sub(value);
        totalSupply = totalSupply.sub(value);
        emit Transfer(from, address(0), value);
    }

    function _approve(address owner, address spender, uint value) private {
        allowance[owner][spender] = value;
        emit Approval(owner, spender, value);
    }

    function _transfer(address from, address to, uint value) private {
        balanceOf[from] = balanceOf[from].sub(value);
        balanceOf[to] = balanceOf[to].add(value);
        emit Transfer(from, to, value);
    }

    function approve(address spender, uint value) external returns (bool) {
        _approve(msg.sender, spender, value);
        return true;
    }

    function transfer(address to, uint value) external returns (bool) {
        _transfer(msg.sender, to, value);
        return true;
    }

    function transferFrom(address from, address to, uint value) external returns (bool) {
        if (allowance[from][msg.sender] != uint(-1)) {
            allowance[from][msg.sender] = allowance[from][msg.sender].sub(value);
        }
        _transfer(from, to, value);
        return true;
    }

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external {
        require(deadline >= block.timestamp, 'RamenToken: EXPIRED');
        bytes32 digest = keccak256(
            abi.encodePacked(
                '\x19\x01',
                DOMAIN_SEPARATOR,
                keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline))
            )
        );
        address recoveredAddress = ecrecover(digest, v, r, s);
        require(recoveredAddress != address(0) && recoveredAddress == owner, 'UniswapV2: INVALID_SIGNATURE');
        _approve(owner, spender, value);
    }
}
\`\`\`
`;
  

  const displayCode = () => {
    setCode(true)
  }

  const hideCode = () => {
    setCode(false)
  }

  return (
    <Container>
      
        {code === true &&
        <CodeWrapper>
                <CloseButton src="../assets/revenir.png" onClick={hideCode}/>
                <StyledReactMarkdown>
                {markdownContent}
              </StyledReactMarkdown>
              </CodeWrapper>
        }
      
      <Title>Relevant scripts</Title>
      <Wrapper>
        <Line onClick={displayCode}>
          <Icon src="../assets/blue-file-icon.png"/>
          <Name>UniswapV2Pair.sol</Name>
        </Line>
        <Line>
          <Icon src="../assets/blue-file-icon.png"/>
          <Name>UniswapV2Pair.sol</Name>
        </Line>
        <Line>
          <Icon src="../assets/blue-file-icon.png"/>
          <Name>UniswapV2Pair.sol</Name>
        </Line>
        <Line>
          <Icon src="../assets/blue-file-icon.png"/>
          <Name>UniswapV2Pair.sol</Name>
        </Line>
      </Wrapper>
    </Container>
  )
}

export default Schema

const Container = styled.div`
  width: 100%; 
  height: 100%; 
  //background: green;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
`;

const Title = styled.text`
  font-size: 15px; 
  font-weight: 300;
  display: flex; 
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%; 
  height: 500px;
  //background: red;
  margin-top: 10px;
  display: flex; 
  flex-direction: column;
`;

const Line = styled.div`
  height: auto; 
  width: 100%;
  margin-top: 10px;
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: start;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer; 
  &:hover {
    background: #4A4A4A;
  }
`; 

const CodeWrapper = styled.div`
  height: 100%; 
  width: 100%; 
  //background: blue;
  position: absolute;
`; 

const Name = styled.text`
  font-size: 14px; 
  font-weight: 300; 
  color: #ffffff;
  margin-left: 10px;
`;

const Icon = styled.img`
  height: 15px; 
  width: 15px;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  background-color: #1d1d1d;
  padding: 20px;
  font-size: 14px;
  font-weight: 100;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius:10px;
  overflow-y: scroll;
`;

const CloseButton = styled.img`
  height: 30px; 
  width: 30px; 
  border-radius: 4px;
  cursor: pointer;
  position: absolute; 
  top: -30px;
  right: 10px; 
  //width: 10px;
`;