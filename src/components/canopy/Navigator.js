import React, { Component } from 'react';
import * as Tabs from "@radix-ui/react-tabs"
import NavigatorPanel from "./NavigatorPanel"
import Description from "./Description"

class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state ={
      tabs: ["Details"],
      data: [],
      loaded: false,
      defaultOpen: false
    }

    this.updateTime = this.updateTime.bind(this);
  }

  hasTranscripts = (transcripts, translation = false) => {
    if (Array.isArray(transcripts) ) {
      if (transcripts.length > 0) {
        let component = this
        if (transcripts.length === 2) {
          translation = true
        }
        transcripts.map(function(data) {
          return component.buildTranscript(data.iiif, data.text, translation)
        })
      }
    }
  }

  buildTranscript = (iiif, transcript, translation) => {
    let component = this

    let label = 'Transcript'
    if (translation && iiif.language === 'en') {
      label = "Translation"
    }

    const sequence = transcript.map(function(data, index) {
      let values = {}
      values.t = {}
      values.label= data.text
      values.t.label = data.startTime
      values.t.start = component.cleanUpTimes(data.startTime)
      values.t.end = component.cleanUpTimes(data.endTime)
      return values
    })
    this.addSet(label, "vtt", sequence)
  }

  hasRanges = (structures) => {
    if (Array.isArray(structures) ) {
      if (structures.length > 0) {
        let component = this
        structures.map(function(data) {
          return component.buildRange(data)
        })
      }
    }
  }

  buildRange = (range) => {
    let component = this

    const sequence = range.items.map(function(data) {
      let values = {}
      let times = data.items[0].id.split('=')[1].split(',');
      values.t = {}
      values.label= data.label.en[0]
      values.t.label = times[0]
      values.t.start = component.cleanUpTimes(times[0])
      values.t.end = component.cleanUpTimes(times[1])
      return values
    })

    this.addSet(range.label.en[0], "range", sequence)
  }

  cleanUpTimes = (value) => {
    let duration = value.split(':')
    let hours = parseInt(duration[0]) * 60 * 60
    let minutes = parseInt(duration[1]) * 60
    return hours + minutes + parseInt(duration[2])
  }

  addSet = (label, type, sequence) => {
    let set = {}
    set.label = label
    set.type = type
    set.sequence = sequence

    let {tabs, data} = this.state
    tabs.push(label)
    data.push(set)

    this.setState({
      tabs: tabs,
      data: data,
      loaded: true
    })
  }

  renderTabs = (tabs) => {
    return (
      <Tabs.List className="canopy-tabs--list justify-content-around ">
        {tabs.map(function(label, index) {
            return (
              <Tabs.Trigger value={`tab-${index}`} className="tab-labels text-center" key={index}>
                {label}
              </Tabs.Trigger>
            )
        })}
      </Tabs.List>
    )
  }

  addNewPanel = (panels) => {
      const newPanels = [{
            label: "Details",
            type: "",
            sequence: []
          }, ...panels]
    return newPanels
  }

  renderPanels = (panels, time) => {
    let component = this
    let { node } = this.props
    const newPanels = this.addNewPanel(panels)
    return newPanels.map(function(panel, index) {
      return (
        <>
          <Tabs.Content value={`tab-${index}`} key={index}>
            {index === 0 ? (
              <Description node={node}/>
            ) : (
              <NavigatorPanel
                data={panel}
                time={time}
                index={index}
                updateTime={component.updateTime.bind(this)}
                key={index}
                videoHeight={component.props.videoHeight}
              />
            )}
          </Tabs.Content>
        </>
      )
    });
  }

  renderNavigator = (data, tabs, t) => {
    if (data && tabs) {
      return (
        <Tabs.Root className="canopy-tabs" defaultValue="tab-0">
          {this.renderTabs(tabs)}
          <div className="canopy-tabs--content">
            {this.renderPanels(data, t, tabs)}
          </div>
        </Tabs.Root>
      )
    }
  }

  updateTime (value) {
    this.props.updateTime(value)
  }

  componentDidMount() {
    this.hasTranscripts(this.props.transcripts);
    this.hasRanges(this.props.structures);
  }

  render() {

    let {data, tabs} = this.state
    const {t} = this.props

    return (
      <aside className="canopy-navigator pb-5">
        {this.renderNavigator(data, tabs, t)}
      </aside>
    )
  }
}

export default Navigator;
