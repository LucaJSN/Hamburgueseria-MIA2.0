import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import Promociones from './components/Promociones'
import Products from './components/Products'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header
         titulo='Hamburguesería MIA'
         boton={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/></svg>}
         logo= {<img src={logo} className="logo" alt="..." />}
        />
      </div>
      <div>
        <Promociones/>
        <Products/>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="..." />
        </a>
        {/* <a href="https://react.dev" target="_blank"></a> */}
      </div>
      <h1>Proyecto Menu Digital</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
