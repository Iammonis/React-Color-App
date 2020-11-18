import React, { Component } from 'react'
import {Palette} from './Components/Palette/Palette'
import mainColors from './mainColors'

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={mainColors[0]} />
      </div>
    )
  }
}

