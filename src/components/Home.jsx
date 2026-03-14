import { Link } from 'react-router-dom'
import Education from './Education'
import Projects from './Projects'
import Experience from './Experience'

function Home() {
  const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Mohd Masi Uddin Resume.pdf'; // Path to your resume PDF in the public folder
    link.download = 'Mohd_Masi_Uddin_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <div className="hero-buttons">
            <Link to="/contact" className="cta-button">Get In Touch</Link>
            <button onClick={downloadResume} className="resume-button">Download Resume</button>
          </div>
        </div>
        <Education />
        <Projects />
        <Experience />
      </div>
    </div>
  )
}

export default Home