import { searchReducer } from '../../features/search/searchSlice'
import { useDispatch } from 'react-redux'
import {IoMdLogOut} from 'react-icons/io'
import './Navbar.css'

export default function Navbar(){
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(searchReducer(e.target.value))
    }

    return (
        <nav className='navbar'>
            <div className="nav-left">
                <h1>StudyPal</h1> 
                <img className='logo' src='./bird.png' />
            </div>

            <input type="text" placeholder='search' onChange={handleChange} />
            
            <li>Logout<IoMdLogOut/></li>
        </nav>
    )
}