import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const ChatBox = ({ text, speed }) => {

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    if (text && text.length > 0) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(intervalId);
        }
      }, speed);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [text, speed]);

 


  return (
    <Container>{displayText}</Container>
  )
}

export default ChatBox

const Container = styled.div`
  height: auto; 
  width: 100%; 
  background:#232323;
  display: flex; 
  justify-content: center; 
  text-align: start;
  padding: 40px;
  font-weight: 200;
  font-size: 15px;
`;

const Strong = styled.text`
  font-size: 15px; 
  font-weight: 600;
`;