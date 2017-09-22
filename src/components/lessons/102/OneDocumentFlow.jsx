import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {  
    return(
      <div>
        <h2> Document Flow</h2>
        <p>
          Document flow refers to how the elements are painted onto the screen and interact with eachother. If an element is <em>removed</em> from the document flow, then the elements before and after it don't account for the space it takes up.
        </p>
        <p>
          When an element that's out of document flow changes, it usually causes issues. If a fixed element grows,
          it will eventually overlap the elements near it, unless precautions are taken to avoid this. When elements <em>in</em> the document flow change, the rest of the DOM elements are repainted in order to account for the space the element now takes up.
        </p>

        <p>
          This example shows the caveat of positioned elements, which is a lack of document reflow. 

          The first 'page' uses floats, and the second positioning. This is an extremely contrived example, but it shows that the elements of the page have no relationship to eachother.
        </p> 
        <Codepen
          user="ericwindmill" 
          hash="mBeRrd"
          height='1100'
          tab='result'
        />

        <NextLessonNav
            prev_path='/102/'
            prev_name='The Position Property'
            next_name='Position: Sticky'
            next_path='/102/position-sticky'
          />
      </div>
    )
  }
}

export default LessonTitle