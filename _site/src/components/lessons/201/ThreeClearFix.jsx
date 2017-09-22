import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class ThreeClearFix extends Component {
  render () {
    return(
      <div>
        <h2> The Clearfix Hack </h2>
        <p>Clearfix is a layout hack used mainly to make floats more reasonable for layout.</p>
        <p>
          In this example you can see that when an elements height is is greater than the containing element, floats cause problems. The image busts out of the container, rather than the container growing to fit.
        </p>
        <Codepen
          hash='PJPePm'
          user='ericwindmill'
          tab='result'
          height='400'
        />
        <p>
          Clear on it's own works if the page is static and you tightly control the size of content. That's not a reality in todays world.  Enter the clearfix.
        </p>
        <p>
          This hack simply inserts a bit of content <em>after</em> the floated element, so the container has to expand to wrap around that content. Using CSS <code>content</code> property, you can an empty string, so the content you add in is 'invisible'. This is the most modern version of the Clearfix. It's supported in all browsers.
        </p>
        <SyntaxHighlighter
          style={monokai}
          language='css'
          children={
`.floatedElement:after {
  content: ' ';
  display: table;
  clear: both;
}
`}/>

        <Codepen
          hash='jGbxmv'
          user='ericwindmill'
          tab='result'
          height='400'
        />

        <NextLessonNav
          prev_path='/201/clear'
          prev_name='The Clear Property'
          next_name='Intro to Flexbox'
          next_path='/301/'
        />

      </div>
    )
  }
}

export default ThreeClearFix