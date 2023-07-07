import {CiEdit} from 'react-icons/ci'
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Card.css'

export default function Card({setTitle, img, createdAt, id}) {
    const createdAgo = moment(new Date(createdAt)).fromNow();
    return (
        <div className="card">
            <div className="set-info">
                <p>created {createdAgo}</p>
                 <div className="update-icons">
                    <Link to={`/editSet/${id}`}>
                        <span className="icon-edit">
                            <CiEdit/>
                        </span>
                    </Link>
                    
                </div>
            </div>
           
            <img className='studySetImg' src={img} alt="Study set image" />
            <section className='card-content'>
                <p className='setTitle'>{setTitle}</p>
            </section>
            
        </div>
    )
}