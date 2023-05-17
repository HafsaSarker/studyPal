import SideNav from '../../Components/sideNav/SideNav'
import { AiFillDelete } from 'react-icons/ai'
import './EditSet.css'

export default function EditSet() {
    return (
        <div className="EditSet">
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="EditSet-main">
                <p className='primary-p'>Edit setName</p>
                <form className='edit-set-form'>
                    <label>
                        Study set title:
                        <input 
                            type='text'
                        />
                    </label>
                    <label>
                        Description: 
                        <textarea 
                            
                        />
                    </label>
                    <div className="card-info">
                        {/* card number */}
                        <div className="card-info-top">
                            <p>1</p>
                            <span className='icon-small'><AiFillDelete /></span>
                        </div>
                        
                        <div className='card-sides-input'>
                            <label>
                                Term:
                                <textarea type="text" />
                            </label>

                            <label>
                                Definition:
                                <textarea type="text" 
                                />
                            </label>
                        </div>
                    </div>
                   
                    <div className="create-form-btn-container">
                        <button type='button' className='add-card-btn'>Add a card</button>
                        <div className="edit-action-btns">
                            <button type='submit' 
                            className='green-btn'>Update</button>
                            <button type='button' className='green-btn'>Delete set</button>
                        </div>  
                    </div>
                    
                </form>
            </div>     
        </div>
    )
}