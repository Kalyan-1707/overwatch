import { useState } from 'react'
import './App.css'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
    <div className='App'>
       <button className='side-bar-btn' onClick={() =>setShowSidebar(!showSidebar)}>
           &lt;
           </button>
       {showSidebar && <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
         
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>}
    </div>
    </>
  )
}

export default App
