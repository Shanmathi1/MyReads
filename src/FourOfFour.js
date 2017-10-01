import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class FourOfFour extends Component {
    render() {
        return (
            <div>
                <b> 404 Page Not Found </b><br/><br/>
                <Link to="/">
                    <button><b>Back to Library</b></button>
                </Link>
            </div>
        )
    }
}

export default FourOfFour;