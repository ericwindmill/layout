import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Name Your Grid with Grid-Template-Areas </h2>
        <p>
          Defining grids isn't all about numbers and math. You can name lines and tracks in your grid and refer to them when placing <code>grid-items</code>. (This is the first time we'll be exploring how to explicitly place grid-items.)
        </p>
        <p>
          <code>grid-template-areas</code> lets you name every cell in your grid in a visual way:
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px 200px;
  grid-template-areas:
    "one one two
    . three four
    six . five"
}

.item-one {
  grid-area: one;
}

.item-two {
  grid-area: two;
}

.item-three {
  grid-area: three;
}` } />
         <p>
            That gives us this:
         </p>
         <Codepen
            hash='zENEMy'
            user='ericwindmill'
            tab='result'
            height='500'
          />
          <p>
            This is the power of grid! We have an explicityly placed grid, with empty cells, and items spaning multiple cells.
          </p>
          <p>
            In <code>grid-template-area</code>, any string refers to a named grid cell. The same string repeated means that the grid-item will span multiple cells (see 'one' in the example), and a '.' means the space should be left empty.
          </p>
          <p>
            Let's refer to the very first example that I had in the Grid section, the simple 'blog-style' webpage. Now let's re-write the same page with <code>grid-template-area</code>.
          </p>
          <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px 200px;
  grid-template-areas:
    "header header"
    "nav nav"
    "aside content";
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
}

aside {
  grid-area: aside;
}

main {
  grid-area: content;
}` } />
        <p>
          It looks exactly the same:
        </p>
        <Codepen
            hash='VMPMNL'
            user='ericwindmill'
            tab='result'
            height='500'
          />
        <NextLessonNav
            prev_path='/302/autofill-autofit'
            prev_name='Flexible Rows and Columns with Autofill / Autofit'
            next_name='Placing Items on Your Grid'
            next_path='/302/placing-grid-items'
          />
      </div>
    )
  }
}

export default LessonTitle