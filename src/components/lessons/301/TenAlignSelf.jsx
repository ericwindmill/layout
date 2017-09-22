import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Alignment: Align Individual Items with Align-Self </h2>
        <p>
          <code>align-self</code> is the first property that we'll explore which is on the flex-item, rather than the container.
        </p>
        <p>
          It's pretty simple. It overwrites the <code>align-items</code> property for the individual item you set it on. It takes the same possible values.
        </p>
        <ul>
          <li><code>stretch</code> (default) </li>
          <li><code>center</code></li>
          <li><code>flex-start</code></li>
          <li><code>flex-end</code></li>
          <li><code>baselien</code></li>
        </ul>
        <Codepen
            hash='prMrgE'
            user='ericwindmill'
            tab='result'
            height='500'
          />
          <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.flex-container {
    display: flex | inline-flex;
    align-items: baseline;
  }
  .item-1 {
    align-self: stretch | flex-start | center | flex-end | baseline;
  }`
          } />

        <NextLessonNav
            prev_path='/301/align-content'
            prev_name='Align Collective Content with Align Content'
            next_name='Change the Order of Items with Order'
            next_path='/301/flex-order'
          />
      </div>
    )
  }
}

export default LessonTitle