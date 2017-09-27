import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Title </h2>
        <p>
          When explicitly placeing grid items, you can place multiple items in the same cells, and then use <code>z-index</code> to layer them. In this example, I've placed 'two' ontop of one, and four behind one. <code>z-index</code> works exactly the way it does with all other tooling systems (most often positioning).
        </p>
        <Codepen
            hash='vexOgw'
            user='ericwindmill'
            tab='result'
            height='500'
          />

        <NextLessonNav
            prev_path='/302/grid-auto-flow'
            prev_name='Controlling Grid Placement with Grid-Auto-Flow'
            next_name='Ordering Items with Order'
            next_path='/302/order'
          />
      </div>
    )
  }
}

export default LessonTitle