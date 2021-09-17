import React, { Component } from 'react';

class Rights extends Component {
  constructor(props) {
    super(props);
  }

  getRights () {
    return(
      <>
        <dt>Rights</dt>
        <dd>{this.getIconUri()}</dd>
      </>
    )
  }

  getIconUri () {
    if (this.props.rights.includes('creativecommons')) {
      return (
        <figure>
          <img src={`https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/${this.props.rights.split('/')[4]}.svg`} alt={this.props.rights.split('/')[4]}/>
        </figure>
      )
    }
    else {
      return this.props.rights
    }
  }

  render() {

    return this.getRights()
  }
}

export default Rights;
