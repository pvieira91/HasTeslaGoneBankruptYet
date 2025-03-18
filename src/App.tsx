import stupidMuskSrc from './assets/musk.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Has Tesla Gone Bankrupt Yet?</h1>
          <img src={stupidMuskSrc} className="logo" alt="Stupid Musk" style={{ width: 'auto', height: '80vh' }}/>
      </div>
    </>
  )
}

export default App
