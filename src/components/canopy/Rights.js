import React, { Component } from 'react';
import { getRights } from "../../utilities/rightslookup"

class Rights extends Component {
  constructor(props) {
    super(props);

    this.rights = this.checkRightsSet(this.props.rights)
  }

  getRights () {
    return (
      <>
        <dt>Rights</dt>
        <dd>{this.getIconUri()}</dd>
      </>
    )
  }

  checkRightsSet (uri) {
    if (uri === null || typeof uri === 'undefined') {
      return "http://rightsstatements.org/vocab/CNE/1.0/"
    }
    else {
      return uri
    }
  }

  getIconUri () {
    let rights_identifier = this.rights.split('/')[4]
    if (this.rights.includes('creativecommons')) {
      const object_rights = getRights(rights_identifier, 'creative_commons')
      return (
        <>
          <figure className="rights-statement">
            <a href={this.rights}>
              <img src={`https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/${rights_identifier}.svg`} alt={rights_identifier}/>
            </a>
          </figure>
          <p>
            <a href={this.rights}>{object_rights["title"]}</a>
          </p>
        </>
      )
    }
    else {
      const object_rights = getRights(rights_identifier, 'rights_statements')
      return (
        <>
          <figure className="rights-statement">
            <a href={this.rights}>
              <img src={`https://rightsstatements.org/files/buttons/${rights_identifier}.dark-white-interior-blue-type.svg`} alt={object_rights["skos:prefLabel"]}/>
            </a>
          </figure>
          <p>
            <a href={this.rights}>{object_rights["skos:prefLabel"]}</a>: {object_rights["definition"]}
          </p>
        </>
      )
    }
  }

  render() {
    return this.getRights(this.rights)
  }
}

export default Rights;
