import './FlashCard.css'

function FlashCard({term, definition, currCard, size}) {
  return (
    <div className="flip-card">
        <p className='cardNum'>{currCard}/{size}</p>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <p>{term}</p>
            </div>
            <div className="flip-card-back">
                <p>{definition}</p>
            </div>

        </div>
    </div>
    )
}

export default FlashCard