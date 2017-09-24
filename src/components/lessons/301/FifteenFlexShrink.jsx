import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> What to Do When There isn't Enough Space? (Flex-Shrink)</h2>
        <p>
          <code>flex-shrink</code> is essentially the opposite of <code>flex-grow</code>. What happens when you have *less* space than ideal?
        </p>
        <p>
          The default value for <code>flex-grow</code> is <code>1</code>, and the values are proportion-based as they are in <code>flex-grow</code>
        </p>
        <p>
          This can be counter-intutive, because higher-numbers make for smaller elements. A good way to think about it is: <em>'How much of this element should I give up if we don't have enough space?"</em> An item with a flex-shrink of <code>2</code> will give up twice as much of itself as an item with the flex-shrink of <code>1</code>.
        </p>
        <p>
          In this example, you can see that as there is extra space, all the flex-items take the space evenly <em>except</em> for the item who's <code>flex-shrink</code> is 2.
        </p>
        <p>
          You don't even have to move the slider. Because the elements take up more space than the container, the item with <code>flex-shrink</code> set to 2 is already taking up less space.
        </p>
        <Codepen
            hash='gxVQMe'
            user='ericwindmill'
            tab='result'
            height='500'
          />

          <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.container {
    display: flex | inline-flex;
  }
  .item-1 {
    flex-shrink: 1 | <number>;
}`} />


        <NextLessonNav
            prev_path='/301/flex-grow'
            prev_name='Account for Extra Space with Flex-Grow'
            next_name='Combine Flex Properties with Some Shorthand'
            next_path='/301/flex-shorthand'
          />
      </div>
    )
  }
}

export default LessonTitle