import '@/styles/globals.css'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
//import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps: {session, ...pageProps} }) {

  //const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <UserProvider>
      <Component {...pageProps} />
      </UserProvider>
  )
}
