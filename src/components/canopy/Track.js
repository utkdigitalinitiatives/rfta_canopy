import React, { Component } from 'react';

class Track extends Component {

  render() {

    const {label, src, srclang} = this.props.data

    return (
      <track src={src}
             label={label}
             srcLang={srclang}
      />
    )
  }
}

export default Track;
