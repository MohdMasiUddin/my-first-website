import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './about.jsx'
import Contact from './contact.jsx'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>SAM</div>
      <h1>SAM</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          SAM
        </p>
      </div>
      <p className="read-the-docs">
        SAM
      </p>
    </>
  )
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
