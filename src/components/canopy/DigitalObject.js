import React, { Component } from 'react';
import Viewer from "./Viewer"
import { fromVtt } from "subtitles-parser-vtt"
import DigitalObjectHeader from "./DigitalObjectHeader"
import BloomIIIF from "@samvera/bloom-iiif";

class DigitalObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transcripts: [],
      mobileNavigatorStatus: false
    }
  }

  getTranscripts = (transcripts) => {
    let component = this
    transcripts.map(function(transcript) {
      return component.fetchVTT(transcript)
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

  mobileNavigatorStatus(value) {
    this.setState({
      mobileNavigatorStatus: value
    })
  }

  componentDidMount() {
    this.getTranscripts(this.props.node.transcripts)
  }

  render() {

    const {node} = this.props
    const {id, manifestId, label} = node;
    const collectionId = `https://digital.lib.utk.edu/assemble/collection/collections/rfta`;

    if (this.state.transcripts.length === this.props.node.transcripts.length) {
      return (
        <article className="canopy-manifest" data-mobile-navigator={this.state.mobileNavigatorStatus}>
          <DigitalObjectHeader title={label.en[0]}
                               manifest={manifestId} />
          <Viewer node={this.props.node}
                  transcripts={this.state.transcripts}
                  mobileNavigatorStatus={this.mobileNavigatorStatus.bind(this)}
                  id={id}
                  node2={node}
          />
          <BloomIIIF collectionId={collectionId} />
        </article>
      )
    } else {
      return (
        <div className="py-5 mx-auto text-center loading">
          <h4>Loading Interview<span class="one">.</span><span class="two">.</span><span class="three">.</span></h4>
        </div>
      )
    }
  }
}

export default DigitalObject
