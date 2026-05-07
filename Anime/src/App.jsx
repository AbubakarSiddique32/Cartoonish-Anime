import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './Componenets/FirstComponent'
import SecondComponent from './Componenets/SecondComponent'

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
        <li>Our Collections</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Faq</li>
        </ul>

        <div>
        <h1>Git-Hub </h1>
        <p>This is the dumpy code for updating the git hub </p>
        <button>Click Me</button>
        <a href=''>Add To Cart</a>
        </div>
        <div className='new-div'></div>
        <FirstComponent />
        <SecondComponent/>

    </>
  )
}

export default App
