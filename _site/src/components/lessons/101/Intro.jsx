import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'

class Intro extends Component {
  render () {
    return(
      <div>
        <h2> 101: Layout Foundation </h2>
        <p>
          This is very basic CSS, and should shouldn't hesitate to skip if none of the lessons look new to you. They keep it pretty basic for <em>brand new</em> CSS developers. The meat of this tutorial is learning Flex and Grid.
        </p>

        <ul>
          <li>Display</li>
          <li>Sizing: Width and Height</li>
          <li>Box-Sizing</li>
          <li>Position</li>
        </ul>

        <NextLessonNav
          prev_path='/'
          prev_name='Home'
          next_path='/101/box-model'
          next_name='The CSS Box-Model'
        />
      </div>
    )
  }
} 

export default Intro