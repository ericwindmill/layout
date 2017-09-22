import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class FiveFlexTerms extends Component {
  render () {
    return(
      <div>
        <h2> Aside: Getting to Know Flex Alignment Terminology </h2>
          <p>
            Alignment is the bread and butter of Flexbox. Aligning items (both on the horizontally or vertically), is incredibly easy with flex.
          </p>
          <p>
            Before you learn about alignment, you need to know the lingo. There are several alignment values that the properties can take. When we get to the individual properties we'll explore which property accepts which values. But here's the terminology and the primer:
          </p>
          <p>
            First, lets explore <code>center</code>, <code>flex-start</code>, and <code>flex-end</code>. Let's use this as a set-up:
          </p>
          <SyntaxHighlighter
            style={monokai}
            language='css'
            children={
`.container {
  display: flex;
  width: 900px;
}

.flex-item {
  width: 200px;
}`          } />

        <ul>
          <li>`center` is the center of a container</li>
          <li>`flex-start` is the beginning of the main-axis</li>
          <li>`flex-end` is the end of the main-axis</li>
        </ul>
        <NextLessonNav
            prev_path='101'
            prev_name='Dummy'
            next_name='Dummy'
            next_path='101'
          />
      </div>
    )
  }
}

export default FiveFlexTerms