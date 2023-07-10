import '../AuthModal.css'

function Login() {
  return (
    <div>
        <form className='logIn-form'>
            <h2>Welcome back!</h2>
            <label>
                EMAIL
                <input type="email" />
            </label>
            <label>
                PASSWORD
                <input type="password" />
            </label>
            
            <button className='primary-button'>Log in</button>
        </form>
    </div>
  )
}

export default Login