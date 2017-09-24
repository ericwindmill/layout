import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class SeventeenBasisWrap extends Component {
  render () {
    return(
      <div>
        <h2> The Flex-Wrap / Flex-Basis 'Gotcha' </h2>
        <p>
          When there are multiple rows (or columns) of flex items (because of <code>flex-wrap</code>), all three of the <code>flex</code> properties only work in relationship to the flex-items on the same row as them.
        </p>
        <p>
          This is one of the most powerful aspects of flexbox. Your flex layout will look good regardless of the viewport size (in theory, of course).
        </p>
        <p>
          In this simple codepen, you'll see that if you increase flex-grow, it only affects the row that the current element is on.
        </p>

        <Codepen
            hash='MvNzXa'
            user='ericwindmill'
            tab='result'
            height='500'
          />

        <NextLessonNav
            prev_path='/301/flex-shorthand'
            prev_name='Combine Flex Properties with the Flex Shorthand'
            next_name='Next Gen Layout: CSS Grid'
            next_path='/302/grid-intro'
          />
      </div>
    )
  }
}

export default SeventeenBasisWrap