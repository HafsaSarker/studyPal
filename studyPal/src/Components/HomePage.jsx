import { MdOutlineCreate, MdLaptopMac } from 'react-icons/md'
import { SlNotebook } from 'react-icons/sl'
export default function HomePage({isLoggedIn, setIsLoggedIn}){
    function changeForms(){
        setIsLoggedIn(prevState => !prevState);
    }
    return (
        <div className="Home-Page">
            <img className='bear' src="../../public/createAcc.gif" />
            <div className="intro">
                <h3>Create<span className="icon"><MdLaptopMac /></span></h3>

                <h3>Study<span className="icon"><MdOutlineCreate /></span></h3>

                <h3>Learn<span className="icon"><SlNotebook /></span></h3>
            </div>
            
            { isLoggedIn ? 
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
            { isLoggedIn ? (
                <p>New here? <span className='log-in-link' onClick={changeForms}>Create account</span></p> 
            ) : (
                <p>Already have an account? <span className='log-in-link' onClick={changeForms}>Log in</span></p>  
            ) }
            
                  
            
        </div>
    )
}