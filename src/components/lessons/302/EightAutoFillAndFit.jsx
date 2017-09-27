import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Flexible Rows and Columns With with Autofit and Autofill </h2>
        <p>
          It'd be nice if we could tell the browser to fit as many columns as will fit into the viewport. We can do that easily with <code>auto-fill</code> in the <code>repeat</code> function.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px;)
}`        }/>

          <p>
            Resize the screen below to see the <code>grid-container</code> distribute as many columns as there is space for.
          </p>
          <Codepen
            hash='GMrvWw'
            user='ericwindmill'
            tab='result'
            height='600'
          />
          <p>
            This is great, as it makes our grids highly flexible. But, you can see that now our items aren't flexible. If you simply set the size value in <code>repeat()</code> to 1fr, you'll 'break' your grid. When you're using auto-fill, grid knows that theres unlimited rows, so each row would just be one long item.
          </p>
          <p>
            You can solve this by mixing in <code>minmax()</code>
          </p>
          <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}` }/>
          <p>
            This will tell grid to lay out each item at 100px, and then after each is laid out, distribute the rest of the space among each item.
          </p>
          <Codepen
            hash='yzgojJ'
            user='ericwindmill'
            tab='result'
            height='500'
          />
            <p>
              If you stretch the screen out far enough, and you'll see that there's quite a bit of extra space forming. This is because <code>auto-fill</code> tells grid to create as many columns as it can of this size.
            </p>
            <p>
              In this Codepen, <code>auto-fill</code> is replaced with <code>auto-fit</code>, which tells grid to collapse all the extra columns it creates, and allow the columns with content to take up all available space.
            </p>
            <Codepen
              hash='XepaPa'
              user='ericwindmill'
              tab='result'
              height='500'
            />

        <NextLessonNav
            prev_path='/302/minmax'
            prev_name='Define Grid Item Size Mins and Maxes with minmax()'
            next_name='Name Grid Areas with grid-template-area'
            next_path='/302/grid-template-areas'
          />
      </div>
    )
  }
}

export default LessonTitle