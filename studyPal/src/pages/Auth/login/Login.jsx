import { useState } from 'react'
import '../AuthModal.css'

function Login() {
    const [formData, setFormData] = useState({
        email:'',
        password: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const loginUser = async(e) =>{
        e.preventDefault()
    }
  return (
    <div>
        <form className='logIn-form' onSubmit={loginUser}>
            <h2>Welcome back!</h2>
            <label>
                NAME 
                    <input 
                        type="text"
                        name='name'
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