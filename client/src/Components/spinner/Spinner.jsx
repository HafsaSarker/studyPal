import './Spinner.css'

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
        <div className="loadingSpinner"></div>
        <p>loading...</p>
    </div>
  )
}

export default Spinner