import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2>Table Use Cases</h2>
        <p>
          - Intro:
            - This is what HTML tables ARE for.
            - Here's the basic tags
            - Here's the CSS Version
          - Disclaimer: HTML Tables SHOULD NOT be used for Layout.
            - Specs:
            - So really, it's all about accessability.
            - HEre's another issue with building it.
          - Actual Layouts
            -....
        </p>

        <NextLessonNav
            prev_path='/202/css-table'
            prev_name='CSS Table Properties'
            next_name='Intro to FLEX'
            next_path='/203/'
          />
      </div>
    )
  }
}

export default LessonTitle