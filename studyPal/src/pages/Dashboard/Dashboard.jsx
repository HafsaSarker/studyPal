import SideNav from '../../Components/sideNav/SideNav'
import './Dashboard.css'

export default function Dashboard () {
    return (
        <div className='dashboard'>
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="dashboard-main">
                dashboard things
            </div>
        </div>
    )
}