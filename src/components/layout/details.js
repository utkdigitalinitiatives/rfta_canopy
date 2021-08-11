import * as React from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { getValue } from "../../utilities/iiif"


const Details = ({ id, node }) => {

  const {manifestId, label, summary} = node;

  return (
    <div className="canopy-details">
      <Tabs.Root className="canopy-tabs" defaultValue="details">
        <Tabs.List className="canopy-tabs--list">
          <Tabs.Trigger value="details">Details</Tabs.Trigger>
          <Tabs.Trigger value="transcript">Transcript</Tabs.Trigger>
          <Tabs.Trigger value="translation">Translation</Tabs.Trigger>
        </Tabs.List>
        <div className="canopy-tabs--content">
          <Tabs.Content value="details">{getValue(summary, 'en')}</Tabs.Content>
          <Tabs.Content value="transcript">[full transcript]</Tabs.Content>
          <Tabs.Content value="translation">[translations?]</Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  )
}

export default Details