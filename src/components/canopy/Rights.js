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
    let rights_identifier = this.props.rights.split('/')[4]
    if (this.props.rights.includes('creativecommons')) {
      return (
        <figure class="rights-statement">
          <a href={this.props.rights}>
            <img src={`https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/${rights_identifier}.svg`} alt={rights_identifier}/>
          </a>
        </figure>
      )
    }
    else {
      return (
        <figure class="rights-statement">
          <a href={this.props.rights}>
            <img src={`https://rightsstatements.org/files/buttons/${rights_identifier}.dark-white-interior-blue-type.svg`} alt={rights_identifier}/>
          </a>
        </figure>
      )
    }
  }

  render() {

    return this.getRights()
  }
}

export default Rights;
