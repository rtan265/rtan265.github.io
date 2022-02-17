import RyanProfilePicture from '../../images/Ryan.jpg';
import "./Home.css";

export default function Home() {
  return (
    <div className = "container-ryan-photo">
      <div className = "home-div">
        <img alt = "Ryan" className = "ryan-photo" src = { RyanProfilePicture }/>
        <p className = "ryan-intro-text">
          Hi! I'm Ryan Tan.
        </p>
      </div> 
    </div>
  )
}