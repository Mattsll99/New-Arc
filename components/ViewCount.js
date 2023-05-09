import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const ViewCount = () => {
  const {data, error} = useSWR('/api/youtubeAPI', fetcher)
  if(error) {
    console.log(error)
  }
  const viewCount = data?.viewCount
  console.log(viewCount)
  return (
    <div>
      <div>Youtube Views</div>
      <div>{viewCount}</div>
    </div>
  )
}

export default ViewCount