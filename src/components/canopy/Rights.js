import React, { Component } from 'react';
import { getRights } from "../../utilities/rightslookup"

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
      const object_rights = getRights(rights_identifier, 'creative_commons')
      return (
        <>
          <figure class="rights-statement">
            <a href={this.props.rights}>
              <img src={`https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/${rights_identifier}.svg`} alt={rights_identifier}/>
            </a>
          </figure>
          <p>
            <a href={this.props.rights}>{object_rights["title"]}</a>
          </p>
        </>
      )
    }
    else {
      const object_rights = getRights(rights_identifier, 'rights_statements')
      return (
        <>
          <figure class="rights-statement">
            <a href={this.props.rights}>
              <img src={`https://rightsstatements.org/files/buttons/${rights_identifier}.dark-white-interior-blue-type.svg`} alt={object_rights["skos:prefLabel"]}/>
            </a>
          </figure>
          <p>
            <a href={this.props.rights}>{object_rights["skos:prefLabel"]}</a>: {object_rights["definition"]}
          </p>
        </>
      )
    }
  }

  render() {

    return this.getRights()
  }
}

export default Rights;
