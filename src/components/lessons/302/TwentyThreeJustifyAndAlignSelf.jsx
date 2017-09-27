import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Align Individual Items with Justify-Self and Align-Self </h2>
        <p>
          <code>justify-self</code> and <code>align-self</code> are properties that are placed on grid-items themselves to position the content within the grid-area individually.
        </p>
        <p>
          In this example, you can toggle the justification of 'grid-item-four'. Justify-self aligns the  content of grid-items along the row axis.
        </p>
        <Codepen
            hash='MEpaLd'
            user='ericwindmill'
            tab='result'
            height='600'
          />
        <p>
          <code>Align-self</code> works exactly the same way, but along the column-axis.
        </p>
        <NextLessonNav
            prev_path='/302/justify-align-content'
            prev_name='Align the Entire Grid with Justify- and Align-Content'
            next_name='More Resources and Next Steps'
            next_path='/resources'
          />
      </div>
    )
  }
}

export default LessonTitle