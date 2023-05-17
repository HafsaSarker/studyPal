import { MdOutlineCreate, MdLaptopMac } from 'react-icons/md'
import { SlNotebook } from 'react-icons/sl'
import './AuthModal.css'

export default function HomePage({logIn, setLogIn}){
    function changeForms(){
        setLogIn(prevState => !prevState);
    }
    return (
        <div className="Home-Page">
            <img className='bear' src="./createAcc.gif" />
            <div className="intro">
                <h4>Create<span className="icon"><MdLaptopMac /></span></h4>

                <h4>Study<span className="icon"><MdOutlineCreate /></span></h4>

                <h4>Learn<span className="icon"><SlNotebook /></span></h4>
            </div>
            
            { logIn ? 
            (
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
            ) : 
            (   
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
                    
                    <button className='primary-button'>Sign up</button>
                </form>
            )
            }
            { logIn ? (
                <p>New here? <span className='log-in-link' onClick={changeForms}>Create account</span></p> 
            ) : (
                <p>Already have an account? <span className='log-in-link' onClick={changeForms}>Log in</span></p>  
            ) }
            
                  
            
        </div>
    )
}