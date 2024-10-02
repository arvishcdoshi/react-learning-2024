import { useState, createContext, useContext } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value = {{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Function that returns the value of Auth Context
export const useAuth = () => {
    return useContext(AuthContext)
}