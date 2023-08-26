import { useSelector } from 'react-redux';
import SideNav from '../../Components/sideNav/SideNav'
import './User.css'

export default function User () {
    const { user } = useSelector((state) => state.auth)
    console.log(user);
    return (
        <div className='user-page'>
            <div className="side-nav">
                <SideNav />
            </div>
            
            <div className="user-page-main">
                <h1>Hi, {user.name}</h1> 
                <p>uid: {user._id}</p>
                <p>email: {user.email}</p>
            </div>
        </div>
    )
}