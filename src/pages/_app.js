import '@/styles/globals.css'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
//import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }) {

  //const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}
