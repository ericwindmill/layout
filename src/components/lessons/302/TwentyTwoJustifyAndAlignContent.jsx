import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Align the Whole Grid with Justify-Content and Align-Content </h2>
        <p>
          <code>justify-content</code> and <code>align-content</code> allow you to manipulate how the entire grid is aligned inside it's container. This is only usable when you have set all the columns (or rows) to an explicit total width (or height) that is less than the the width of the container.
        </p>
        <p>
          <code>justify-content</code> aligns your grid along the row axis, and <code>align-content</code> aligns your content along the column axis.
        </p>
        <p>
          These two properties take the same 7 values, and they're similar to their respective properties in Flexbox.
        </p>
        <ul>
          <li>start - aligns the grid to the left end of the grid container</li>
          <li>end - aligns the grid to the right end of the grid container</li>
          <li>center - aligns the grid in the center of the grid container</li>
          <li>stretch - resizes the grid items to allow the grid to fill the full width of the grid container</li>
          <li>space-around - take the remaining space in the container and place an even amount between each grid-item, and half-sizes on the far ends.</li>
          <li>space-between - take the remaining space in the container and place an even amount between each grid-item, with no space around the far ends.</li>
          <li>space-evenly - take the remaining space in the container and place an even amount between each grid-item, including at the far ends.</li>
        </ul>
        <p>
          In this exmaple, I've made the width explicitly <code>600px</code>, but made the total width of the columns less than 600px.
        </p>
        <Codepen
            hash='LzWpLp'
            user='ericwindmill'
            tab='result'
            height='600'
          />
          <p>
            <code>align-content</code> works the same, but would require an explicit height on the container, and rows that don't add up to that height.
          </p>
        <NextLessonNav
            prev_path='/302/align-items'
            prev_name='Align Along the Column Axis with Align Items'
            next_name='Align Individual Items with Align- and Justify-Self'
            next_path='/302/justify-align-self'
          />
      </div>
    )
  }
}

export default LessonTitle