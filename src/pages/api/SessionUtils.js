import { useState } from 'react';
import { SupabaseClient, createClient } from '@supabase/supabase-js'

export const checkSession = async () => {

  const supabase = createClient(
    'https://pkfnxbrdgdesmjgqltcv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrZm54YnJkZ2Rlc21qZ3FsdGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMTIwOTksImV4cCI6MjAwMTg4ODA5OX0.eS0tpxoOHxwXI_BnzMNVMlD4AAFIU6AGesCbwuYzKTM',
  )

  const [isLogged, setIsLogged] = useState(null);

  const { data, error } = await supabase.auth.session();
  if (error) {
    console.error('Error fetching session:', error);
    return;
  }

  if (data && data.user) {
    setIsLogged(true);
  } else {
    setIsLogged(false);
  }
  
  return isLogged;
};