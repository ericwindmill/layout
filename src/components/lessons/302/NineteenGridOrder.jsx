import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Order Grid Items with Order </h2>
        <p>
          Ordering is the last way to manipulate grid's placement algorithm. Grid supports the <code>order</code> property introduced for Flexbox.
        </p>
        <p>
          By assigning an <code>order</code> to a grid-item, it dictates the order in which the algorithm will pain the item into the grid.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.flex-item-four {
  order: 1;
}` }/>
        <p>
          <code>order</code> uses a relative system, and the default order for all grid items is 0. So, by setting <code>order</code> to 1 for a single item, we are actually placing it <em>last</em>.
        </p>
        <p>
          Let's look at a previous grid.
        </p>
        <Codepen
            hash='YrVKYg'
            user='ericwindmill'
            tab='result'
            height='500'
          />
          <p>
            By simply setting <code>order</code> to 1 on flex-item four, the item is now placed last.
          </p>
          <p>
            This is most often used with media queries to change the order based on device type, in case you wanted a different basic layout for mobile and desktop.
          </p>
          <p>
            As with flexbox, it's important to keep in mind that order does not change the order the elements are painted on the DOM.
          </p>
        <NextLessonNav
            prev_path='/302/layering'
            prev_name='Layer Grid Items with Z-Index'
            next_name='Align Items on the Row-Axis with Justify-Items'
            next_path='/302/justify-items'
          />
      </div>
    )
  }
}

export default LessonTitle