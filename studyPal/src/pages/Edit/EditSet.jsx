import SideNav from '../../Components/sideNav/SideNav'
import { AiFillDelete } from 'react-icons/ai'
import axios, { formToJSON } from 'axios'
import { path } from '../../API_PATH'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './EditSet.css'
import Spinner from '../../Components/spinner/Spinner'

export default function EditSet() {
    const [formData, setFormData] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const fetchStudySet = async() =>{
            try {
                const {data} = await axios.get(`${path}/${id}`)

                setFormData(data.studySet)
            } catch (error) {
                console.log(error);
            }
        }

        fetchStudySet()
    }, [])

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const updateStudySet = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    //add an input box on click
    const IncrementInputBox = () => {
        console.log('adds a new input box on click');
    }
    return (
        <div className="EditSet">
            <div className="side-nav">
                <SideNav />
            </div>

            <div className="EditSet-main">
                { formData ? (
                    <>
                        <p className='primary-p'>edit: {formData.setTitle}</p>
                        <form className='edit-set-form' onSubmit={updateStudySet}>
                            <label>
                                Study set title:
                                <input 
                                    type='text'
                                    name='setTitle'
                                    value={formData.setTitle}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Description: 
                                <textarea 
                                    name='setDescr'
                                    value={formData.setDescr}
                                    onChange={handleChange}
                                />
                            </label>
                            {
                                formData.flashCards.map((card)=>
                                    <div className="card-info" key={card._id}>
                                    <div className="card-info-top">
                                        <p>{card.cardNum}</p>
                                        <span className='icon-small'><AiFillDelete /></span>
                                    </div>
                                    
                                    <div className='card-sides-input'>
                                    <label>
                                            Term:
                                            <textarea type="text" 
                                                value={card.term}
                                                name='term'
                                                onChange={handleChange}
                                            />
                                        </label>

                                        <label>
                                            Definition:
                                            <textarea type="text" 
                                                value={card.definition}
                                                name='definition'
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    </div>
                                )
                            }
                            
                
                        <div className="create-form-btn-container">
                            <button onClick={IncrementInputBox} type='button' className='add-card-btn'>Add a card</button>
                            <div className="edit-action-btns">
                                <button type='submit' 
                                className='green-btn'>Update</button>
                                <button type='button' className='green-btn'>Delete set</button>
                            </div>  
                        </div>
                        </form>
                    </>
                ):(
                    <div className="spinner">
                        <Spinner />
                    </div>
                )}
                 
            </div>
        </div>
    )
}