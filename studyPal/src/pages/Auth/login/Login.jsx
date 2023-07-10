import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logInUser, reset } from '../../../features/auth/authSlice'
import Spinner from '../../../Components/spinner/Spinner'
import '../AuthModal.css'
import '../AuthModal.css'

function Login() {
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email:'',
        password: '',
    })

    const {email, password} = formData

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/dashboard')
        }
        //if everything is ok, reset
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const loginFormSubmit = (e) =>{
        e.preventDefault()
        const userData = {
            email,
            password
        }

        dispatch(logInUser(userData))
    }

    if(isLoading) {
        return <Spinner />
    }
  return (
    <div>
        <form className='logIn-form' onSubmit={loginFormSubmit}>
            <h2>Welcome back!</h2>
            <label>
                EMAIL 
                    <input 
                        type="email"
                        name='email'
                        onChange={handleChange}
                    />
                </label>
            <label>
                PASSWORD
                <input 
                    type="password"
                    name='password'
                    onChange={handleChange}
                />
            </label>
            
            <button className='primary-button'>Log in</button>
        </form>
    </div>
  )
}

export default Login