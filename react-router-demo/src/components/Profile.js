// Let's display the logged in username in the profile component & also addd a logout button.

import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    // After logging out, we redirect the user to the home page
    navigate('/')
  }

  return <div>Welcome {auth.user}
  <button onClick={handleLogout}>Logout</button></div>
}


