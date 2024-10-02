import React from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"


function Logout() {
  // We need to clear out our refresh & access token as soon as we log out.
  localStorage.clear()
  return <Navigate to="/login" />
}

// If someone's registering, we first want to clear localStorage so that we don't end 
// up submitting access tokens to the register route where we might potentially get an error.
function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route 
           path="/"
           element = {
            <ProtectedRoute>
               <Home />
            </ProtectedRoute>
           }
        />
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/register" element={<RegisterAndLogout />}/>
        <Route path="*" element={<NotFound />}/>

       </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
