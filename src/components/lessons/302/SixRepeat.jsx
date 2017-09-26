import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Repeat Rows and Columns with Repeat() </h2>
        <p>
          You can save yourself time with the CSS <code>repeat()</code> function. It's used to establish multiple rows or columns with <code>grid-template-columns</code> and <code>grid-template-rows</code>.
        </p>
        <ul>The function takes two arguments.
          <li>1. The number of times the column or row should be repeated.</li>
          <li>2. The size of the column or row.</li>
        </ul>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* defines 3 columns that have a width of 1fr */
}` }/>
        <p>
          <code>repeat()</code> plays nicely with any amount of customization you'd like. As long as you use it to repeate a recurring pattern, you can establish as many columns inside the function as you'd like.
        </p>
        <p>
          This is perfectly valid:
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 100px 1fr) 100px;
}` }/>
        <Codepen
            hash='eGgRYx'
            user='ericwindmill'
            tab='result'
            height='500'
          />


        <NextLessonNav
            prev_path='/302/grid-gap'
            prev_name='Add Gutters to Your Grid with Grid Gap'
            next_name='Define Grid Item Size Mins and Maxes with minmax()'
            next_path='/302/minmax'
          />
      </div>
    )
  }
}

export default LessonTitle