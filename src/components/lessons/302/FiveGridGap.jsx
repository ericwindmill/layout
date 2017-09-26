import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Give your Grid Gutters with Grid-Gap </h2>
        <p>
          Grid gap allows you to place a gutter between all of your grid items. This simple example places 10px of space <em>between</em> each item (it doesn't add space 'around' the total grid items).
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: flex;
  grid-gap: 10px;
}`        } />
        <p>
          In this codepen, you can update the grid-gap value to see how it works. I've set <code>grid-template-columns</code> to <code>fr</code> units because this will force the grid-items to stay within the width of grid, so long as the lenght of the border-box + the length of the gaps isn't longer than the width of the container.
        </p>
        <Codepen
            hash='VMPpQB'
            user='ericwindmill'
            tab='result'
            height='525'
        />
        <p>
          Here's the same example but <code>grid-template-columns</code> is given px values. <code>fr</code> + <code>grid-gap</code> is a real win.
        </p>
        <p>
          You can maniputlate horizonal and vertical lines speerately with <code>grid-row-gap</code> and <code>grid-column-gap</code>, respectively.
        </p>
        <NextLessonNav
            prev_path='/302/grid-auto-col-and-row'
            prev_name='Define Default Row and Grid Sizes with Grid-Auto-*'
            next_name='Repeat grid patterns with Repeat()'
            next_path='/302/repeat'
          />
      </div>
    )
  }
}

export default LessonTitle