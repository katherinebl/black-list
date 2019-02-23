import React, {Component} from "react";
import PropTypes from 'prop-types';

class BlackPerson extends Component {
  render() {
    const {fullName, image, age, city} = this.props;
    return (
        <div className="person">
            <h2 className="person__name">{fullName}</h2>
            <img className="person__image" src={image} alt={fullName} />
            <div className="person__age">{age}</div>
            <div className="person__city">{city}</div>
        </div>
    );
  }
}

BlackPerson.propTypes = {
    fullName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired
}

export default BlackPerson;