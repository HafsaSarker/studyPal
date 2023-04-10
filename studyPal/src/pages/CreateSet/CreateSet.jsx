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
                    <label>
                        1: 
                        <label>
                            Term:
                            <input type="text" />
                        </label>

                        <label>
                            Definition:
                            <input type="text" />
                        </label>
                    </label>
                    <div className="create-form-btn-container">
                        <button type='button'>Add a card</button>
                        <button type='submit'>create</button>
                    </div>
                    
                </form>
            </div>     
        </div>
    )
}