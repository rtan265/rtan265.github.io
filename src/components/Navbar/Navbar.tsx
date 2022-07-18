import { Link } from "react-router-dom";

// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import './Navbar.css';

export default function Navbar() {
  return (
    <div className="main-nav">
      <div className="left-side">
        <Link to="/" className = "nav-link">🏠 Home</Link>
        <Link to="/blog" className = "nav-link">📰 Blog</Link>
        <Link to="/projects" className = "nav-link">🚧 Projects</Link>
      </div>
      <div className="right-side">
        <AwesomeButton type="primary">
          <a href="mailto:ryan.tan181818@gmail.com?subject=Contact from website">Email me!</a>
        </AwesomeButton>
      </div>
    </div>
  )
}
