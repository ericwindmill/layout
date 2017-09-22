import React, { Component } from 'react'
import Codepen from 'react-codepen'
import NextLessonNav from '../../NextLessonNav'

class TwoSizing extends Component {

  render () {  
    return(
      <div>
        <h2> Width & Height</h2>
        <section>
          <code>width</code> and <code>height</code> are very similar and pretty self-explanatory. There are a few things worth noting:
          <ul>
            <li>Both take any units as values. <code>px, %, em and rem</code> being the most popular.</li>
            <li>When the width or height is set to a percentage. It's referring to a a percentage of it's <em>parent</em> element.</li>
            <li>Width and height change the size of the <em>content</em> by default.</li>
          </ul>
        </section>

        <h3>min-width, max-width, min-height, max-height</h3>
        <p> These four properties are again pretty self explanatory. They overwrite the properties width and height when the elements are of a certain size. </p>

        <p> These are mainly used in building responsive layouts, and you'll find much more use for them later when you learn flexbox and grid.</p>

        <p> For now, you can resize the window and see how the codepen below reacts. You'll notice that the p element only shrinks and grows between 300px and 500px.</p>
        <Codepen
          user="ericwindmill" 
          hash="BdOopG"
          height='400'
          tab='result'
        ></Codepen>

        <NextLessonNav
          prev_path='/101/box-model'
          prev_name='The CSS Box Model'
          next_name='Box Sizing: Border Box'
          next_path='/101/box-sizing'
        />
      </div>
    )
  }
}

export default TwoSizing