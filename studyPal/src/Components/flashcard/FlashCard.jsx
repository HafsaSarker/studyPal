import './FlashCard.css'

function FlashCard({term, definition}) {
  return (
    <div className="flip-card">
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