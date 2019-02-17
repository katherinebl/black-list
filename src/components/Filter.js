import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {keyUpAction} = this.props;
    return (
        <div className="app__filter">
            <div className="app__filter-item">
                <input className="app__filter-full-name" type="text" placeholder="Search for the guilty..." onKeyUp={keyUpAction} />
            </div>
        </div>
    );
  }
}

Filter.propTypes = {
    keyUpAction: PropTypes.func.isRequired
}
export default Filter;