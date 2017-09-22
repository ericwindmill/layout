import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class TwoClear extends Component {
  render () {  
    return(
      <div>
        <h2> The Clear Property </h2>
        <p>
          <code>clear</code> is used to control how other elements interact with floated properties. 
        </p>
        <p>
          If you add <code>clear: left</code> to the next sibling of a property that's been floated to the left, the sibling will be forced to a new line. If the element is floated to the right, you can use <code>clear: right</code>. <code>Both</code> clears no matter what the float value from the previous element. 
        </p>
        <SyntaxHighlighter
          style={monokai}
          language='html'
          children={`<img scr='...' />
<p>Content goes here</p>
`} />
        <SyntaxHighlighter
            style={monokai}
            language='css'
            children={
`img {
  float: left | right;
}
p {
  clear: left | right | both;
}`}/>
      <Codepen
        user='ericwindmill'
        hash='ayjYpJ'
        tab='result'
        height='450'
      />

      <NextLessonNav
      prev_path='/201/float'
      prev_name='The Float Property'
      next_name='The Clearfix Hack'
      next_path='/201/clearfix'
    />
        
      </div>
    )
  }
}

export default TwoClear