import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class SixJustifyContent extends Component {
  render () {
    return(
      <div>
        <h2> Position on the Main-Axis with Justify-Content </h2>
        <p>
          Alignment in flex is really the main learning curve, and its mostly a matter of knowing your options. One of the properties you'll use almost every time you use flex is <code>justify-content</code>.
        </p>
        <ul>
          Justify-conent takes 5 possible values, which are all easy enough to work with in a basic case.
          <li><code>flex-start</code></li>
          <li><code>center</code></li>
          <li><code>flex-end</code></li>
          <li><code>space-around</code></li>
          <li><code>space-btween</code></li>
        </ul>
        <Codepen
            hash='jLgBxm'
            user='ericwindmill'
            tab='result'
            height='400'
          />
          <p>
            Things can get hairy when we toss in other factors, like setting <code> flex-direction: column</code>. Again, it all comes down to the axes switching. Every property in flexbox alignment works along a certain axis. Justify-content works along the **main-axis**. In the example above, when you have no choice in changing the axis, so you can see the changes it makes the contents justification.
          </p>
          <p>
            In this pen, though, you'll notice that when you toggle the direction to `column`, it just breaks. No matter which value you choose, the elements don't budge.
          </p>
          <Codepen
            hash='oeKZOr'
            user='ericwindmill'
            tab='html, result'
            height='400'
          />
          <ul> Let's think about what's actually happening here.
            <li>First, the axis is switching. That's the main idea behind switching the direction from row to column.</li>
            <li>When the axis switches, the property `justify-content` is now dictating where the items are painted from top to bottom, rather than side to side.</li>
            <li>Flex containers are *flexible*, so the container is resizing to fit all the content.</li>
            <li>The width of the content is greater than the width of the container, so there's no extra space to distribute. This is the key.</li>
          </ul>
          <p>
            No matter what value you pass to <code>justify-content</code>, the content is taking up 100% of the available space. Justification is all about the relationship between the items and the extraspace. But here, there's no extra space!
          </p>
          <p>
            This becomes clearer when you toggle on an explicit height for the flex-container.
          </p>
          <Codepen
            hash='EvqmZz'
            user='ericwindmill'
            tab='html, result'
            height='400'
          />

          <h3> API </h3>
          <SyntaxHighlighter
            language='css'
            style={monokai}
            children={
`.flex-container {
    display: flex | inline-flex;
    justify-content: flex-start | center | flex-end | space-around | space-between;
}`} />

        <NextLessonNav
            prev_path='/301/flex-terms'
            prev_name='Aside: Learn some flex terminology'
            next_name='Position on the cross-axis with align-items'
            next_path='/301/align-items'
          />
      </div>
    )
  }
}

export default SixJustifyContent