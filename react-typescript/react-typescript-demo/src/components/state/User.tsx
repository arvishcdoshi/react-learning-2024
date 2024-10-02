import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    
    const [user, setUser] = useState<AuthUser | null>(null)

    // If we're confident that user will be initialized soon after setup and will always have a value after, 
    // we can use type assertion as below.
    //const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Arvish',
            email: 'arvish@email.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <div>User name is {user?.name} </div>
          <div>User email is {user?.email} </div>
        </div>
    )

}