import { Link, BrowserRouter } from "react-router-dom";

import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/about" className = "nav-link">About</Link>
        <Link to="/blog" className = "nav-link">Blog</Link>
        <Link to="/contact" className = "nav-link">Contact</Link>
        <Link to="/projects" className = "nav-link">Projects</Link>
        <Link to="/" className = "nav-link">Home</Link>
      </BrowserRouter>
    </div>
  )
}