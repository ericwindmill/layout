import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Understanding the Grid Auto Placement Algorithm </h2>
      <p>
        In the beginning we established a grid but didn't explicitly place any items, like this:
      </p>
      <Codepen
            hash='QqGmRe'
            user='ericwindmill'
            tab='result'
            height='250'
          />
        <p>
          This works because of Grid's placement algorithm. The placement algorithm puts grid items that haven't been explicitly placed in the next available cell. So, in the above Codepen, each item is simply placed, in the order they're created in the DOM, in the consecutive spaces.
        </p>
        <p>
          In this example, I'm explicitly placing Item One:
        </p>
        <Codepen
            hash='BwWydM'
            user='ericwindmill'
            tab='result'
            height='250'
          />
        <p>
          In this exmaple, the grid-algo takes these steps:
          <ol>
            <li>Paint the grid lines.</li>
            <li>Paint the grid-items that have been explicitly places (item one, in this case).</li>
            <li> Paint the grid-items, in order, in the next available cells. (two - six, in this case).</li>
          </ol>
        </p>
        <NextLessonNav
            prev_path='/302/grid-area'
            prev_name='Grid Placement Shorthand with Grid-Area'
            next_name='Layering Grid Items with Z-Index'
            next_path='/302/layering'
          />
      </div>
    )
  }
}

export default LessonTitle