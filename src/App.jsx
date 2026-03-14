import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="container"><Education /></div>
     <div className="container"><Projects /></div>
      <div className="container"><Experience /></div>
      <Routes>
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
