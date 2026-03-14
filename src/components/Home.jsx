import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm Sam</h1>
          <p className="subtitle">Full Stack Developer</p>
          <p className="description">
            I create beautiful, functional web applications using modern technologies.
            Passionate about clean code, user experience, and bringing ideas to life through technology.
          </p>
          <Link to="/contact" className="cta-button">Get In Touch</Link>
        </div>
      
      </div>
    </div>
  )
}

export default Home