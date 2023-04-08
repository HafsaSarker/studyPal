import { BsRocket } from 'react-icons/bs'
import './Navbar.css'
export default function Navbar(){
    return (
        <nav>
            <div className="nav-left">
                <h1>StudyPal</h1> 
                <span className='icon'><BsRocket /></span>
            </div>
        </nav>
    )
}