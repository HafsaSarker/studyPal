import './MasterLayout.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


export default function MasterLayout() {
    return (
        <div className='master-layout'> 
            <Navbar />
            <Outlet />
        </div>
    )
}