import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Grid-Column-Start and Friends Syntatic Sugar </h2>
        <p>
          In the last lesson, we learned how to explicity plact Grid-Items with the very verbose <code>grid-column-start</code>, <code>grid-row-start</code>, and their counterparts. Grid provides a number of shorthands to make the code less verbose. If you haven't visited the previous lesson, it's a prerequisite to understanding this.
        </p>
        <ul>
          <li><code>grid-row</code></li>
          <li><code>grid-column</code></li>
        </ul>
        <p>
          Both of these properties take two values at a time, one that represents <code>grid-*-start</code> and the second represents <code>grid-*-end</code>.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-item {
  /* <grid-row-start> and <grid-row-end> */
  grid-row: 1 / 2;

  /* <grid-column-start> and <grid-column-end> */
  grid-column: 2 / 4;
}` }/>

        <NextLessonNav
            prev_path='/302/placing-grid-items'
            prev_name='Explicity Placing Grid Items Basics'
            next_name='The Span Keyword'
            next_path='/302/span'
          />
      </div>
    )
  }
}

export default LessonTitle