import { Link } from 'react-router-dom'
import SideNav from '../../Components/sideNav/SideNav'
import './Dashboard.css'

export default function Dashboard () {
    return (
        <div className='dashboard'>
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="dashboard-main">
                <img src='./feedbackCat.png' />
                <p className='primary-p'>oh shucks...you currently have no sets</p>
                <Link to='/createSet'>
                    <button className='secondary-button'>Create one here</button>
                </Link>
                
            </div>
        </div>
    )
}