import React, { Component } from 'react';
import * as Tabs from "@radix-ui/react-tabs"
import Structures from "./Structures"

class Navigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside className="canopy-navigator">
        <Tabs.Root className="canopy-tabs" defaultValue="chapters">
          <Tabs.List className="canopy-tabs--list">
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
