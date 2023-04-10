import SideNav from '../../Components/sideNav/SideNav'
import './CreateSet.css'

export default function CreateSet() {
    return (
        <div className="createSet">
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="createSet-main">
                <p className='primary-p'>create a set</p>
                <form className='create-set-form'>
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
                        <p>1</p> 
                        
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
                        <button type='submit' className='green-btn'>create</button>
                    </div>
                    
                </form>
            </div>     
        </div>
    )
}