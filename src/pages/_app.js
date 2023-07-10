import '@/styles/globals.css'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
//import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }) {

  //const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}
