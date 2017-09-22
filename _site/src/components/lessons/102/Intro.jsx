import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {  
    return(
      <div>
        <h2> The Position Property </h2>
        <p>
          The <code>position</code> property is used to define <em>exactly</em> where you want an element to be.
        </p>
        <p>
          Different values for this property allow you to position an element relative to its parent, any ancestor, or the global window.
        </p>
        <p>
          Positioned element's place on the screen is manipulated using a combination of the <code>position</code> property and the <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code> and <code>z-index</code> properties. (More on these in a bit.)'
        </p>
        <p>Position takes 5 values:</p>
        <dl>
          <dt><code>static</code></dt>
          <dd>Static is the default for <em>all</em> elements. Top, bottom, left, right and z-index have no effect on static elements.</dd>
          <dt><code>relative</code></dt>
          <dd>Relatve elements are considered positioned, and will respond to top, bottom, left, right and z-index. However, if you don't manipulate the position, it will appear as if nothing happens.</dd>
          <dt><code>absolute</code></dt>
          <dd>When an element is positioned absolute, it is <strong>taken out of the normal flow the document</strong>. That is, it's given no space on the page layout, and is positioned according to it's closest positioned ancestor.</dd>
          <dt><code>fixed</code></dt>
          <dd>Elements with a fixed position are also taken out of the document flow, but these elements are positioned according to the window. Therefor, they don't respect scroll. They will be fixed to their position on the Window no matter what.</dd>
          <dt><code>sticky</code></dt>
          <dd>Sticky elements are positioned similarly to 'relative', but they become offset when a certain parameter is met. Please see the whole lesson on this.</dd>
        </dl>

        <h3>Top, Bottom, Left and Right</h3>
        <p>
          These four properities simply change the placement of a positioned element. <code>top: 50px</code> will set the distance between the elements top edge and the top edge of the containing block to 50px;
        </p>
        <p>
          The trick to using these is knowing what the 'containing block' is. When the position is 'relative', it's containing block is <em>itself</em>. When absolute, it's containing block is it's closest positioned ancestor. When fixed, it's containing block is the root element (the window in the browser).
        </p>
        <p>
          It's very common to set an element's position to <code>relative</code>, but not manipulate it's position, so that you <em>can</em> manipulate it's children with <code>absolute</code>.
        </p>

        <Codepen
          user="ericwindmill" 
          hash="bodZXa"
          height='400'
          tab='result'
        ></Codepen>

        <NextLessonNav
          prev_path='/101/margin-auto'
          prev_name='Margin: Auto'
          next_name='Document Flow'
          next_path='/102/document-flow'
        />

      </div>
    )
  }
}

export default LessonTitle