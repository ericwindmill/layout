import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Align on the Column Axis with Align-Items </h2>
        <p>
          <code>align-items</code> aligns the content inside each item along the column-axis. This property takes the same four values as justify-items.
        </p>
        <ul>
          <li><code>start</code>: aligns the content to the top end of the grid area.</li>
          <li><code>center</code>: aligns the content vertically in the grid area.</li>
          <li><code>end</code>: aligns the content tothe bottom end of the grid area.</li>
          <li><code>stretch</code>: fills the whole height (this is the default)</li>
        </ul>
        <Codepen
            hash='WZpQwd'
            user='ericwindmill'
            tab='result'
            height='550'
          />
        <NextLessonNav
            prev_path='/302/justify-items'
            prev_name='Align Along the Row Axis with Justify-Items'
            next_name='Align The Whole Grid with Justify- and Align-Content'
            next_path='/302/justify-align-content'
          />
      </div>
    )
  }
}

export default LessonTitle