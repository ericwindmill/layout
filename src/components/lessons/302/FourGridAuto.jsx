import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class FourGridAuto extends Component {
  render () {
    return(
      <div>
        <h2> Setting Default Row/Column Size with grid-auto-column & grid-auto-row </h2>
        <p>
          Grid is smart, and you don't actually have to define the exact rows and columns that make up a grid.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
}
 /* Not Yet Covered! Don't get caught up on it! */
.item-one {
  grid-row: 1 / 2;
}

.item-two {
  grid-column: 2 / 3;
}` }/>
        <p>
          This simple code would place <code>item-one</code> in the first column, and <code>item-two</code> in the second, <em>even though we havn't defined any columns on the container.</em>
        </p>
        <p>
          Grid implicitly establishes <code>grid-template-columns: auto auto;</code> on the container. This is great if we don't know exactly how many item's will be in the grid, and how many columns it will need. But suppose we don't know the number of items <em>or</em> the size of those items.
        </p>
        <p>
          Not a problem:
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-auto-column: 200px;
}`        }/>
          <p>
            With this set up, you can dynamically add grid items, and ensure that no matter their size, they're allotted 200px. And, <code>grid-auto-columns</code> plays nice with explicitly definied grids.
          </p>
          <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-auto-columns: 1fr;
}`} />
        <p>
          Now, any dynamically added columns will take up half the space as the explicit columns.
        </p>
        <p>
          <strong>NB:</strong><code>grid-auto-rows</code> works the same way.
        </p>
        <Codepen
            hash='RLKpwy'
            user='ericwindmill'
            tab='result'
            height='525'
          />
        <NextLessonNav
            prev_path='/302/fr-unit'
            prev_name='Flexible Rows and Cols with the FR unit.'
            next_name='Give Your Grid Gutter with Grid Gap'
            next_path='/302/grid-gap'
          />
      </div>
    )
  }
}

export default FourGridAuto