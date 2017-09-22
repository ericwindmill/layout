import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class EightAlignBaseline extends Component {
  render () {
    return(
      <div>
        <h2> Align Items By their Content with Align-Items: Baseline </h2>
        <p>
          The value `baseline` for `align-items` isn't used often, but when you need it, it's a life-saver. It aligns all the items according the base of their content, rather than the base of border-box.
        </p>
        <p>
          Think about the CSS box-model.
        </p>
        <img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1503687474/blog_posts/CSSBoxModel.png' alt='CSS Box Model' />
        <p>
          The bottom of the 'content' portion of an HTML element is how baseline aligns. As far as their collective position within the container, they're aligned so that the tallest element is flush to the flex-start.
        </p>
        <Codepen
            hash='BdXZmv'
            user='ericwindmill'
            tab='result'
            height='400'
          />
          <h3>API</h3>
          <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`  .container {
    display: flex | inline-flex;
    align-items: baseline;
  }`} />

        <NextLessonNav
            prev_path='/301/align-items'
            prev_name='Position items on the cross-axis with Align-Items'
            next_name='Align collective content with Align-Content'
            next_path='/301/align-content'
          />
      </div>
    )
  }
}

export default EightAlignBaseline