import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../../../features/auth/authSlice'
import Spinner from '../../../Components/spinner/Spinner'
import '../AuthModal.css'

function Register() {
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password: '',
        confirmPass: ''
    })

    const {name, email, password, confirmPass} = formData

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    //watch for changes in user, isError, etc...
    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/dashboard')
        }
        //if everything is ok, reset
        dispatch(reset())
    }, [user, isError, isSuccess, isLoading, dispatch, navigate])

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const createAccount = (e) =>{
        e.preventDefault()

        if(password !== confirmPass) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <form className="signUp-form" onSubmit={createAccount}>
                <h2>Create an account</h2>
                <label>
                NAME 
                    <input 
                        type="text"
                        name='name'
                        onChange={handleChange}
                    />
                </label>
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
                <label>
                    CONFIRM PASSWORD
                    <input 
                        type="password"
                        name='confirmPass'
                        onChange={handleChange}
                    />
                </label>
                
                <button className='primary-button'>Sign up</button>
            </form>
        </div>
    )
}

export default Register