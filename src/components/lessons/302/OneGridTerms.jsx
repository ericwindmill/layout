import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2>Basic Grid Terminology</h2>
        <p>
          There a fair bit of terminology that needs to be understood. They're terms easy, but important.
        </p>
        <h3>Grid Container</h3>
        <p>
          The container is the parent element. It could be a <code>div</code> or perhaps a <code>section</code>. This is the element on which the <code>display: grid</code> property is applied. All of a containers immeditate children are grid items.
        </p>
        <SyntaxHighlighter
          language='html'
          style={monokai}
          children={
`<div class='grid-container'>
  <div></div>
  <div></div>
  <div></div>
</div>`} />
        <h3>Grid Item</h3>
        <p>
          All immediate children of a 'grid container' are 'grid items' that are being manipulated by the Grid.
        </p>
        <SyntaxHighlighter
          language='html'
          style={monokai}
          children={
`<div class='grid-container'>
  <div class='grid-item'></div>
  <div class='grid-item'></div>
  <div class='grid-item'></div>
</div>`} />
        <h3>Gird Line</h3>
        <p>
          Grid lines are the lines that make up a grid. The run vertical and horizontal <em>between</em> the grid items. They are referred to by number in the grid system. These lines are <strong>important</strong>, because we place grid-items by which lines they start and end at, not which track they're on.
        </p>
        <img alt='Grid Line' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1506280973/css-layout/Grid_Line.png' />
        <h3>Grid Track</h3>
        <p>
          Grid tracks are the spaces between the lines. The tracks are where our actual content lives. These can also be horizontal or vertical. They're basically columns and rows in your grid.
        </p>
        <img alt='Grid Track' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1506280973/css-layout/Grid_Track.png' />
        <h3>Grid Cell</h3>
        <p>
          This is a single space in the grid, between two horizontal lines and and two vertical lines. A cell is one space.
        </p>
        <img alt='Grid Cell' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1506280973/css-layout/Grid_Cell.png' />
        <h3>Grid Area</h3>
        <p>
          An area is like a cell, but can span multiple columns and rows. It can take up as many cells as you'd like.
        </p>
        <img alt='Grid Area' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1506280973/css-layout/Grid_Area.png' />
        <h3>Grid Gutters / Gaps</h3>
        <p>
          <code>grid-gap</code> is an actual property, but it defines what I like to think of as 'gutters'. Gutters are spaces between cells. In a less abstract explanation, it literally puts space between your grid items.
        </p>
        <img alt='Grid Gutters' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1506280973/css-layout/Grid_Gutter.png' />



        <NextLessonNav
            prev_path='/302/'
            prev_name='Intro to CSS Grid'
            next_name='Define a Grid with Display and Grid Templates'
            next_path='/302/define-grid'
          />
      </div>
    )
  }
}

export default LessonTitle