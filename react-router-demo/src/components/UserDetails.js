import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  // The below HOOK returns an object of key-value pairs   
//   const params = useParams()
//   const userId = params.userId

//   return <div>Details about user - {userId}</div>

  // We can improve the code by de-structuring.
  const { userId } = useParams()
  return <div>Details about user - {userId}</div>
}

