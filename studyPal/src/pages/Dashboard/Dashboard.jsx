import { Link } from 'react-router-dom'
import SideNav from '../../Components/sideNav/SideNav'
import axios from 'axios'
import { path } from '../../API_PATH'
import Card from '../../Components/Card/Card'
import './Dashboard.css'
import { useEffect, useState } from 'react'

export default function Dashboard () {
    const [studySets, setStudySets] = useState([])

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

    return (
        <div className='dashboard'>
            <div className="side-nav">
                <SideNav />
            </div>
            
            <div className="dashboard-main">
                { studySets.length > 1 &&  
                <h2 className='dashbordTitle'>click on a set to start studying!</h2>}

                {studySets && studySets.length > 1 ? 
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