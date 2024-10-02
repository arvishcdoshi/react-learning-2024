import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

export const Login = () => {

  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user)
    // Once we set the username, we navigate the user to the home page.
    navigate(redirectPath, { replace:true })
  }

  return (
    <div>
      <label>
         Username: 
         <input type='text' onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

