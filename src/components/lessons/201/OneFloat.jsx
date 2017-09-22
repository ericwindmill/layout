import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'

class OneFloat extends Component {
  render () {  
    return(
      <div>
        <h2> Floats </h2>
        <p>
          Assigning any element the `float` property keeps it in the flow of the document and pushes it against the `left` or `right` of the containing element, depending the value you give it.
        </p>
        <p>The <code>float</code> property accepts the following values:</p>
        <SyntaxHighlighter
          style={monokai}
          language='css'
          children={
`img {
  float: left | right | inherit | none (default); 
}`}/>
        <p>
          The values are pretty straight forward. A left-floated element sticks to the left of the containing element, a right to the right, none is default, and inherit makes the element take the value of its parent.
        </p>

        <Codepen
          hash='eGpMyr'
          user='ericwindmill'
          tab='result'
          height='400'
        />

        <NextLessonNav
          prev_path='/201/'
          prev_name='Intro to Floats'
          next_name='The Clear Property'
          next_path='/201/clear'
        />

      </div>
    )
  }
}

export default OneFloat