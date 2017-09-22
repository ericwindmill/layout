import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class SevenAlignItems extends Component {
  render () {
    return(
      <div>
        <h2> Position on the Cross-Axis with Align-Items </h2>
        <p>
          I like to think of <code>align-items</code> as the cross-axis equivelent of <code>justify-content</code>. (Technically, that isn't true, because <code>align-content</code> is the opposite, but <code>align-items</code> is the property that you'll use to manipulate the cross-axis more often.)
        </p>
        <ul> Align items takes 5 values:
          <li><code>stretch</code>(default)</li>
          <li><code>center</code></li>
          <li><code>flex-start</code></li>
          <li><code>flex-end</code></li>
          <li><code>baseline</code></li>
        </ul>
        <Codepen
            hash='JygJbE'
            user='ericwindmill'
            tab='result'
            height='400'
          />
        <p>
          All of these values are pretty self-explanetory, but there is caveate worth mentioning. `Stretch` only works if there isn't an explicit height set. If there is, it basically does what `flex-end` does. If you're ever having trouble with stretch *not stretching*, that's the first thing I'd check for.
        </p>
        <p>
          Another common 'gotcha' is that the parent container has to have height in order for `align-items` to work. Otherwise, theres no white-space to interact with.
        </p>
        <h3>API</h3>

        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.flex-container {
    display: flex | inline-flex;
    align-items: stretch | flex-start | center | flex-end | baseline;
  }`} />


        <NextLessonNav
            prev_path='/301/justify-content'
            prev_name='Position items along the main-axis with justify-content'
            next_name='Align items by their content with Baseline'
            next_path='/301/align-baseline'
          />
      </div>
    )
  }
}

export default SevenAlignItems