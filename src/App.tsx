import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const judge = (count: number) => {
    console.log("in jedge")
    if (count === 15) {
      return (true)
    }
    else {
      return false
    }
    // count === 15 ? true : false
  }

  const countButton = () => {
    return (
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count up
        </button>
        <button onClick={() => setCount(count - 1)}>
          count down
        </button>
      </div>
    )
  }
  // const countButton = <div>hehehe</div>

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>練習</h1>
      <div className="card">
        <h2>{count}</h2>
        <div>
          {count % 3 === 0 ? "Fizz" : null}
          {count % 5 === 0 ? "Buzz" : null}
        </div>
        <>
        {
          judge(count) ? null : countButton()
        }
        </>

        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
    //  <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //     </p>
    </div>
  )
}

export default App
