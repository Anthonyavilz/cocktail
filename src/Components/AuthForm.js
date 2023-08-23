import { useNavigate } from 'react-router-dom'


const AuthForm = () => {

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        navigate('/cocktailHour/User')
    }

    return (
        <div className="authForm">
            <form onSubmit={submitHandler}>
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AuthForm