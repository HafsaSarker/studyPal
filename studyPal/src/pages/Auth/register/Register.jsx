import '../AuthModal.css'

function Register() {
  return (
    <div>
        <form className="signUp-form">
            <h2>Create an account</h2>
            <label>
            NAME 
            <input type="text" />
            </label>
            <label>
                EMAIL
                <input type="email" />
            </label>
            <label>
                PASSWORD
                <input type="password" />
            </label>
            <label>
                CONFIRM PASSWORD
                <input type="password" />
            </label>
            
            <button className='primary-button'>Sign up</button>
        </form>
    </div>
  )
}

export default Register