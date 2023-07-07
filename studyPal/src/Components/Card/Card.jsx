import {CiEdit} from 'react-icons/ci'
import moment from 'moment';
import './Card.css'

export default function Card({setTitle, img, createdAt}) {
    const createdAgo = moment(new Date(createdAt)).fromNow();
    return (
        <div className="card">
            <div className="set-info">
                <p>created {createdAgo}</p>
                 <div className="update-icons">
                    <span className="icon-edit"><CiEdit/></span>
                </div>
            </div>
           
            <img className='studySetImg' src={img} alt="Study set image" />
            <section className='card-content'>
                <p className='setTitle'>{setTitle}</p>
            </section>
            
        </div>
    )
}