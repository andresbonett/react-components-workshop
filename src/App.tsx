import { useState } from 'react'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="ext-3xl font-bold underline">React Components Workshop</h1>
      <div className="card">
        <button
          className="btn btn-primary"
          onClick={() => {
            setCount(count => count + 1)
          }}
        >
          count is hello {count}
        </button>
        <p className="mt-8">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
