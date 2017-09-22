import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'

class FiveFlexTerms extends Component {
  render () {
    return(
      <div>
        <h2> Aside: Getting to Know Flex Alignment Terminology </h2>
          <p>
            Alignment is the bread and butter of Flexbox. Aligning items (both on the horizontally or vertically), is incredibly easy with flex.
          </p>
          <p>
            Before you learn about alignment, you need to know the lingo. There are several alignment values that the properties can take. When we get to the individual properties we'll explore which property accepts which values. But here's the terminology and the primer:
          </p>
          <p>
            First, lets explore <code>center</code>, <code>flex-start</code>, and <code>flex-end</code>. Let's use this as a set-up:
          </p>
          <SyntaxHighlighter
            style={monokai}
            language='css'
            children={
`.container {
  display: flex;
  width: 900px;
}

.flex-item {
  width: 200px;
}`          } />

        <ul>
          <li><code>center</code> is the center of a container</li>
          <li><code>flex-start</code> is the beginning of the main-axis</li>
          <li><code>flex-end</code> is the end of the main-axis</li>
        </ul>
        <img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504908728/blog_posts/alignment_props_row.png' alt='flex alignment values' />
        <img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504908723/blog_posts/alignment_props_col.png' alt='flex alignment values' />

        <p>
          And, next we have <code>stretch</code>, <code>space-around</code> and <code>space-between</code>. These will definitely change depending on what alignment property you're using, but the concept remains constant.
        </p>
        <img alt='justify properties' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504908734/blog_posts/justify_props.png' />

        <dl>
          <dt>`stretch` will stretch out all of the flex items to ensure that they take up the space needed.</dt>
          <dt>`space-between` will respect all widths, and then evenly distribute the remaining space between each item.</dt>
          <dd>
            <img alt='space-between' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504909536/blog_posts/justify_props-between.png' />
          </dd>
          <dt>`space-around` is really easy to understand by looking at picture, but hard to put into concise words. Basically, it distributes the extra space between however many space there are between elements PLUS it creates one extra 'free-space' and puts 1/2 of that before the first element and 1/2 after the last.</dt>
          <dd>
            <img alt='space-around' src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1504909541/blog_posts/justify_props-detail.png' />
          </dd>
        </dl>

        <NextLessonNav
            prev_path='/301/flex-flow'
            prev_name='Set flex-direction and flex-wrap with flex-flow'
            next_name='Position on the Main Axis with Justify-Content'
            next_path='/301/justify-content'
          />
      </div>
    )
  }
}

export default FiveFlexTerms