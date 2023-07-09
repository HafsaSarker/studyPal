import { Link } from 'react-router-dom'
import SideNav from '../../Components/sideNav/SideNav'
import axios from 'axios'
import { path } from '../../API_PATH'
import Card from '../../Components/Card/Card'
import './Dashboard.css'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import { reset } from '../../features/notification/notifSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Dashboard () {
    const [studySets, setStudySets] = useState([])
    const dispatch = useDispatch()

    const isEditState = useSelector((state) => state.notif.isEdited)
    const isDeleteState = useSelector((state) => state.notif.isDeleted) 
    const isCreateState = useSelector((state) => state.notif.isCreated)

   
    
    useEffect(() => {
        const fetchAllSets = async() => {
            try {
                const {data} = await axios.get(path)
                setStudySets(data.allSets)
            } catch (error) {
                console.log(error);
            }
        }

        fetchAllSets()
    },[])

    useEffect(() => {
        const sendNotif = () => {
            let message = ''

            if(isEditState){
                message = 'successfully updated'
            }
            else if(isDeleteState){
                message = 'successfully deleted'
            }
            else if(isCreateState){
                message = 'successfully created'
            }
            else{
                message = null
            }
            message ? toast.success(message) : null
        }     
        sendNotif()
        dispatch(reset())
    },[isEditState, isDeleteState, isCreateState, reset])

    return (
        <div className='dashboard'>
            <ToastContainer />
            <div className="side-nav">
                <SideNav />
            </div>
            
            <div className="dashboard-main">
                { studySets.length > 0 &&  
                <h2 className='dashbordTitle'>click on a set to start studying!</h2>}

                {studySets && studySets.length > 0 ? 
                (   
                    <div className="populated-dashboard">
                    {
                        studySets.map((item, index) =>
                        <Card 
                            key={index}
                            setTitle={item.setTitle}
                            img={item.img}
                            createdAt={item.createdAt}
                            id={item._id}
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