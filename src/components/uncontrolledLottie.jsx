import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/18127-book-animation.json'

class UncontrolledLottie extends React.Component {
    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
      
        return(
            <div>            
              <Lottie options={defaultOptions}
                    height={150}
                    width={150}
              />
            </div>
        )
    }
}

export default UncontrolledLottie;