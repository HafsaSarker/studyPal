// a place to 'read' all sets

import { Link } from 'react-router-dom'
import SideNav from '../../Components/sideNav/SideNav'
import tempData from '../../../tempData'
import Card from '../../Components/Card/Card'
import './Dashboard.css'

export default function Dashboard () {
    return (
        <div className='dashboard'>
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="dashboard-main">
                {tempData.length > 1 ? 
                (
                    <div className="populated-dashboard">
                        {
                            tempData.map((item, index) =>
                            <Card 
                                key={index}
                                title={item}
                            />
                            )
                        }                     
                    </div>
                ) :
                (
                    <div className="empty-dashboard">
                        <img src='./feedbackCat.png' />
                        <p className='primary-p'>oh shucks...you currently have no sets</p>
                        <Link to='/createSet'>
                            <button className='secondary-button'>Create one here</button>
                        </Link>
                    </div>
                )}
                
                
            </div>
        </div>
    )
}