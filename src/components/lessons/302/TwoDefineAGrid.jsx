import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class TwoDefineGrid extends Component {
  render () {
    return(
      <div>
        <h2>Defining a Grid with Display and Grid Template</h2>
        <p>
          Defining a grid is similar to defining a flexbox. <code>display: grid</code> defines the grid container. Unlike flexbox, we have to do a bit more to make it act like a grid.
        </p>
        <p>
          The two other properties that all grids should have are <code>grid-template-columns</code> and <code>grid-template-rows</code>. These properties allow us to set the number and size of your columns and rows.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid | inline-grid;
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 100px 100px;
}`} />
          <p>
            In this example, I defined 3 columns that are 100px each. The values represent a column track width. The space inbetween (and around) each value represents a grid line. (And the same goes for rows). With this grid definition, you'll end up with a grid that has 4 vertical lines and 3 horizontal lines.
          </p>

          <img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_600/v1506284099/css-layout/Define_a_Grid.png' alt='defining a grid'/>
          <p>
            <code>grid-template-columns</code> and <code>grid-template-rows</code> take any units that any size property in CSS could take.
          </p>
          <dl>
            <dt>Absolute: </dt>
            <dd><code>px</code>, <code>in</code>, <code>pt</code>, etc</dd>
            <dt>Relative:</dt>
            <dd><code>percentage</code></dd>
            <dd><code>vh</code> / <code>vw</code></dd>
            <dd>etc...</dd>
          </dl>
          <p>
            In this Codepen below, you can input whichever values you want for <code>grid-template-columns</code> and <code>grid-template-rows</code>.
          </p>

          <Codepen
            hash='QqGrpb'
            user='ericwindmill'
            tab='result'
            height='525'
          />
        <NextLessonNav
            prev_path='/302/grid-terms'
            prev_name='Basic Grid Terminology'
            next_name='Using the fr unit'
            next_path='/302/fr-unit'
          />
      </div>
    )
  }
}

export default TwoDefineGrid