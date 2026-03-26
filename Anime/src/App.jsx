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
      <p className="read-the-docs">
        Click on the Vite and and logo </p>
        <h4>Lets GO and start the hardworking for chasing your goals. and focus on that</h4>
        <p>lets work on this</p>
      <h4>lets update the github daily  and goes on maximum lets gooo to the space upload the hey ok lets lets gooooooooo git now yeah finally back to the basics lets schedule our routine why me pc is laging today is the day of eid and evey muslim celebrate that day and spreading happiness lets take a steo</h4>
    </>
  )
}

export default App
