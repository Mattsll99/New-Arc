import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'


const Profile = ({session}) => {

  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let {data, error, status} = await supabase
      .from('profiles')
      .select(`username, profile_picture`)
      .eq('id', user.id)
      .single()

      if (error && status !== 406) {
        throw error
      }
      if (data) {
        setUsername(data.username)
        setPhoto(data.profile_picture)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({username, photo}) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username, 
        profile_picture, 
        updated_at: new Date().toISOString()
      }

      let {error} = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
      <Wrapper>
        <Photo src="../assets/man1.jpg"/>
        <Name>Mister Quoicoubakah</Name>
      </Wrapper>
  )
}

export default Profile

const Container = styled.div`
  position: fixed; 
  height: 100vh; 
  width: 82%;
  top: 0;
  right:0;
  z-index:5;
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: rgba( 29, 29, 29, 0.25 );
  backdrop-filter: blur( 12px );
-webkit-backdrop-filter: blur( 12px );

`;

const Wrapper = styled.div`
  height: 200px; 
  width: 400px;
  background: #1D1D1D; 
  border-radius: 10px;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  margin-top: 20px;
`;

const Photo = styled.img`
  height: 90px; 
  width: auto; 
  border-radius: 200px;
  margin-top: 20px;
`;

const Name = styled.text`
  font-size: 20px;
  font-weight: 200;
  margin-top: 20px;
`;