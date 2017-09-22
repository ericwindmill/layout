import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Change the Order of Flex Items with Order </h2>
        <p>
          We're moving onto properties that live completely on flex-items.
        </p>
        <p>
          First we'll talk about <code>order</code>, something that isn't used terribly often (in my experince), but it's useful when you need it.
        </p>
        <p>
          Giving a flex-item an <code>order</code> allows you to change the order that the flex-items appear to be painted onto the DOM (<em>without Javascript</em>).
        </p>
        <h3>Caveat</h3>
        <p>
          The word <strong>appear</strong> is important. If you change the order of some items, and then pop open the dev-tools, you'll see that the items still appear in order in the DOM. This only gives us one small issue.  If you try and copy and paste content who's order is being maniputlated using <code>flex: order</code>, it will copy the content in their true (DOM) order.
        </p>
        <p>
        <code>order</code> values work like z-index. By default, everything is set set to 0. Then, if you change a single item's <code>order</code> to 1, it will become the <em>last</em> item. The value of <code>order</code> matters only in relation to it's siblings.
        </p>
        <p>
          The best use of <code>order</code> is when making pages responsive for mobile. Sometimes you'll want sections of text or images painted in a different order on mobile and desktop. This is easily done with <code>order</code>.
        </p>
        <Codepen
            hash='rzXYeV'
            user='ericwindmill'
            tab='result'
            height='400'
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
    order: <integer>;
  }`
          } />

        <NextLessonNav
            prev_path='/301/align-self'
            prev_name='Align Individual Items with Align-Self'
            next_name='Control the Responsive Size of Elements with the Flex Property'
            next_path='/301/flex'
          />
      </div>
    )
  }
}

export default LessonTitle