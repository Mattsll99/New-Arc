import '@/styles/globals.css'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
//import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  //const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    
      <Component {...pageProps} />
      
   
  )
}
