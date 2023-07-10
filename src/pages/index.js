import Head from "next/head";
import styled from "styled-components";
//import Logo from "../../components/Logo";
//import EditorApp from "../../components/EditorApp";
import { useState } from "react";
import HomePage from "./HomePage";
import MuseCode from "./MuseCode";
import ForkHome from "./ForkHome";
import Signup from "../../components/Signup";
import Signin from "../../components/Signin";
import AdeniPage from "./AdeniPage";
import { ClerkProvider } from '@clerk/nextjs'







export default function Home() {
  const [srcDoc, setSrcDoc] = useState("");

  return (
    <>
      <Head>
        <title>MuseArt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <AdeniPage />
        
      </main>
    </>
  );
}

const Container = styled.div`
  width: 100vw; 
  height: 100vh;
  display: flex; 
  flex-direction: row;
`;



const LeftMenu = styled.div`
  height: 100%; 
  width: 250px;
  background: transparent;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex; 
  flex-direction: column;
  position: relative;
  //align-items: center;
`;

const RightMenu = styled.div`
  height: 100%; 
  width: 83%;
  background: transparent;
  display: flex; 
  flex-direction: column;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
`;

