import { Link } from 'react-router-dom'
import './SideNav.css'

export default function SideNav() {
    return (
        <div className="sideNav">
            <nav className='nav--side'>
                <ul>
                    <Link to='/dashboard'>
                        <li>Dashboard</li>
                    </Link>
                    <Link to='/createSet'>
                        <li>Create a set</li>
                    </Link>
                    <Link to='/user/me'>
                        <li>My Account</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}