import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Control the Auto Placement with Grid-Auto-Flow </h2>
        <p>
          The <code>grid-auto-flow</code> property dictates how the grid algorithm places items that haven't been explicitly placed. It takes four properties:
        </p>
        <dl>
          <dt>row</dt>
          <dd>This is the default. It tells the algorithm to fill in the rows first, and create new rows as needed.</dd>
          <dt>column</dt>
          <dd>Fill in the grid top to bottom, and create new columns as needed.</dd>
          <dt>row dense</dt>
          <dd>This works just like row, but the algorithm will attempt to fill earlier cells with each new grid-item.</dd>
          <dt>column dense</dt>
         <dd>The same, but by column.</dd>
        </dl>
        <p>
          <code>row</code> and <code>column</code> are probably used more often, but the <code>dense</code> properties are really cool.
        </p>
        <Codepen
            hash='gGmbQE'
            user='ericwindmill'
            tab='result'
            height='750'
          />
          <p>
            In the example above we have a four by four grid, with elements that have varying sizes. By default, the <code>grid-auto-flow</code> is set to <code>row</code>. Here's how the algorithm decides where each element lives:
          </p>
        <dl>
          <dt>1. The first three items are explicitly placed:</dt>
          <dd>One starts at row and column 1, and spans 3</dd>
          <dd>Two starts at row 1 and column 3, and spans 3 rows.</dd>
          <dd>Three starts at 'auto' for row, so the next row in which it'll fit (row 4), and it spans 3 columns.</dd>
          <dt>2. Next, we come to four and five, which aren't placed, so they goes in the <em>next available spaces</em>.</dt>
          <dd>The next available space for four is just to the right of three.</dd>
          <dd>Now, because <code>gric-auto-flow</code> is row, and the grid algo needs to make more space, it creates row 5 </dd>
          <dd>and places item five at the beginning of that.</dd>
          <dt>3. Now, we have 6, which is set to span 3 rows. Because these rows are explicit, the the three rows collapse to  the size of the content, so it's only slightly 'taller' than five.</dt>
          <dt>4. Finally, Seven and Eight are placed in the next available spaces in rows, which is to the right of six.</dt>
        </dl>
        <p>
          In the next Codepen, you can change the <code>grid-auto-flow</code> to <code>row-dense</code>, and see it's power. In short, each time it places a new item, it will start looking at the beginning of the grid for the next availble space.
        </p>
        <Codepen
            hash='rGyVMY'
            user='ericwindmill'
            tab='result'
            height='800'
          />


        <NextLessonNav
            prev_path='/302/grid-auto-placement'
            prev_name='Aside: Understanding the Grid Auto Placement Algorithm'
            next_name='Layering Items with Z-Index'
            next_path='/302/layering'
          />
      </div>
    )
  }
}

export default LessonTitle