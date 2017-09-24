import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2>Account for Extra Space with Flex-Grow</h2>
        <p>
          <code>flex-grow</code> dictates how much of the extra-space an individual item will be allotted. Remember that <code>flex-basis</code> is based on an 'ideal' situation where you know exactly how much space you have. <code>flex-grow</code> considers the situation where you have <strong>more</strong> space than you expected.
        </p>
        <p>
          <code>flex-grow</code> properties are based on proportions. A item with <code>flex-grow: 2</code> will grow at twice the rate of an item with <code>flex-item: 1</code>.
        </p>
        <p>
          By default, all items have a `flex-grow` of 0, which means they don't grow when the container element is larger than expected. If you give a single item a `flex-grow` of 1, then it will grow, while everything else will remain unchanged:
        </p>

        <Codepen
            hash='prMpWe'
            user='ericwindmill'
            tab='result'
            height='500'
          />
          <p>
            That's the simplest way to use to <code>flex-grow</code>--to make some items grow and some retain their width. For example, you may want an image or table to remain the same size on all different laptop screen sizes, but the paragraph content-width could grow on large screens.
          </p>
          <Codepen
            hash='VzoEOP'
            user='ericwindmill'
            tab='result'
            height='500'
          />
          <h3>API</h3>
          <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.container {
    display: flex | inline-flex;
  }
  .item-1 {
    flex-grow: 0 | <any number>;
  }`} />

        <NextLessonNav
            prev_path='/301/flex-basis'
            prev_name='Set the Ideal Size with Flex-Basis'
            next_name='Account for Too Little Space with Flex-Shrink'
            next_path='/301/flex-shrink'
          />
      </div>
    )
  }
}

export default LessonTitle