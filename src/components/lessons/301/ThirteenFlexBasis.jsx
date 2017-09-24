import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class ThirteenFlexBasis extends Component {
  render () {
    return(
      <div>
        <h2> Set an Item's Ideal Size with Flex-Basis </h2>
        <p>
          <code>flex-basis</code> sets the starting size for the flex-item on it's main-axis. The point of all the <code>flex-*</code> properties is to account for different sized containers, but <code>flex-basis</code> is used to account for the <strong>ideal</strong> situation.
        </p>
        <p>
          The question this property answers is, <em>'If you know exactly how much space you have, what should the size of this flex-item be?'</em>
        </p>
        <p>
          <code>flex-basis</code> takes any value that you could pass to a value like width. ems, rems, px, % are all fair game.</p>
        <p>
          If you set the <code>flex-basis</code> on one or some (but not all) of your flex-items, the items with explicit basis will take up that much room (if available), and all the other items are implicity set to <code>auto</code>, so they'll be distributed the remaining space by flexbox.
        </p>
        <Codepen
            hash='mMNpMZ'
            user='ericwindmill'
            tab='result'
            height='300'
          />

          <h3> API </h3>
          <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.container {
    display: flex | inline-flex;
  }
  .item-1 {
    flex-basis: auto | 10em | 3px | 50%;
}`} />

        <NextLessonNav
            prev_path='/301/flex'
            prev_name='Control the Responsive Size of Elements with the Flex Property'
            next_name='Use Extra Space with Flex-Grow'
            next_path='/301/flex-grow'
          />
      </div>
    )
  }
}

export default ThirteenFlexBasis