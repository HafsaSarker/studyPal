import { MdOutlineCreate, MdLaptopMac } from 'react-icons/md'
import { SlNotebook } from 'react-icons/sl'
import './AuthModal.css'
import Register from './register/Register';
import Login from './login/Login';

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
                <Login />
            ) : 
            (   
                <Register />
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