import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Folder from './Folder'
import File from './File'

const Schema = ({url}) => {
  const [organization, setOrganization] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/get_organization', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: url })
        })

        if (response.ok) {
          const data = await response.json()
          // Set the retrieved organization data to the state
          setOrganization(data.organization)
        } else {
          console.log('Request failed with status:', response.status)
        }
      } catch (error) {
        console.log('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      {/* Render the folder and file structure */}
      {organization.map((item, index) => (
        item.includes('.') ? (
          <File key={index} path={item} />
        ) : (
          <Folder key={index} path={item} />
        )
      ))}
    </Container>
  )
}

export default Schema

const Container = styled.div`
  width: 100%; 
  height: 500px;
`;