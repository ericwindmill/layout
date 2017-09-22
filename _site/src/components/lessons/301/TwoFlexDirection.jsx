import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2>Arranging Items in Rows or Columns with Flex-Direction</h2>
        <p>
          Flex is based on the idea that layouts are 2d, and there are two axes. The main-axis, and the cross-axis. By default, the main-axis is horizontal, and the cross-axis is vertical.
        </p>
        <img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504824862/blog_posts/Artboard.png' alt='main flex axis' />
        <p>
          This photo is hopefully pretty easy to digest. There are no tricks here. Until you change the axes' directions with `flex-direction`.
        </p>
        <p>
        <code>flex-direction</code> is a property that allows you to switch the direction that flex items are laid out. By default, <code>flex-direction</code> is set to `row`. When set to row, the items are laid out side by side, forming... a row.
        </p>
        <p>
        But, you can change the flex-direction to `column`, and then the axes switch:
        </p>
        <img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504824860/blog_posts/flex-direction_column.png' alt='cross flex axis' />

        <ul>In total, flex-direction takes four values:
          <li>row (default)</li>
          <li>column</li>
          <li>row-reverse</li>
          <li>column-reverse</li>
        </ul>
        <p>
          The second two simply flip the order in which flex-items are laidout. This is easiest to imagine with images or a list. Reverse the order of the list without having to touch HTML or content!
        </p>
        <Codepen
            hash='XaQJRQ'
            user='ericwindmill'
            tab='result'
            height='400'
          />
          <br />
          <p>
            The directions of the axes is the base for all the flex properties. At anytime if you're getting guff from flex, it helps a lot to stop and think about what your axis is.
          </p>

          <h3>API</h3>
          <SyntaxHighlighter
            style={monokai}
            language='css'
            children={
`.container {
    display: flex | inline-flex;
    flex-direction: row | column | row-reverse | column-reverse;
}`} />

        <NextLessonNav
            prev_path='/301/display-flex'
            prev_name='Setting Up Your Flex-Box'
            next_name='Wrapping your Elements with Flex-Wrap'
            next_path='/301/flex-wrap'
          />
      </div>
    )
  }
}

export default LessonTitle