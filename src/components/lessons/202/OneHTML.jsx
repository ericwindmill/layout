import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> HTML Tables </h2>
        <p>
          HTML has a <code>&lt;table&gt;</code> and associated tags, which are used to display content in tables. It's easy to imagine using a table as a grid of sorts to layout a page:
        </p>
        <Codepen
          hash='MEaXpa'
          user='ericwindmill'
          tab='html, result'
          height='400'
        />



        <NextLessonNav
            prev_path='/202/'
            prev_name='Intro to Tables'
            next_name='CSS Table Properties'
            next_path='/202/css-table'
          />
      </div>
    )
  }
}

export default LessonTitle