import React, { Component } from 'react';
import Viewer from "./Viewer"
import { fromVtt } from "subtitles-parser-vtt"
import Details from "../layout/details"

class DigitalObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transcripts: []
    }
  }

  getTranscripts = (transcripts) => {
    let component = this
    transcripts.map(function(transcript) {
      component.fetchVTT(transcript)
    });
  }

  fetchVTT = (body) => {
    fetch(body.id, {
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
          transcript.iiif = body
          transcript.text = fromVtt(data)
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
    this.getTranscripts(this.props.node.transcripts)
  }

  render() {
    if (this.state.transcripts.length === this.props.node.transcripts.length) {
      return (
        <Viewer node={this.props.node} transcripts={this.state.transcripts} />
      )
    } else {
      return 'loading component'
    }
  }
}

export default DigitalObject
