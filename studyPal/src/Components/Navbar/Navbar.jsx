import { BsRocket } from 'react-icons/bs'
import {IoMdLogOut} from 'react-icons/io'
import './Navbar.css'
export default function Navbar(){
    return (
        <nav className='navbar'>
            <div className="nav-left">
                <h1>StudyPal</h1> 
                <img className='logo' src='./bird.png' />
            </div>

            <input type="text" placeholder='search' />
            
            <li>Logout<IoMdLogOut/></li>
        </nav>
    )
}