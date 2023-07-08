import Spinner from '../../Components/spinner/Spinner'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillDelete } from 'react-icons/ai'
import { path } from '../../API_PATH'
import SideNav from '../../Components/sideNav/SideNav'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './EditSet.css'

export default function EditSet() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState(null)
    const [cards, setCards] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const fetchStudySet = async() =>{
            try {
                const {data} = await axios.get(`${path}/${id}`)
                setFormData(data.studySet)
                setCards(data.studySet.flashCards[0])
                return data.studySet
            } catch (error) {
                console.log(error);
            }
        }

        fetchStudySet()
    }, [])

    const addCardInput = () => {
        setCards(prev => {
            const lastCardNum = prev[prev.length - 1].cardNum;
            return [
              ...prev,
            {
                term: "",
                definition: "",
                cardNum: lastCardNum + 1
            }
            ]
        })
    }

    //handles changes in formData ONLY
    const handleFormChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    //changes in flashcards
    const handleCardChange = (e) => {
        e.preventDefault()

        const {name, value, id} = e.target;
        
        setCards(prev => {
            const newCardArr = prev.slice()
            name === 'term' ?  
            newCardArr[id].term = value 
            : newCardArr[id].definition = value

            return newCardArr
        })
    }

    const updateStudySet = async(e) => {
        e.preventDefault()
        
        //modify old flashcards data
        formData.flashCards[0] = cards
        
        try {
            await axios.patch(`${path}/${id}`, formData)

            navigate('/dashboard')
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCard = (e) => {
        const newCardsArr = cards.filter((card) => card.cardNum !== Number(e.currentTarget.id))

        setCards(newCardsArr)
    }

    return (
        <div className="EditSet">
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="EditSet-main">
                {formData && cards !== null ? 
                (   
                    <>
                    <p className='primary-p'>Edit a set</p>
                    <form className='edit-set-form' onSubmit={updateStudySet}>
                        <label>
                            Study set title:
                            <input 
                                type='text'
                                name='setTitle'
                                value={formData.setTitle}
                                onChange={handleFormChange}
                                required
                            />
                        </label>
                        <label>
                            Description: 
                            <textarea 
                                name='setDescr'
                                value={formData.setDescr}
                                onChange={handleFormChange}
                                required
                            />
                        </label>
                        <label>
                            Image url: 
                            <input
                                type='text' 
                                name='img'
                                value={formData.img}
                                onChange={handleFormChange}
                            />
                        </label>
                        {
                            cards.map((item, i) => {
                                return (
                                    <div className="card-info" key={i}>
                                        <div className="card-info-top">
                                            <p>{i+1}</p>
                                            <button type='button' className='icon-small' onClick={deleteCard} id={item.cardNum}><AiFillDelete /></button>
                                        </div>
                                        <div className="card-sides-input">
                                            <label>
                                                Term:
                                                <textarea 
                                                    type="text"
                                                    id={i}
                                                    name='term'
                                                    onChange={handleCardChange}
                                                    value={item.term}
                                                    required
                                                />
                                            </label>
                                            <label>
                                                Definition:
                                                <textarea 
                                                    id={i}
                                                    type="text" 
                                                    name='definition'
                                                    value={item.definition}
                                                    onChange={handleCardChange}
                                                    required
                                                />
                                            </label>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        

                    
                        <div className="create-form-btn-container">
                            <button type='button' onClick={addCardInput} className='add-card-btn'>Add a card</button>
                            <div className="form-actions-btn">
                                <button type='submit' className='green-btn'>update</button>
                                <button type='submit' className='green-btn'>delete</button>
                            </div>
                            
                        </div>
                    </form>
                    </>
                ):
                (
                    <div className="spinner">
                        <Spinner />
                    </div>
                )}
                
            </div>     
        </div>
    )
}