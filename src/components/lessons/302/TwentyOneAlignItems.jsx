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



        <NextLessonNav
            prev_path='101'
            prev_name='Dummy'
            next_name='Dummy'
            next_path='101'
          />
      </div>
    )
  }
}

export default LessonTitle