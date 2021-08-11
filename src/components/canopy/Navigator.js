import React, { Component } from 'react';
import * as Tabs from "@radix-ui/react-tabs"
import Structures from "./Structures"
import Track from "./Track"

class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state ={
      tabs: [],
      data: []
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

    let data = this.state.data
    data.push(set)

    this.state ={
      data: data
    }
  }

  componentDidMount() {
    // build according to https://gist.github.com/mathewjordan/c566bf3287e0d6b2d1af0dc4673dbd2d
    this.hasTranscripts(this.props.items);
    this.hasRanges(this.props.structures);
  }

  render() {

    return (
      <aside className="canopy-navigator">

      </aside>
    )
  }
}

export default Navigator;
