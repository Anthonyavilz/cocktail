import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';


const AuthForm = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(true)

    const submitHandler = async (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        }

        await
            axios
                .post(register ? 'http://localhost:1234/register' : 'http://localhost:1234/login', user)
                .then((res) => {
                    console.log(res.data)
                    setUsername('')
                    setPassword('')
                    navigate('/cocktailHour/User')
                })
                .catch(err => console.log('error in axios post', err))
    }

    return (
        <div className="authForm">
            <form onSubmit={submitHandler}>
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"></input>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
                <button>
                    {register ? 'Sign-Up' : 'Login'}
                </button>
            </form>
            <button className='form-btn' onClick={() => setRegister(!register)}>
                Need to {register ? 'Login' : 'Sign Up'}?
            </button>
        </div>
    )
}

export default AuthForm