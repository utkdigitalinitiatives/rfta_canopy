import React, { Component } from 'react';
import * as Tabs from "@radix-ui/react-tabs"
import NavigatorPanel from "./NavigatorPanel"

class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state ={
      tabs: [],
      data: [],
      loaded: false
    }
  }

  hasTranscripts = (items) => {
    // console.log(items[0].items[0])
  }

  getTranscript = (transcript) => {
    // console.log(items[0].items[0])
  }

  hasRanges = (structures) => {
    if (Array.isArray(structures) ) {
      if (structures.length > 0) {
        let component = this
        structures.map(function(data) {
          component.buildRange(data)
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
      <Tabs.List className="canopy-tabs--list">
        {tabs.map(function(label) {
            return (
              <Tabs.Trigger>
                {label}
              </Tabs.Trigger>
            )
        })}
      </Tabs.List>
    )
  }

  renderPanels = (panels, time) => {
    return panels.map(function(panel, index) {
      return (
        <Tabs.Content>
          <NavigatorPanel data={panel}
                          time={time}
                          key={index}
          />
        </Tabs.Content>
      )
    });
  }

  componentDidMount() {
    // this.hasTranscripts(this.props.items);

    this.hasRanges(this.props.structures);
  }

  render() {

    let {data, tabs} = this.state
    const {t} = this.props

    return (
      <aside className="canopy-navigator">
        <Tabs.Root className="canopy-tabs">
          {this.renderTabs(tabs)}
          <div className="canopy-tabs--content">
            {this.renderPanels(data, t)}
          </div>
        </Tabs.Root>
      </aside>
    )
  }
}

export default Navigator;
