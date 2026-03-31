import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
        <p>hey</p>
        <h1>Heading</h1>
        <p>paragraph</p>
        <p>lorem is the sample text</p>
        <p>hey how are you are you good</p>
        <h1>listing</h1>
        <button>Submit</button>
        <buttton>Click Me</buttton>
        <p>lets goooooo</p>
        <p>ok lets goooo</p>
        <ul>


          <li>Home</li>
          <li>Our story</li>
          <li>Contact</li>
        </ul>

    </>
  )
}

export default App
