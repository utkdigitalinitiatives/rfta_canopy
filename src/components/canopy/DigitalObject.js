import React, { Component } from 'react';
import Viewer from "./Viewer"

class DigitalObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transcripts: []
    }
  }

  getTranscripts = (node) => {
    let component = this
    if (Array.isArray(node.items) ) {
      let items = node.items[0].items[0].items
      items.map(function(element) {
        if (element.motivation === 'supplementing' && element.body[0].format === 'text/vtt') {
          console.log(element.body[0].id)
          component.fetchVTT(element.body[0].id, element)
        }
      });
    }
  }

  fetchVTT(uri, meta) {
    fetch(uri, {
      headers : {
        'Content-Type': 'text/plain',
        'Accept': 'application/json'
      }
    })
      .then(response => response.text())
      .then(data => {
        let transcripts = this.state.transcripts
        if (transcripts) {
          let transcript = {}
          transcript.iiif = meta
          transcript.text = data
          transcripts.push(transcript)
        }
        this.setState({
          transcripts
        });
      })
      .catch(err => console.error(this.props.url, err.toString()));

    return null
  }

  componentDidMount() {
    this.getTranscripts(this.props.node)
  }

  render() {

    return (
      <Viewer node={this.props.node} transcripts={this.state.transcripts} />
    )
  }
}

export default DigitalObject
