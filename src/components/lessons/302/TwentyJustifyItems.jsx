import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Align Items on the Row Axis with Justify-Items </h2>
        <p>
          Alignment in Grid is similar to Flexbox, and infact uses the same properties.
        </p>
        <p>
          <code>justify-items</code> is used to align the content inside the indiviudal item along the row-axis. This property takes four values:
        </p>
        <ul>
          <li><code>start</code>: aligns the content to the left end of the grid area.</li>
          <li><code>end</code>: aligns the content tothe right end of the grid area.</li>
          <li><code>center</code>: aligns the content horizontally in the grid area.</li>
          <li><code>stretch</code>: fills the whole width (this is the default)</li>
        </ul>
        <p>
          In this Codepen, you can toggle the Justify-Items property with the buttons.
        </p>
        <Codepen
            hash='jGBPjY'
            user='ericwindmill'
            tab='result'
            height='550'
          />
        <NextLessonNav
            prev_path='/302/grid-order'
            prev_name='Ordering Grid Items with Order'
            next_name='Align Along the Column Axis with Align-Items'
            next_path='/302/align-items'
          />
      </div>
    )
  }
}

export default LessonTitle