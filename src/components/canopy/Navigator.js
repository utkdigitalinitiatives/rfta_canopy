import React, { useEffect, useState } from 'react'
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs"
import NavigatorPanel from "./NavigatorPanel"
import Description from "./Description"

const Navigator = ({ node, structures, time, transcripts, updateTime, videoHeight }) => {
  const [tabs, setTabs] = useState(["Details"])
  const [data, setData] = useState([])

  useEffect(() => {
    hasTranscripts(transcripts)
    hasRanges(structures)
  }, [])

  const isArray = value => Array.isArray(value)

  const hasTranscripts = (transcripts, translation=false) => {
    if (!isArray(transcripts)) return
    if (!transcripts.length) return

    if (transcripts.length === 2) {
      translation = true
    }

    transcripts.map(data => buildTranscript(data.iiif, data.text, translation))
  }

  const buildTranscript = (iiif, transcript, translation) => {
    const label = (translation && iiif.language === 'en') ? 'Translation' : 'Transcript'
    // exit if we already created this tab
    if (tabs.includes(label)) return

    const sequence = transcript.map(data => ({
      label: data.text,
      t: {
        label: data.startTime,
        start: cleanUpTimes(data.startTime),
        end: cleanUpTimes(data.endTime),
      },
    }))

    addSet(label, "vtt", sequence)
  }

  const hasRanges = structures => {
    if (!isArray(structures)) return
    if (!structures.length) return

    structures.map(data => buildRange(data))
  }

  const buildRange = range => {
    const label = range.label.en[0]
    // exit if we already created this tab
    if (tabs.includes(label)) return

    const sequence = range.items.map(data => {
      const times = data.items[0].id.split('=')[1].split(',')

      return {
        label: data.label.en[0],
        t: {
          label: times[0],
          start: cleanUpTimes(times[0]),
          end: cleanUpTimes(times[1]),
        },
      }
    })

    addSet(label, "range", sequence)
  }

  const cleanUpTimes = value => {
    const duration = value.split(':')
    const hours = parseInt(duration[0]) * 60 * 60
    const minutes = parseInt(duration[1]) * 60

    return hours + minutes + parseInt(duration[2])
  }

  const addSet = (label, type, sequence) => {
    const set = {
      label,
      type,
      sequence,
    }

    setTabs(tabs => [...tabs, label])
    setData(data => [...data, set])
  }

  const renderTabs = tabs => (
    <List className="canopy-tabs--list justify-content-around">
      {tabs.map((label, index) => (
        <Trigger
          value={`tab-${index}`}
          className="tab-labels text-center"
          key={index}
        >
          {label}
        </Trigger>
      ))}
    </List>
  )

  const addNewPanel = panels => ([
    {
      label: "Details",
      type: "",
      sequence: []
    },
    ...panels,
  ])

  const renderPanels = (panels, time) => {
    const newPanels = addNewPanel(panels)

    return newPanels.map((panel, index) => (
      <>
        <Content value={`tab-${index}`} key={index}>
          {index === 0 ? (
            <Description node={node} />
          ) : (
            <NavigatorPanel
              data={panel}
              time={time}
              index={index}
              updateTime={e => updateTime(e)}
              key={index}
              videoHeight={videoHeight}
            />
          )}
        </Content>
      </>
    ))
  }

  const renderNavigator = (data, tabs, time) => {
    if (!data || !tabs) return

    return (
      <Root className="canopy-tabs" defaultValue="tab-0">
        {renderTabs(tabs)}
        <div className="canopy-tabs--content">
          {renderPanels(data, time, tabs)}
        </div>
      </Root>
    )
  }

  return (
    <aside className="canopy-navigator pb-5">
      {renderNavigator(data, tabs, time)}
    </aside>
  )
}

export default Navigator
