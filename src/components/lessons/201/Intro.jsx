import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'

class FloatIntro extends Component {
  render () {  
    return(
      <div>
        <h2> Intro to Floats </h2>
        <p> 
          The <code>float</code> property is used to make elements wrap around one and other. Think of it like print. Text wraps around images in newspapers and textbooks. That was the original inspiration for floats.
        </p>
        <p>
          This is another case of a property that <em>isn't</em> meant for layout, but it's often used for it. I like to think of float's as a tool for laying out <em>content</em>, not pages.
        </p>
        <Codepen
          user='ericwindmill'
          hash='veNRNw'
          tab='result'
          height='400'
        />
        <NextLessonNav
          prev_path='/102/position-sticky'
          prev_name='Position: Sticky'
          next_name='Float Syntax and Usage'
          next_path='/201/float'
        />

      </div>
    )
  }
}

export default FloatIntro
