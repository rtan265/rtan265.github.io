import RyanProfilePicture from '../../images/RyanT.png';
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className = "home-div">
        <img alt = "Ryan" className = "ryan-photo" src = { RyanProfilePicture }/>
        <p className = "ryan-intro-text">
          Hi! I'm Ryan Tan.
          <h4 className = "ryan-intro-background">
            I'm a 2021 graduate from the University of Auckland, who will soon be starting as an 
            associate solutions architect at Amazon Web Services in Auckland. I built this website as a 
            platform for me to experiment different technical ideas, as well as share my personal thoughts on certain topics.
            <p>
              Update July 2022: This website is currently under development.
            </p>
          </h4>
        </p>
      </div>
    </> 
  )
}

