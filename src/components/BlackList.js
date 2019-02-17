import React, {Component} from "react";
import PropTypes from 'prop-types';

class BlackList extends Component {
  render() {
    const {blackResults} = this.props;
    return (
        <ul className="app__list">
            {blackResults.map(item => {
                return (
                    <li className="app__list-item" id={item.id} key={item.id}>
                        <div className="person">
                            <h2 className="person__name">{`${item.name.first} ${item.name.last}`}</h2>
                            <img className="person__image" src={item.picture.medium} alt={`${item.name.first} ${item.name.last}`} />
                            <div className="person__age">{item.dob.age}</div>
                            <div className="person__city">{item.location.city}</div>
                        </div>
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