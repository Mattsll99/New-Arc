import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import EditorBox from './EditorBox'
import { useLocalStorage } from './useLocalStorage'
import { parse, serialize } from 'node-html-parser';


const EditorApp = () => {

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [widen, setWiden] = useState(false)
  const [elements, setElements] = useState([])
  const [lookup, setLookup] = useState("")

  
  const widenPage = () => {
    setWiden(!widen)
  }

  function addBordersToHTML(htmlCode) {
    const styleCode = `<style>
      * {
        box-sizing: border-box;
      }
  
      /* Add a transparent border to all elements */
      * {
  
      }
  
      /* Add a border to elements when hovering over them */
      *:hover {
        border: 2px solid #67ADDB;
      }
  
      /* Add class "active" to the clicked element */
      .active {
        border: 2px solid #FFFFFF;
      }
    </style>`;
  
    const scriptCode = `<script>
      // Add event listeners to all elements
      const elements = document.querySelectorAll('*');
      let lastClickedElement = null; // Store the last clicked element
  
      elements.forEach((element) => {
        element.addEventListener('click', (event) => {
          if (lastClickedElement) {
            lastClickedElement.classList.remove('active'); // Remove "active" class from the last clicked element
            lastClickedElement.style.border = 'none'; // Remove the white border from the last clicked element
          }
  
          lastClickedElement = event.target; // Assign the clicked element to lastClickedElement
          lastClickedElement.classList.add('active'); // Add "active" class to the clicked element
          lastClickedElement.style.border = '5px solid #FFFFFF'; // Add the white border to the clicked element
        });
      });
    </script>`;
  
    const startIndex = htmlCode.indexOf("<head>") + 6;
    const endIndex = htmlCode.indexOf("</head>");
  
    if (startIndex === -1 || endIndex === -1) {
      console.error("Invalid HTML code. Missing <head> or </head> tags.");
      return htmlCode;
    }
  
    const modifiedHTML = htmlCode.slice(0, endIndex) + styleCode + scriptCode + htmlCode.slice(endIndex);
  
    return modifiedHTML;
  }

  // Get the iframe element
const iframe = document.querySelector('iframe');

// Access the contentWindow of the iframe
const iframeWindow = iframe.contentWindow;

// Access the document inside the iframe
const iframeDocument = iframeWindow.document;

// Use querySelector to select the element with the "active" class
const activeElement = iframeDocument.querySelector('.active') !== undefined ? iframeDocument.querySelector('.active') : null;

console.log(activeElement);

 
  useEffect(() => {
    const timeout = setTimeout(() => {
      //const modifiedHtml = addBorderAndConsoleLogging(html)
      const htmlWithBorders = addBordersToHTML(html)
      //setHtml(htmlWithBorders);
      setSrcDoc(`
        <html lang="en">
          <body>${htmlWithBorders}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 200);

    return () => clearTimeout(timeout);
  }, [html, css, js]);


  return (
    <Container>
      <Wrapper>
      <EditorBox 
           language="xml"
           editorTitle="HTML"
           value={html}
           onChange={setHtml}
      />
      <EditorBox 
        language="css"
        editorTitle="CSS"
        value={css}
        onChange={setCss}
      />
      <EditorBox 
         language="javascript"
         editorTitle="JS"
         value={js}
         onChange={setJs}

      />
      </Wrapper>
      <BottomWrapper style={{height: widen? "100%" : "50%", position: widen? "absolute" : "relative", marginTop: widen? "-20px" : "0"}}>
        <Button onClick={widenPage}></Button>
      <Cadre>
            <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
          allow-same-origin='true'
        />
        </Cadre>
        </BottomWrapper>
    </Container>
  )
}

export default EditorApp

const Container = styled.div`
  width: 100%; 
  height: 100%;
  background: #1F1F1F;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;
  padding-top: 20px; 
  position: relative;
  //padding-bottom: 20px;
`;

const BlueBorder = styled.div`
  border: 1px solid blue;
  background: transparent;
`;

const Button = styled.div`
  height: 30px; 
  width: 30px; 
  position: absolute; 
  top: 10px; 
  right: 10px; 
  background: green;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 50%; 
  width: 100%;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px; 
  padding-right: 20px;
  //position: relative;
`;


const BottomWrapper = styled.div`
  //height: 50%; 
  width: 100%;
  position: relative;
`;

const Cadre = styled.div`
  height: 100%; 
  width: 100%; 
  background: transparent; 
  border-top: solid 4px #131313;
  border-left: solid 4px #131313;
  border-right: solid 4px #131313;
  background: #FFFFFF;
  overflow: scroll;
`;

const Screen = styled.div`
  position: absolute;
  height: 200%; 
  width: 300px; 
  background: transparent;
  z-index: 3;
  top:0;
  background: red;
`;


//Pas utiliser de Screen
//Utiliser BottomWrapper comme base pour render les cover
//Lorsque la souris passe sur un élément qui correspond au code html, trigger l'appartition des borders


//Faire apparraitre un div transparent à chaque fois que le code HTML trigger 
//Y ajouter les borders
