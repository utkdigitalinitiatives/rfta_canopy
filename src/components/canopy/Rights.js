import React, { Component } from 'react';

class Rights extends Component {
  constructor(props) {
    super(props);
  }

  getRights () {
    return(
      <>
        <dt>Rights</dt>
        <dd>{this.props.rights}</dd>
      </>
    )
  }

  render() {

    return this.getRights()
  }
}

export default Rights;
