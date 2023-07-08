import { useState } from 'react'
import axios from 'axios'
import { AiFillDelete } from 'react-icons/ai'
import { path } from '../../API_PATH'
import SideNav from '../../Components/sideNav/SideNav'
import './CreateSet.css'
import { useNavigate } from 'react-router-dom'

export default function CreateSet() {
    const navigate =  useNavigate()
    const [formData, setFormData] = useState({
        setTitle:'',
        setDescr:'',
        img: undefined,
        flashCards: []
    })

    const cardsArray = [{
        cardNum: 1,
        term: '',
        definition: ''
    }]

    const [cards, setCards] = useState(cardsArray)

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

    const createStudySet = async(e) => {
        e.preventDefault()
        
        //add flashcard arr to form data
        formData.flashCards.push(cards)
        
        try {
            await axios.post(`${path}/createSet`, formData)

            navigate('/dashboard')
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCard = (e) => {
        console.log(typeof(e.currentTarget.id))

        const newCardsArr = cards.filter((card) => card.cardNum !== Number(e.currentTarget.id))
        console.log({cards});
        console.log({newCardsArr});
        setCards(newCardsArr)
    }
    //console.log(cards)

    return (
        <div className="createSet">
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="createSet-main">
                <p className='primary-p'>create a set</p>
                <form className='create-set-form' onSubmit={createStudySet}>
                    <label>
                        Study set title:
                        <input 
                            type='text'
                            name='setTitle'
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Description: 
                        <textarea 
                            name='setDescr'
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Image url: 
                        <input
                            type='text' 
                            name='img'
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
                                                // required
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
                                            />
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                    

                   
                    <div className="create-form-btn-container">
                        <button type='button' onClick={addCardInput} className='add-card-btn'>Add a card</button>
                        <button type='submit' className='green-btn'>create</button>
                    </div>
                    
                </form>
            </div>     
        </div>
    )
}