
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nginx + React</h1>
      <div className="card">
        <p>
          Hello From Ngnix Docker Container
        </p>
      </div>

    </>
  )
}

export default App
