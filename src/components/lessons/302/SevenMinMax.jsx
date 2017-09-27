import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Establish Grid Item Sizes with Minmax() </h2>
        <p>
          <code>minmax()</code> is a CSS function that sets a minimum and maximum width for a column or row. This is another aspect of grid that allows us to think about it similarly to Flexbox.
        </p>
        <p>
          <code>minmax()</code> simply takes two arguments, the minimum size a column/row can be, and the maximum size. <code>minmax()</code> works anywhere you can establish a row/column size--inside <code>repeat()</code>, at any point in <code>grid-template-columns</code> and <code>grid-template-rows</code>, etc. That means that you can use it to modify just one column, or many.
        </p>
        <p>
          This is very handy if you want to, for example, have a sidebar that changes size to deal with different screen sizes, but a main content area that should always be 600px.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: flex;
  grid-template-columns: minmax(100px, 300px) 1fr;
}` }/>`
        <p>
          Here's a codepen that I used earlier, but I encourage you to change the properties using minmax(), and then adjust the screen size.
        </p>
        <Codepen
            hash='wrgqKN'
            user='ericwindmill'
            tab='result'
            height='500'
          />




        <NextLessonNav
            prev_path='/302/repeat'
            prev_name='Define Column Patterns with Repeat'
            next_name='Flexible Grid Items with Autofill and Autofit'
            next_path='/302/autofill-autofit'
          />
      </div>
    )
  }
}

export default LessonTitle