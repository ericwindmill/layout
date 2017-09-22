import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Wrapping your Elements with Flex-Wrap </h2>
        <p>
          The <code>wrap</code> property dictates whether the flex-items wrap within the container. I would argue that it's more important to understand how the elements behave when wrap is set to <code>nowrap</code>, which is the default.
        </p>
        <p>
          Wrap comes into play when the total width of your flex-items combined are wider than your flex-container. When <code>flex-wrap</code> is set to <code>no-wrap</code>, the elements shrink to take up the width provided by the container, with the min-width being the width of the <code>border-box</code>.This is true even if you explicity set a width on your items!
        </p>
        <ul><code>flex-wrap</code> takes one of three values:
          <li>no-wrap (default)</li>
          <li>wrap</li>
          <li>wrap-reverse</li>
        </ul>
        <p>
          When you set <code>flex-wrap: wrap</code>, the elements will respect their explicit widths, and wrap into as many rows as needed to fit all elements.
        </p>
        <p>
          The wrap changes when you change <code>flex-direction</code> to <code>column</code>. As you'd expect, the flex-items now wrap into columns.
        </p>
        <Codepen
            hash='qXeBZr'
            user='ericwindmill'
            tab='html, result'
            height='400'
          />
        <p>
          In this codepen I've set the `height` and `width` to `100px` for all six flex-items. The container `width`, however, is only 500px. First, if you toggle `wrap` you can see how the width declaration on the items isn't respected unless wrap is set. The same goes for when you switch the axis using `flex-direction`.
        </p>
        <p>
          Finally, we have wrap-reverse. Go ahead and toggle Wrap/Wrap-Reverse on in this CodePen:
        </p>
        <Codepen
            hash='qXeBmj'
            user='ericwindmill'
            tab='html, result'
            height='400'
          />
        <p>
        <code>Wrap-reverse</code> reverses the <em>cross-axis</em>. If you toggle wrap and wrap-revese, you'll see that the items become 'backwords'. I like to think of it like a book. If `flex-direction` is set to `column`, and then you apply wrap-reverse, the pages will still read top to bottom, but you'll read from right to left.
        </p>
        <h3>API</h3>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.container {
    display: flex | inline-flex;
    flex-wrap: nowrap | wrap | wrap-reverse;
}`} />

        <NextLessonNav
            prev_path='/301/flex-direction'
            prev_name='Arranging Items in Rows or Columns with Flex-Direction'
            next_name='Setting Direction and Wrap with Flex-Flow'
            next_path='/301/flex-flow'
          />
      </div>
    )
  }
}

export default LessonTitle
