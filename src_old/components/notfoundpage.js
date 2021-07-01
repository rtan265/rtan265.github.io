import React from 'react';
import { Link } from 'react-router-dom';

import Penguins from '../images/penguinsFix.png';

class NotFoundPage extends React.Component{
    render(){
        return (
            <div>
                <h1 style={{textAlign:'center'}}>404</h1>
                <h4 style={{textAlign:'center'}}>Oh no! Something went wrong.</h4>
                <img className = "penguins-not-found" alt = "Penguins fixing" src={Penguins} />
                <p style={{textAlign: 'center'}}>
                    Don't worry, the penguins have been deployed to fix this error!
                    <p>
                        In the meantime, please click <Link to="/">here</Link> to return home.
                    </p>
                </p>
            </div>
        );
    }
}

export default NotFoundPage;