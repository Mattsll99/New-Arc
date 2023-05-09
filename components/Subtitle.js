import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const Subtitle = () => {
  const {data, error} = useSWR('/api/scriptExtractor', fetcher)
  if(error) {
    console.log(error)
  }
  const text = data?.text
  console.log(text)
  return (
    <div>
      <div>Youtube Views</div>
      <div>{text}</div>
    </div>
  )
}

export default Subtitle