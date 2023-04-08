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
                    <Link>
                        <li>My Account</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}