import RyanProfilePicture from '../../images/Ryan.jpg';
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className = "home-div">
        <img alt = "Ryan" className = "ryan-photo" src = { RyanProfilePicture }/>
        <p className = "ryan-intro-text">
          Hi! I'm Ryan Tan.
          <h4>
            I'm a 2021 graduate from the University of Auckland, who will soon be starting as an 
            associate solutions architect at Amazon Web Services in Auckland. I built this website as a 
            platform for me to experiment different technical ideas, as well as share my personal thoughts on certain topics.
          </h4>
        </p>
      </div> 
    </>
  )
}