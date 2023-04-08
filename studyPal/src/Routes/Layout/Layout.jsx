import './Layout.css'
import SideNav from '../../Components/sideNav/SideNav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='layout'>
            <div className="sideBar">
                <SideNav />
            </div>

            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    )
}