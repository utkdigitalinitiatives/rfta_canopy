import React, { Component } from 'react';
import * as Tabs from "@radix-ui/react-tabs"
import Structures from "./Structures"

class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state ={
      tabs: [],
      content: []
    }
  }

  hasTranscripts = (items) => {
    // console.log(items[0].items[0])
  }

  getTranscript = (transcript) => {
    // console.log(items[0].items[0])
  }

  hasRanges = (structures) => {
    // console.log(items[0].items[0])
  }

  buildRanges = (range) => {
    // console.log(items[0].items[0])
    // this.setState({
    //   tabs: null,
    // })
  }

  componentDidMount() {
    // build according to https://gist.github.com/mathewjordan/c566bf3287e0d6b2d1af0dc4673dbd2d
    this.hasTranscripts(this.props.items);
    this.hasRanges(this.props.structures);
    console.log(this.props.structures)
  }

  render() {

    return (
      <aside className="canopy-navigator">
        <Tabs.Root className="canopy-tabs" defaultValue="chapters">
          <Tabs.List className="canopy-tabs--list">
            {this.buildTabs(this.state.tabs)}
            <Tabs.Trigger value="chapters">Chapters</Tabs.Trigger>
            <Tabs.Trigger value="transcript">Transcript</Tabs.Trigger>
          </Tabs.List>
          <div className="canopy-tabs--content">
            <Tabs.Content value="chapters">
              <Structures node={this.props.node} />
            </Tabs.Content>
            <Tabs.Content value="transcript">[transcript/annotations]</Tabs.Content>
          </div>
        </Tabs.Root>
      </aside>
    )
  }
}

export default Navigator;
