import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class FiveMarginAuto extends Component {
  render () {  
    return(
      <div>
        <h2> Margin: Auto </h2>
        <p>
          Applying <code>margin: auto</code> to an element forces an equal margin on all sides of the element, centering the elemeent in it's parent.
        </p>
        <h3>Considerations</h3>
        <ul>
          <li>The element must have a width. Therefor...</li>
          <li>It only works on <code>block</code> level elements. Inline elements don't have a width.</li>
        </ul>

        <SyntaxHighlighter
          language='css'
          style={ monokai }
          children={
`/*This parent only has width for examples sake*/
.parent {
  width: 500px; 
}
/*You don't have to explicity set display 
to block unless it's not block by default.*/
.child {
  display: block;
  width: 50%;
  margin: auto;
}`}></SyntaxHighlighter>

          <p>
            A common use case it to center an image, which <em>isn't</em> block by default.
          </p>
          <Codepen
            user="ericwindmill" 
            hash="mBJvqv"
            height='400'
            tab='result'
          ></Codepen>


          <NextLessonNav
            prev_path='/101/display'
            prev_name='The Display Property'
            next_name='Layout 102: Position'
            next_path='/102'
          />
      </div>
    )
  }
}

export default FiveMarginAuto