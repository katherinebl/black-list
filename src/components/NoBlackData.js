import React, { Component, Fragment } from "react";
import GoBack from './GoBack';

class NoBlackData extends Component {
  render() {
    return (
      <Fragment>
        <p>There is no available data</p>
        <GoBack />
      </Fragment>
    );
  }
}

export default NoBlackData;