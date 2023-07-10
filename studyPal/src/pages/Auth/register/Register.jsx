import { useState } from 'react'
import '../AuthModal.css'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password: '',
        confirmPass: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const createAccount = async(e) =>{
        e.preventDefault()
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