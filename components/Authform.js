import React from 'react'
import styled from 'styled-components'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'


const Authform = () => {

  const supabase = createClient(
    'https://pkfnxbrdgdesmjgqltcv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrZm54YnJkZ2Rlc21qZ3FsdGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMTIwOTksImV4cCI6MjAwMTg4ODA5OX0.eS0tpxoOHxwXI_BnzMNVMlD4AAFIU6AGesCbwuYzKTM',
  )

  return (
    <Cover>
      <Authlayer>
    <Auth 
    supabaseClient={supabase}
    
    appearance={{ theme: ThemeSupa }}
    theme="dark"
    //showLinks={false}
    providers={['github']}
    redirectTo="http://localhost:3000/auth/callback"
    />
    </Authlayer>
    </Cover>
  )
}

export default Authform

const Cover = styled.div`
  position: fixed; 
  z-index: 3;
  top: 0; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  height: 100vh; 
  width: 100vw; 
  background: rgba( 255, 255, 255, 0.25 );
  //box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 16.5px );
  -webkit-backdrop-filter: blur( 16.5px );
  //border-radius: 10px;
  //border: 1px solid rgba( 255, 255, 255, 0.18 );
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Authlayer = styled.div`
  height: auto; 
  padding: 10px;
  border-radius: 10px;
  width: 400px; 
  //position: absolute; 
  background: #1E1E1E;
  //z-index: 4;
`;