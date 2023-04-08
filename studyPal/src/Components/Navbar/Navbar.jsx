import { BsRocket } from 'react-icons/bs'
import './Navbar.css'
export default function Navbar(){
    return (
        <nav className='navbar'>
            <div className="nav-left">
                <h1>StudyPal</h1> 
                <span className='icon'><BsRocket /></span>
            </div>
        </nav>
    )
}