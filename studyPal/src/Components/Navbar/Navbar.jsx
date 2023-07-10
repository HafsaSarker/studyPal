import { searchReducer } from '../../features/search/searchSlice'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import {IoMdLogOut} from 'react-icons/io'
import './Navbar.css'

export default function Navbar(){
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    const logoutUser = () => {
        dispatch(logout())
        dispatch(reset())
        window.location = '/'
    }

    //search functionality
    const handleChange = (e) => {
        dispatch(searchReducer(e.target.value))
    }

    return (
        <nav className='navbar'>
            <div className="nav-left">
                <h1>StudyPal</h1> 
                <img className='logo' src='./bird.png' />
            </div>
            {user && 
            <>
                <input 
                    type="text" 
                    placeholder='search' 
                    onChange={handleChange} 
                />
                
                <li>
                    <button onClick={logoutUser} className='logout-btn'>
                        Logout<IoMdLogOut/>
                    </button>
                </li>
            </>
            
            }
        </nav>
    )
}