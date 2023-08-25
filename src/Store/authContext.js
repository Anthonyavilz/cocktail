import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const AuthContext = createContext({
    userId: null,
    login: () => {},
    logout: () => {}
})

export const AuthContextProvider = props => {

    const [userId, setUserId] = useState(null)

    const login = (userId) => {
        setUserId(userId)
    }

    const logout = () => {
        setUserId(null)
    }

    const contextValue = {
        userId,
        login,
        logout
    }

    useEffect(() => {
        axios
            .get('/user')
            .then(res => setUserId(res.data.userId))
            .catch(err => console.log(err))
    }, [])

    return (
        <AuthContextProvider value={contextValue} >
            {props.children}
        </AuthContextProvider>
    )
}

export default AuthContext