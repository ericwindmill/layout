import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Named Grid Lines </h2>
        <p>
          Grid gives you the ability to name lines rather than choosing them by number. You name lines by placing their name inside brackets when establishing <code>grid-template-rows</code> and <code>grid-template-rows</code>. In between every track that you establish, you place the desired line-name.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-columns: [line-1] 1fr [line-2] 1fr [line-3];
}`        }/>
        <p>
          You can also use named lines in <code>repeat()</code>.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display:grid;
  grid-template-columns: repeat(2, [little-tracks] 100px) repeat(2, [lg-tracks] 200px) [grid-end];
  /* same as: [small-tracks] 100px [small-tracks] 100px [lg-tracks] 200px [lg-tracks] 200px  [grid-end];
}` }/>
        <p>
          If you name lines like that, you can then access them by giving the tracks a number:
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-item {
  display: grid;
  grid-column: small-tracks 2 / grid-end;
}` }/>
        <p>
          <code>small-tracks</code> without a number trailing it would use the 'first' declaration, in this case the line to the far left.
        </p>
        <NextLessonNav
            prev_path='/302/span'
            prev_name='The Span Keyword'
            next_name='Grid Placement Ultimate Shorthand: Grid-Area'
            next_path='/302/grid-area'
          />
      </div>
    )
  }
}

export default LessonTitle