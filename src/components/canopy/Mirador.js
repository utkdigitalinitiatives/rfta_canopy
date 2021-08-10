import React, { Component } from 'react';
import mirador from 'mirador';
import PropTypes from 'prop-types';
import * as AspectRatio from "@radix-ui/react-aspect-ratio"

class Mirador extends Component {
  constructor(props) {
    super(props);


    this.miradorInstance = null;
  }

  handleInstance = () => {
    const { config, plugins } = this.props;
    this.miradorInstance = mirador.viewer(config, plugins);
  }

  componentDidMount() {
    this.handleInstance()
  }

  render() {
    const { config } = this.props;
    return (
      <div className="canopy-mirador">
        <AspectRatio.Root ratio={100 / 61.8}>
          <div id={config.id} />
        </AspectRatio.Root>
      </div>
    )
  }
}

export default Mirador;
