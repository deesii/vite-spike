import './App.css'
import { Link } from "react-router-dom"
import linkedinLogo from './assets/linkedin.svg'
import githubLogo from './assets/github.svg'
import HomeNavBar from './components/HomeNavBar'
import CvProjects from './components/CvProjectsNavBar'


function App() {

  return (
    <>
      <Link to="/"><h1>deesii</h1></Link>
      <div className = "contact-row">
      <a className = "contact-link" href="https://www.linkedin.com/in/donna-cheng-deesii/" rel="nofollow noreferrer">
        <img src={ linkedinLogo } alt="LinkedIn Image" />
      </a>
      <a className = "contact-link" href="https://github.com/deesii" rel="nofollow noreferrer">
        <img src={githubLogo} alt="GitHub Image" />
      </a>
      </div>  
      <HomeNavBar />



    </>
  )
}

export default App
