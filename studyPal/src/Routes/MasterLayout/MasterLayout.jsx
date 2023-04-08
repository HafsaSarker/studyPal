import './MasterLayout.css'
import { Outlet } from 'react-router-dom'


export default function MasterLayout() {
    return (
        <div className='master-layout'> 
            <Outlet />
        </div>
    )
}