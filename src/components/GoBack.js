import React, {Component} from "react";
import {Link} from 'react-router-dom';

class GoBack extends Component {
  render() {
    return (
      <div className="app__go-back">
        <Link to="/" className="app__go-back-link">Go Back :D</Link>
      </div>
    );
  }
}

export default GoBack;