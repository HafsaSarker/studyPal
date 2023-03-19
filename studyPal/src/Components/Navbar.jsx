import { BsRocket } from 'react-icons/bs'
export default function Navbar(){
    return (
        <nav>
            <div className="nav-left">
                <h1>StudyPal</h1> 
                <span className='icon'><BsRocket /></span>
            </div>
            <button className='primary-button'>Log in</button>
        </nav>
    )
}