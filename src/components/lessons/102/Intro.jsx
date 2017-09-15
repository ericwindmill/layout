import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {  
    return(
      <div>
        <h2> The Position Property </h2>
        <p>
          The <code>position</code> property is basically used to define <em>exactly</em> where you want an element to be. Using different values for this property, you can set the position relative to its containing element, or to the browser window.
        </p>
        
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.parent `
          }></SyntaxHighlighter>


      </div>
    )
  }
}

export default LessonTitle