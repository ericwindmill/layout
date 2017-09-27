import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Grid Placement Shorthand with Grid-Area </h2>
        <p>
          We've briefly seen <code>grid-area</code> once before when naming grid-areas. The <code>grid-area</code> property is super flexible though. It's the only grid-item placment property you <em>need</em> to know. It'll save you time and give you the most flexibilty in your code.
        </p>
        <p>
          You can pass it four grid line numbers to use it as a shorthand for the basic <code>grid-column-start</code>, <code>grid-row-start</code>, and respective 'end' properties. It also accepts named grid lines, the span keyword, and anything else that these properties accept.
        </p>
        <p>
          The four values it takes, in oreder, are:
          <ul>
            <li><code>grid-row-start</code></li>
            <li><code>grid-column-start</code></li>
            <li><code>grid-row-end</code></li>
            <li><code>grid-column-end</code></li>
          </ul>
          I like to remember that it takes the four properties in clockwise order, starting at the left (slighly unconventional for similar CSS properties, which start at the top).
        </p>

        <p>
          Knowing this, you have the freedom to establish only certain properties. If you leave out the last property, for example, then <code>grid-column-end</code> is implied.
        </p>

        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-item {
  /* Pass it a named area */
  grid-area: header;

  /* Pass it grid-lines: (place in top-left corner) */
  /* <grid-row-start> <grid-column-start> <grid-row-end> <grid-column-end> */
  grid-area: 1 / 1 / 2 / 2;

  /* Mix named-areas with */
  /* This places the item in rows 1 - 3, in a column named 'main-col' */
  grid-area: 1 / main-col / 3;

  /* Using span() in grid-area */
  /* This places the item between row lines 1 - 4 and column lines 1 and 2*/
  grid-area: 1 / 1 / span 3 / 2;

  /* With named Grid-lines*/
  grid-area: 1 / first-col / 2 / third-col;
}` }/>
          <p>
            As you can see, there are a ton of options. This is one of the tricks that makes grid highly-cusomizable with relative ease.
          </p>


        <NextLessonNav
            prev_path='/302/named-lines'
            prev_name='Naming your Grid Lines'
            next_name='Aside: Understanding The Grid Placement Algorithm'
            next_path='/302/grid-auto-placement'
          />
      </div>
    )
  }
}

export default LessonTitle