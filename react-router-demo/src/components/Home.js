import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
    <div><h1>Home Page</h1></div>
    {/* <button onClick={() => navigate('order-summary')}>Place order</button> */}

    {/* We might also want to replace the history instead of pushing a route onto the stack. For that, we
        can pass in an optional second argument which is an object with a property called replace set to True 
        When we click `Go back`, we'll go back to the browser tab instead of the Home page. This is because we
        replaced instead of pushing order summary onto the history stack */}

    {/* We can implement what's written above as shown at line no 19 */}

    <button onClick={() => navigate('order-summary', {replace: true}) }>Place order</button>
    </>
  )
}
