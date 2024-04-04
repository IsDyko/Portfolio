import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="container">
          <h1>Diogo Martins</h1>
          <nav className='list'>
              <ul>
                  <li><a href="#">Accueil</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default App
