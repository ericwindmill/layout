import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> The Span Keyword </h2>
        <p>
          The span keyword lets you place grid items by specifying how many rows or columns it they should take, rather than explicitly knowing where they should end.
        </p>
        <p>
          Writing <code>span [number]</code> tell's Grid how many columns or rows the item should span.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-item {
  grid-row: 1 / span 3;
  /* same as 1 / 4 */
}` }/>

        <NextLessonNav
            prev_path='/302/grid-row-and-column'
            prev_name='Grid-*-Start/End shorthand: Grid-Row and Grid-Column'
            next_name='Naming your Grid Lines'
            next_path='/302/named-lines'
          />
      </div>
    )
  }
}

export default LessonTitle