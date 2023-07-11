import { useParams } from 'react-router-dom'
import SideNav from '../../Components/sideNav/SideNav'
import axios from 'axios'
import { path } from '../../API_PATH'
import { useEffect, useState } from 'react'
import FlashCard from '../../Components/flashcard/FlashCard'
import Spinner from '../../Components/spinner/Spinner'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsShuffle } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import './StudySet.css'

export default function StudySet () {
    const {id} = useParams()

    const [studySet, setStudySet] = useState(null)
    const [cards, setCards] = useState(null)
    const [cardIndx, setCardIndx] = useState(0)
    const { token } = useSelector((state) => state.auth)

    useEffect(() => {
        const fetchStudySet = async() => {
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }

            try {
                const {data} = await axios.get(`${path}/${id}`, config)

                setStudySet(data.studySet)
                setCards(data.studySet.flashCards[0])
            } catch (error) {
                console.log(error);
            }
        }

        fetchStudySet()
    },[])

    function forward(){
        if(cardIndx >= (cards.length-1)){
          return;
        }
        
        setCardIndx(cardIndx + 1);
    }

    function backward(){
        if(cardIndx <= 0){
          return;
        }
        setCardIndx(cardIndx - 1);
    }

    function shuffle() {
        const randNum = Math.floor(Math.random() * (cards.length));

        setCardIndx(randNum);
    }

    return (
        <div className='studySet'>
            <div className="side-nav">
                <SideNav />
            </div>
            
            <div className="studySet-main">
                {
                    !studySet ?
                    (
                        <div className="spinner">
                            <Spinner />
                        </div>
                    ):
                    (
                        <>
                            <h2 className='study-cont-Title'>{studySet.setTitle}</h2>

                            <p className='study-cont-p'>{studySet.setDescr}</p>

                            {
                                cards && 
                                <FlashCard
                                    term={cards[cardIndx].term}
                                    definition={cards[cardIndx].definition}
                                    currCard={cards[cardIndx].cardNum}
                                    size={cards.length}
                                />
                            }
                            <div className="study-set-btn-cont">
                                <button onClick={backward}>
                                    <span>
                                        <BsFillArrowLeftCircleFill/>
                                    </span>
                                </button>
                                <button onClick={shuffle}>
                                    <span>
                                        <BsShuffle/>
                                    </span>
                                </button>
                                <button onClick={forward}>
                                    <span>
                                        <BsFillArrowRightCircleFill />
                                    </span>
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}