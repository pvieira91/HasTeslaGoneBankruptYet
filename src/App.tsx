import stupidMuskSrc from './assets/musk.jpg'
import './App.css'

function App() {

  return (
    <>
      <div className="m-container">
        <h1 className="m-title">Has Tesla Gone Bankrupt Yet?</h1>
        <div className="m-musk-container">
          <img src={stupidMuskSrc} className="m-musk" alt="Stupid Musk" />
        </div>
      </div>
    </>
  )
}

export default App
