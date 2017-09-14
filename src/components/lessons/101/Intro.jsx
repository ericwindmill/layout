import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'

class Intro extends Component {
  render () {
    return(
      <div>
        <h2> 101: Layout Foundation </h2>
        <p> In the first lessons we'll explore the properties you need to know regardless of which layout tool you decided to use. </p>
        <ul>
          <li>Display</li>
          <li>Sizing: Width and Height</li>
          <li>Box-Sizing</li>
          <li>Position</li>
        </ul>

        <NextLessonNav
          prev_path='/'
          prev_name='Home'
          next_path='/101/display'
          next_name='The Display Property'
        />
      </div>
    )
  }
} 

export default Intro