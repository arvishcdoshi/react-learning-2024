// NOTE - This file ensures that the Profile component is protected.
  // Below, we're creating a reusable wrapper component that decides 
  // if the component can be rendered or if the user has to login first.

import { useAuth } from "./Auth";
import { Navigate, useLocation } from "react-router-dom";



export const RequireAuth = ({ children }) => {

  const auth = useAuth()
  const location = useLocation()

  // If the user is not logged in, it redirects to the login route.   
  if (!auth.user) {
    return <Navigate to='/login' state={{ path:location.pathname }} />
  }

  // If the user is logged in, it renders the children prop   
  return children
}

