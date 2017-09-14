import React, { Component } from 'react'
import Codepen from 'react-codepen'
import NextLessonNav from '../../NextLessonNav'

class OneDisplay extends Component {
  render () {  
    return(
      <div>
        <h2>The Display Property</h2>
        <p> The most basic property for giving elements layout is the <code>display</code> property. </p>
        <p> The standard display properties are <code>block</code>, <code>inline</code>, and <code>inline-block</code>. </p>
        <dl>
          <dt><code>display: block</code></dt>
          <dd>Makes an element take up the entire width of its parent element. Therefor no other elements will be on the same line. Block items respect margins and padding, and can have a width and height. Even when a width is set, the element still forces a link break.</dd>
          <dt><code>display: inline</code></dt>
          <dd>makes an element take up only the width that it needs, allowing multiple items to be horizontally aligned. These elements respect right and left margins, but not top and bottom, and you cannot set a height and width.</dd>
          <dt><code>display: inline-block</code></dt>
          <dd>is more or less a combination of the two. It doesn’t force a line-break, so elements can sit at it’s right and left, but in all other regards it’s a ‘block’ level element.</dd>
        </dl>
        <div className='Codepen--Styles'>
          <Codepen
            user="ericwindmill" 
            hash="veONQy"
            height='400'
            tab='result'
          ></Codepen>
        </div>
        <NextLessonNav
          prev_path='/101/'
          prev_name='101: Layout Foundation'
          next_name='HTML Display Defaults'
          next_path='/101/display-defaults'
        />
      </div>
    )
  }
} 

export default OneDisplay