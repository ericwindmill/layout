import React, { Component } from 'react'
import Codepen from 'react-codepen'
import NextLessonNav from '../../NextLessonNav'

class FourDisplay extends Component {
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
        <h3>More Resources</h3>
        <ul>
          <li> 
            All HTML elements have default <code>display</code> values.  
            <a href='https://www.w3schools.com/cssref/css_default_values.asp' alt='MDN Display Page'>Here's an exhausive list.</a> 
          </li>
          <li>
            There are many edge-case values that display takes, but they're hardly used (except the ones mentioned later in this guide). 
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/display' alt='MDN Display Page'>Here's an exhaustive list.</a>
          </li>
        </ul>
        
          
        <NextLessonNav
          prev_path='/101/box-sizing'
          prev_name='Box Sizing: Border Box'
          next_name='Margin: Auto'
          next_path='/101/margin-auto'
        />
      </div>
    )
  }
} 

export default FourDisplay