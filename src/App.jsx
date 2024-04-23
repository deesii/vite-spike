import './App.css'
import { Link } from "react-router-dom"
import linkedinLogo from './assets/linkedin.svg'
import githubLogo from './assets/github.svg'
import HomeNavBar from './components/homenavbar'



function App() {

  return (
    <>
      <Link to="/"><p><h1>Donna Cheng</h1></p><p>/deesii</p></Link>
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
