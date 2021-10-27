import { Link, BrowserRouter } from "react-router-dom";
import Routes from '../../Routes';

import './Navbar.css';

export default function Navbar() {
  return (
    
      <BrowserRouter >
        <div className="nav">
          <Link to="/about" className = "nav-link">About</Link>
          <Link to="/blog" className = "nav-link">Blog</Link>
          <Link to="/contact" className = "nav-link">Contact</Link>
          <Link to="/projects" className = "nav-link">Projects</Link>
          <Link to="/" className = "nav-link">Home</Link>
        </div>
        <Routes/>
      </BrowserRouter>
    
  )
}