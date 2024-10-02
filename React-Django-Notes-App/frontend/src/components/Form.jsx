import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import { LoadingIndicator } from "./LoadingIndicator";


// Two props :- 
  // Route  = the path where we wish to go to when we submit the form. So, it could be the `/token` or `/register` route.
  // Method = It's just saying whether we are registering or logging in. 
  function Form({route, method}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login" : "Register"

    const handleSubmit = async (e) => {
        setLoading(true)
        // For preventing the page reload - which is a default behaviour on form submission
        // Read here for more info -- https://medium.com/@stheodorejohn/event-preventdefault-explained-controlling-default-browser-behavior-with-ease-b578d883aefe#:~:text=In%20JavaScript%2C%20event.,navigating%20to%20a%20new%20URL.
        e.preventDefault()

        try { 
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/")
            } else {
                navigate("/login")
            }
        }
        catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }

    }

    return <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input 
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
        />
        <input 
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        {loading && <LoadingIndicator />}
        <button className="form-button" type="submit">
            {name}
        </button>

    </form>

}

export default Form