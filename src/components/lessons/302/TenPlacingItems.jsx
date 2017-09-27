import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class ElevenPlacingItems extends Component {
  render () {
    return(
      <div>
        <h2> Placing Items with Grid-Row and Grid-Column </h2>
        <p>
          Placing <code>grid-items</code> on the grid is <em>line-based</em>, rather than track based. You place an item by informing grid at which column or row line to start the item and at which line to end the item. There are four properties used to place items:
        </p>
        <ul>
          <li>grid-column-start</li>
          <li>grid-column-end</li>
          <li>grid-row-start</li>
          <li>grid-row-end</li>
        </ul>
        <p>
          Each of these properties takes the number of a line. To place a grid item in the top left cell:
        </p>
        <SyntaxHighlighter
        language='css'
        style={monokai}
        children={
`.grid-item {
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 2;
}` }/>
        <p>
          In this example, I'm explicitly placing items, rather than letting Grid fill them in. This gives me complete control over item placement.
        </p>
        <p>
          Change the column start/end of item 3 to see how easy it is.
        </p>
        <Codepen
          hash='MEpgVr'
          user='ericwindmill'
          tab='result'
          height='700'
        />



        <NextLessonNav
            prev_path='/302/grid-template-areas'
            prev_name='Name Your Grid with Grid-Template-Areas'
            next_name='Col/Row-Start Shorthand: Grid-Row and Grid-Column'
            next_path='/302/grid-row-and-column'
          />
      </div>
    )
  }
}

export default ElevenPlacingItems