import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faMedium, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./About.css";

export default function About() {
  return (
    <div>
        <h1 className="about-page-header">Hi! I'm Ryan Tan.</h1>
        <p className="about-page-body">I'm a 2021 graduate from the University of Auckland, who will soon be starting as an associate solutions architect at Amazon Web Services in Auckland. I built this website as a platform for me to experiment different technical ideas, as well as share my personal thoughts on certain topics.</p>
          
        <div className="about-page-socials">
          <a href="http://www.linkedin.com/in/rtan18">
            <FontAwesomeIcon icon={ faLinkedin } />
          </a> 
          
          <a href="http://www.medium.com/@rtan265">
            <FontAwesomeIcon icon={ faMedium } />
          </a>

          <a href="http://www.github.com/rtan265">
            <FontAwesomeIcon icon={ faGithub } />
          </a>
        </div>
    </div>
  )
}