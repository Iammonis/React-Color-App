import React from 'react'
import {Palette} from './Components/Palette/Palette'
import mainColors from './mainColors'
import { colorGenerator } from './colorGenerator.js'

export default function App() {

  return (
    <div>
      <Palette palette={colorGenerator(mainColors[4])} />
    </div>
  )
}
