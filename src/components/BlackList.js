import React, {Component} from "react";
import BlackPersons from './BlackPersons'
import PropTypes from 'prop-types';

class BlackList extends Component {
  render() {
    const {blackResults} = this.props;
    return (
        <ul className="app__list">
            {blackResults.map(item => {
                return (
                    <li className="app__list-item" id={item.id} key={item.id}>

                    <BlackPersons 
                        fullName = {`${item.name.first} ${item.name.last}`}
                        image = {item.picture.medium} alt={`${item.name.first} ${item.name.last}`}
                        age = {item.dob.age}
                        city = {item.location.city}
                    />


                    </li>
                );
            })}
        </ul>
    );
  }
}

BlackList.propTypes = {
    blackResults : PropTypes.arrayOf(PropTypes.object)
}

export default BlackList;